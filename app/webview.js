
function checkedInited() {
	setTimeout(function(){
		if(!window.exportRoot) {
			checkedInited();
		} else {
			// console.log(lib);
			// const {fps, width, height, color} = lib.properties;
			const props = {
				duration: exportRoot.timeline.duration,
				fps: createjs.Ticker.getFPS(),
				// width,
				// height,
				// color,
				paused: window.exportRoot.paused,
			}
			ipcRenderer.sendToHost('inited', JSON.stringify(props));
		}
	}, 1000)
}

function setIsPaused() {
	ipcRenderer.sendToHost('setIsPaused', window.exportRoot.paused);
}

const {ipcRenderer} = require('electron')
const fs = require('fs');
const path = require('path');

ipcRenderer.on('setImage', (e, message) => {
  console.log(message);
  // ipcRenderer.sendToHost('pong pong')
})
ipcRenderer.on('play', (e, message) => {
	window.exportRoot.timeline.removeAllEventListeners();
	window.exportRoot.paused = false;
	setIsPaused();
  
})
ipcRenderer.on('pause', (e, message) => {
	// window.exportRoot.timeline.removeAllEventListeners();
	window.exportRoot.paused = true;
	setIsPaused();
})
ipcRenderer.on('reset', (e, message) => {
	// window.exportRoot.timeline.removeAllEventListeners();
	window.exportRoot.gotoAndStop(0);
	setIsPaused();
  // ipcRenderer.sendToHost('pong pong')
})
ipcRenderer.on('checkedInited', (e, message) => {
	checkedInited();
})
ipcRenderer.on('getBase64', (e, message) => {
	ipcRenderer.sendToHost('base64', window.canvas.toDataURL());
})
ipcRenderer.on('exportImg', (e, message)=>{
	window.exportRoot.timeline.removeAllEventListeners();
	console.log(message);
	const duration = window.exportRoot.timeline.duration
	let currentPosition = 0;
	window.exportRoot.gotoAndStop(0.1);

	const tickHandler = window.exportRoot.timeline.on('change', () => {
		const thisPosition = window.exportRoot.timeline.position;
		console.log(thisPosition);
		window.stage.update();
		const base64str = window.canvas.toDataURL();
		

		var imgdata =  base64str.slice(22)
		fs.writeFile(path.join(message, 'img'+thisPosition+'.png'), imgdata, 'base64', function(err){
			if(err) {
				console.error(err);
			}
			if(thisPosition + 1 < duration) {
				window.exportRoot.gotoAndStop(thisPosition + 1);
			} else {
				// window.exportRoot.timeline.off(tickHandler);
				window.exportRoot.timeline.removeAllEventListeners();
				// window.ffmpegService.generateMp4();
				console.log('生成完毕');
				ipcRenderer.sendToHost('generateMp4');
			}
		});
		
	});
	window.exportRoot.gotoAndStop(0);
})

function bindTick() {
	window.exportRoot.on('change', function() {
		ipcRenderer.sendToHost('tick', window.exportRoot.timeline.position);
	})
}
checkedInited();