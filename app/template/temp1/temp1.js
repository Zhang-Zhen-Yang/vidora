(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._20151004095106_KZRmGthumb700_0 = function() {
	this.initialize(img._20151004095106_KZRmGthumb700_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,394);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib._20151004095106_KZRmGthumb700_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.294,1.294);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,905.6,509.8), null);


// stage content:
(lib.temp1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(369.6,375.8,1,1,0,0,0,452.6,254.8);
	this.instance.alpha = 0;
	
	window.tween1 = cjs.Tween.get(this.instance).wait(1)
	.to({regX:452.8,regY:254.9,x:370,y:359.6,alpha:0.043},0).wait(1).
	to({x:370.1,y:344.7,alpha:0.087},0).wait(1).
	to({x:370.2,y:331.1,alpha:0.13},0).wait(1).
	to({x:370.3,y:318.9,alpha:0.174},0).wait(1).
	to({x:370.4,y:307.8,alpha:0.217},0).wait(1).
	to({y:298,alpha:0.261},0).wait(1).
	to({x:370.5,y:289.2,alpha:0.304},0).wait(1).
	to({x:370.6,y:281.4,alpha:0.348},0).wait(1).
	to({y:274.6,alpha:0.391},0).wait(1).
	to({x:370.7,y:268.8,alpha:0.435},0).wait(1).
	to({y:263.7,alpha:0.478},0).wait(1).
	to({y:259.5,alpha:0.522},0).wait(1).
	to({x:370.8,y:255.9,alpha:0.565},0).wait(1).
	to({y:253,alpha:0.609},0).wait(1).
	to({y:250.7,alpha:0.652},0).wait(1).
	to({y:248.9,alpha:0.696},0).wait(1).
	to({y:247.5,alpha:0.739},0).wait(1).
	to({y:246.5,alpha:0.783},0).wait(1).
	to({y:245.9,alpha:0.826},0).wait(1).
	to({y:245.5,alpha:0.87},0).wait(1).
	to({y:245.3,alpha:0.913},0).wait(1).
	to({y:245.2,alpha:0.957},0).wait(1).
	to({alpha:1},0).wait(1);

	this.timeline.addTween(window.tween1);


	util.add([
		{
			label: '图片1',
			value:this.instance.instance.image.src,
			type: 'image',
			callback: (val)=>{
				const nImg = new Image();
				nImg.src = val;
				nImg.onload = () =>{
					this.instance.instance.image= nImg;
				}
			}
		},
		{
			label: 'x',
			value:this.instance.instance.x,
			type: 'number',
			step: 10,
			callback: (res)=>{
				this.instance.instance.set({
					x: res,
				});
			}
		},
		{
			label: 'y',
			value:this.instance.instance.y,
			type: 'number',
			step: 10,
			callback: (res)=>{
				this.instance.instance.set({
					y: res,
				});
			}
		},
		{
			name: util.n(),
			label: 'scaleX',
			value:this.instance.instance.scaleX,
			type: 'number',
			step: 0.1,
			callback: (res)=>{
				this.instance.instance.set({
					scaleX: res,
				});
			}
		},
		{
			label: 'scaleY',
			value:this.instance.instance.scaleY,
			type: 'number',
			step: 0.1,
			callback: (res)=>{
				this.instance.instance.set({
					scaleY: res,
				});
			}
		},
		{
			label: 'rotation',
			value:this.instance.instance.rotation,
			type: 'number',
			step: 1,
			callback: (res)=>{
				this.instance.instance.set({
					rotation: res,
				});
			}
		},
		{	
			label: '缓动',
			value: 1,
			type: 'select',
			options: [1, 2, 3, 4, 5],
			callback: (r) => {
				console.log(r);
				console.log(exportRoot.timeline);
				if (r == 1) {
					exportRoot.timeline.removeTween(window.tween1);
				}else {
					exportRoot.timeline.addTween(window.tween1);
				}
				
			}
		},
		{
			label: 'aa',
			type: 'button',
			callback: () =>{
				alert('ddd');
			}
		},
		{
			label: 'checkbox',
			type: 'checkbox',
			value: {
				apple: true,
				banana: false,
				p: true,
			},
			options: [
				{
					value: 'a',
					name: 'apple',
				},
				{
					value: 'b',
					name: 'banana',
				},
				{
					value: 'p',
					name: 'p',
				},
				
			],
			callback: (r) => {

			}
		},
		{
			label: 'radio',
			type: 'radio',
			value: 'b',
			options: [
				{
					value: 'a',
					name: 'apple'
				},
				{
					value: 'b',
					name: 'banana',
				},
				{
					value: 'c',
					name: 'camera',
				},
				{
					value: 'd',
					name: 'digital',
				},
				{
					value: 'e',
					name: 'english',
				},
			],
			callback: (r) => {

			}
		}
	])

	/*util.add([
		{
			name: 'img2',
			label: '图片2',
			value:img1.src,
			type: 'image',
			callback: ()=>{

			}
		},
		{
			name: '字体',
			label: '字体',
			value: 'yahei',
			type: 'font',
			options: [],
			callback: (res) => {
				console.log(res);
			}
		}
	])*/

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(317,371,905.6,509.8);
// library properties:
lib.properties = {
	id: 'B3AC91528E9A224AB3A60B10DB233A9D',
	width: 800,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_20151004095106_KZRmGthumb700_0.jpeg", id:"_20151004095106_KZRmGthumb700_0"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B3AC91528E9A224AB3A60B10DB233A9D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
