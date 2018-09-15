(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.pixiv44817733 = function() {
	this.initialize(img.pixiv44817733);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1166,1523);// helper functions:

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


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.text = new cjs.Text("animate", "96px 'Times New Roman'", "#0066CC");
	this.text.lineHeight = 108;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,308,110.3), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.pixiv44817733();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.345,0.345);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,402.1,525.2), null);


// stage content:
(lib.h = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(411,288.4,1,1,0,0,0,154,55.1);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));


	// 图层_1
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.7,416.6,1,1,0,0,0,196.7,508.1);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1)
	.to({regX:201,regY:262.6,x:281.4,y:171.5},0).wait(1)
	.to({x:287.9,y:172.4},0).wait(1).to({x:294.4,y:173.9},0).wait(1)
	.to({x:300.8,y:176.1},0).wait(1)
	.to({x:307.3,y:178.8},0).wait(1)
	.to({x:313.8,y:182.2},0).wait(1)
	.to({x:320.3,y:186.2},0).wait(1)
	.to({x:326.7,y:190.8},0).wait(1)
	.to({x:333.2,y:196},0).wait(1)
	.to({x:339.7,y:201.9},0).wait(1)
	.to({x:346.2,y:208.3},0).wait(1)
	.to({x:352.6,y:215.4},0).wait(1)
	.to({x:359.1,y:223.1},0).wait(1)
	.to({x:365.6,y:231.4},0).wait(1)
	.to({x:372,y:240.3},0).wait(1)
	.to({x:378.5,y:249.8},0).wait(1)
	.to({x:385,y:259.9},0).wait(1)
	.to({x:391.5,y:270.6},0).wait(1)
	.to({x:397.9,y:282},0).wait(1)
	.to({x:404.4,y:294},0).wait(1)
	.to({x:410.9,y:306.6},0).wait(1)
	.to({x:417.4,y:319.8},0).wait(1)
	.to({x:423.8,y:333.6},0).wait(1)
	.to({x:430.3,y:348.1},0).wait(1)
	.to({x:436.8,y:363.1},0).wait(1)
	.to({x:443.2,y:378.8},0).wait(1)
	.to({x:449.7,y:395.1},0).wait(1)
	.to({x:456.2,y:412},0).wait(1)
	.to({x:462.7,y:429.5},0).wait(1)
	.to({x:469.1,y:447.6},0).wait(1)
	.to({x:475.6,y:466.4},0).wait(1)
	.to({x:482.1,y:485.7},0).wait(1)
	.to({x:488.6,y:505.7},0).wait(1)
	.to({x:495,y:526.3},0).wait(1)
	.to({x:501.5,y:547.5},0).wait(1)
	.to({scaleX:1.45,scaleY:0.73,x:509.9,y:635.5},0)
	.wait(1).to({scaleX:1.5,scaleY:0.7,x:516.6,y:612.2},0)
	.wait(1).to({scaleX:1.45,scaleY:0.74,x:522.8,y:576.2},0).wait(1)
	.to({scaleX:1,scaleY:1,x:527.4,y:487.9},0).wait(1)
	.to({x:533.9,y:468},0).wait(1)
	.to({x:540.3,y:451.7},0).wait(1)
	.to({x:546.8,y:439.1},0).wait(1)
	.to({x:553.3,y:430},0).wait(1)
	.to({x:559.8,y:424.6},0).wait(1)
	.to({x:566.2,y:422.8},0).wait(1)
	.to({x:572.7,y:424.6},0).wait(1)
	.to({x:579.2,y:430},0).wait(1)
	.to({x:585.7,y:439.1},0).wait(1)
	.to({x:592.1,y:451.7},0).wait(1)
	.to({x:598.6,y:468},0).wait(1)
	.to({x:605.1,y:487.9},0).wait(1)
	.to({x:611.5,y:511.4},0).wait(1)
	.to({x:618,y:538.6},0).wait(1)
	.to({x:624.5,y:569.3},0).wait(1)
	.to({scaleX:1.3,scaleY:0.8,x:632.3,y:601.8},0).wait(1)
	.to({scaleX:1,scaleY:1,x:637.4,y:539.4},0).wait(1)
	.to({x:643.9,y:528.9},0).wait(1)
	.to({x:650.4,y:521.4},0).wait(1)
	.to({x:656.9,y:516.9},0).wait(1)
	.to({x:663.3,y:515.4},0).wait(1)
	.to({x:669.8,y:516.9},0).wait(1)
	.to({x:676.3,y:521.4},0).wait(1)
	.to({x:682.7,y:528.9},0).wait(1)
	.to({x:689.2,y:539.4},0).wait(1)
	.to({x:695.7,y:552.8},0).wait(1)
	.to({scaleX:1.2,scaleY:0.9,x:703,y:593.9},0).wait(1)
	.to({scaleX:1,scaleY:1,x:708.6,y:560.6},0).wait(1)
	.to({x:715.1,y:554.4},0).wait(1)
	.to({x:721.6,y:550.7},0).wait(1)
	.to({x:728.1,y:549.5},0).wait(1)
	.to({x:734.5,y:550.7},0).wait(1)
	.to({x:741,y:554.4},0).wait(1)
	.to({x:747.5,y:560.6},0).wait(1)
	.to({x:754,y:569.3},0).wait(1));
	
	util.add([
		{
			type: 'image',
			value: this.instance_1.instance.image.src,
			callback: (src)=>{
				util.setImage({src, instance: [this.instance_1.instance]})
			}
		},
		{
			type: 'number',
			label: 'scaleX',
			step: 0.1,
			value: this.instance_1.instance.scaleX,
			callback: (res)=>{
				this.instance_1.instance.scaleX = res;
			}
		},
		{
			type: 'number',
			label: 'scaleY',
			step: 0.1,
			value: this.instance_1.instance.scaleY,
			callback: (res)=>{
				this.instance_1.instance.scaleY = res;
			}
		},
		{
			type: 'number',
			label: 'x',
			step: 10,
			value: this.instance_1.instance.x,
			callback: (res)=>{
				this.instance_1.instance.x = res;
			}
		},
		{
			type: 'number',
			label: 'y',
			step: 10,
			value: this.instance_1.instance.y,
			callback: (res)=>{
				this.instance_1.instance.y = res;
			}
		},

	])
	util.add([
		{
			type: 'text',
			label: 'text',
			value: this.instance.text.text,
			callback: (r) => {
				this.instance.text.text = r;
			}
		},
		{
			type: 'color',
			label: 'color',
			value: this.instance.text.color,
			callback: (r) => {
				this.instance.text.color = r;
			}
		},
		{
			type: 'font',
			label: 'font',
			value: this.instance.text.font.split(' ')[1],
			callback: (r) => {
				console.log(this.instance.text.font.split(' ')[0] + ' ' + r);
				this.instance.text.font = this.instance.text.font.split(' ')[0] + ' ' + r;
			}
		},
		{
			type: 'number',
			label: 'size',
			value: parseInt(this.instance.text.font),
			callback: (r) => {
				
				const font = this.instance.text.font.split(' ');
				font[0] = '';
				console.log(r+'px' + ' ' +font.join(' '));
				this.instance.text.font = r+'px' + ' ' +font.join(' ');
			}
		},
		{
			type: 'number',
			label: 'rotation',
			value: this.instance.text.rotation,
			callback: (r) => {
				this.instance.text.rotation = r;
			}
		},
		{
			type: 'number',
			label: 'x',
			step: 10,
			value: this.instance.text.x,
			callback: (r) => {
				this.instance.text.x = r;
			}
		},
		{
			type: 'number',
			label: 'y',
			step: 10,
			value: this.instance.text.y,
			callback: (r) => {
				this.instance.text.y = r;
			}
		},
	])
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(474,208.5,491,525.2);
// library properties:
lib.properties = {
	id: 'E0F4FF1E08603343B90999489266E544',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pixiv44817733.jpg", id:"pixiv44817733"}
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
an.compositions['E0F4FF1E08603343B90999489266E544'] = {
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