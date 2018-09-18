(function(){
	opts = [];
	window.util = {
		fill: (color) => {
			const rect = new createjs.Shape();
			rect.graphics.beginFill(color).drawRect(0, 0, canvas.width, canvas.height);
			stage.addChild(rect);
		},
		n: () =>{
			return 'name' + Date.now() + parseInt(Math.random() * 100000);
		},
		// 添加表单
		add: (opt) => {
			opts.push(opt.map((item)=>{
				item.name = util.n();
				return item;
			}))
		},
		setImage: ({src, instance}) => {
			const img = new Image();
			img.src = src;
			img.onload = function(){
				let imgList = Array.isArray(instance)? instance : [instance];
				imgList.forEach((item)=>{
					item.image = img;
				})
			}
		}

	}
	// 检测是否加载完成
	function checkedInited() {
		setTimeout(function(){
			if(!window.exportRoot) {
				checkedInited();
			} else {
				/* const bg = new createjs.Shape();
				bg.graphics.beginFill('rgba(0,0,0,0.1)').drawRect(0, 0, canvas.width, canvas.height);
				exportRoot.addChildAt(bg, 1)
				console.log(exportRoot.getChildAt(1))*/
				/* try{
					setOptions();
				}catch(e){
					console.error(e);
				}*/ 
					console.log(exportRoot);
				// console.log(JSON.stringify(options));
				// console.log(lib);
				// const {fps, width, height, color} = lib.properties;
				const props = {
					duration: exportRoot.timeline.duration,
					fps: createjs.Ticker.getFPS(),
					width: window.canvas.width,
					height: window.canvas.height,
					// color,
					paused: window.exportRoot.paused,
				}
				// createSizeTag({width, height});
				ipcRenderer.sendToHost('inited', JSON.stringify(props), JSON.stringify(window.options || []), JSON.stringify(window.opts || []));
				// ipcRenderer.sendToHost('setOptions', JSON.stringify(props));
				/* createjs.Ticker.addEventListener("tick", ()=>{
					// ipcRenderer.sendToHost('tick', window.exportRoot.timeline.position);
					// console.log(window.exportRoot.timeline.position);
				});*/
				bindTick();
				addResizeBar();
			}
		}, 1000)
	}

	function setIsPaused() {
		// alert(stage.tickEnabled);
		ipcRenderer.sendToHost('setIsPaused', /*!stage.tickEnabled*/ window.exportRoot.paused);
	}

	const {ipcRenderer} = require('electron')
	const fs = require('fs');
	const path = require('path');

	ipcRenderer.on('setImage', (e, message) => {
	console.log(message);
	// ipcRenderer.sendToHost('pong pong')
	})
	ipcRenderer.on('play', (e, message) => {
		/* try{
			stage.play();
		}catch(e) {
			// alert(e);
		}*/
		window.exportRoot.timeline.removeAllEventListeners();
		window.exportRoot.paused = false;
		setIsPaused();
	
	})
	ipcRenderer.on('pause', (e, message) => {
		// window.exportRoot.timeline.removeAllEventListeners();
		/*try{
			stage.stop();
		}catch(e) {
			window.exportRoot.paused = true;
		}*/
		window.exportRoot.paused = true;
		setIsPaused();
	})
	ipcRenderer.on('reset', (e, message) => {
		// window.exportRoot.timeline.removeAllEventListeners();
		window.exportRoot.gotoAndStop(0);
		setIsPaused();
	// ipcRenderer.sendToHost('pong pong')
	})
	ipcRenderer.on('getBase64', (e, message) => {
		ipcRenderer.sendToHost('base64', window.canvas.toDataURL());
	})
	ipcRenderer.on('checkedInited', (e, message) => {
		checkedInited();
	})
	
	// 旧
	ipcRenderer.on('setOptions', (e, message) => {
		console.log(message);
		const toSetOptions = JSON.parse(message);
		const toSetOptionsKeys = Object.keys(toSetOptions);
		// alert(toSetOptionsKeys);
		options.forEach((item) => {
			if(item.name && (toSetOptions[item.name] != undefined)) {
				if (toSetOptions[item.name] != item.value) {
					item.value = toSetOptions[item.name];
					item.callback(toSetOptions[item.name]);
				}
			}
			console.log(item);
			const valueSet = {};
			toSetOptionsKeys.forEach((i)=>{
				if(i.indexOf(item.name) > -1 && i.indexOf('-') > -1) {
					const key = i.split('-')[1];
					if (toSetOptions[i] != '' &&item[key] != toSetOptions[i]) {
						item[key] = toSetOptions[i]
						valueSet[key] = toSetOptions[i];
					}
				}
			})
			if (Object.keys(valueSet).length > 0) {
				item.callback(valueSet);
			}
		})
		//ipcRenderer.sendToHost('base64', window.canvas.toDataURL());
	})
	// 新
	ipcRenderer.on('setOpts', (e, message) => {
		console.log(message);
		const toSetOpts = JSON.parse(message);
		const toSetOptionsKeys = Object.keys(toSetOpts);
		// alert(toSetOptionsKeys);
		opts.forEach((opt) => {
			opt.forEach((item)=>{
				if(item.name && (toSetOpts[item.name] != undefined)) {
					if (toSetOpts[item.name] != item.value) {
						item.value = toSetOpts[item.name];
						item.callback(toSetOpts[item.name]);
					}
				}
			})
		})
		//ipcRenderer.sendToHost('base64', window.canvas.toDataURL());
	})
	// 导出图片
	ipcRenderer.on('exportImg', (e, message)=>{
		// stage.seek(0);
		window.exportRoot.timeline.removeAllEventListeners();
		const {path: dirpath, imgPrefix} = JSON.parse(message);

		const duration = window.exportRoot.timeline.duration
		let currentPosition = 0;
		window.exportRoot.gotoAndStop(0.1);
		
		setIsPaused();
		/* const tickHandle = stage.on('tick',()=>{
			const thisPosition = window.exportRoot.timeline.position;
			ipcRenderer.sendToHost('setProgress', thisPosition);
			console.log(thisPosition);
			window.stage.update();
			const base64str = window.canvas.toDataURL();
			var imgdata =  base64str.slice(22)
			imageCount[thisPosition] = false; 
			fs.writeFile(path.join(dirpath, imgPrefix + thisPosition + '.png'), imgdata, 'base64', function(err){
				if(err) {
					console.error(err);
				}
				if(thisPosition + 1 < duration) {
					window.exportRoot.gotoAndStop(thisPosition + 1);
				} else {
					// window.exportRoot.timeline.off(tickHandler);
					// window.exportRoot.timeline.removeAllEventListeners();
					// window.ffmpegService.generateMp4();
					if(imageCount.length == imageCount.filter((i)=>{return i;})) {
						console.log('生成完毕');
						ipcRenderer.sendToHost('generateMp4');
					}

				}
			});
		})*/
		
		const tickHandler = window.exportRoot.timeline.on('change', () => {
			const thisPosition = window.exportRoot.timeline.position;
			ipcRenderer.sendToHost('setProgress', thisPosition);
			console.log('positon', thisPosition);
			window.stage.update();
			const base64str = window.canvas.toDataURL();
			

			var imgdata =  base64str.slice(22)
			fs.writeFile(path.join(dirpath, imgPrefix + thisPosition + '.png'), imgdata, 'base64', function(err){
				if(err) {
					console.error(err);
				}
				if(thisPosition + 1 < duration) {
					window.exportRoot.gotoAndStop(thisPosition + 1);
				} else {
					window.exportRoot.timeline.removeAllEventListeners();
					// window.ffmpegService.generateMp4();
					console.log('生成完毕');
					ipcRenderer.sendToHost('generateMp4');

				}
			});
			
		});
		window.exportRoot.gotoAndStop(0);
	})

	let currentP = 0;
	function bindTick() {
		
		createjs.Ticker.addEventListener("tick", function() {
			const p = window.exportRoot.timeline.position;
			// console.log(p);
			if (currentP != p) {
				currentP = p;
				ipcRenderer.sendToHost('tick', p);
			}
		})
	}
	function addResizeBar() {
		const scale = [0, 0.2, 0.5, 0.6, 0.8, 1, 1.2, 1.5, 2, 2.5, 3]
		const range = document.createElement('input');
		const container = document.getElementById('animation_container');
		range.title = 1;
		range.type = 'range';
		range.max = 10
		range.min = 1
		range.value = 5;
		range.addEventListener('input', function(e) {
			// console.log(this.value);
			const scaleValue = scale[this.value];
			range.title = scaleValue;
			// console.log(scaleValue);
			(container || canvas).style.transform = `scale(${scaleValue},${scaleValue})`
		})
		document.body.appendChild(range);
	}
	checkedInited();
})();