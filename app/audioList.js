const rootPath = 'F:/code/audio';
const path = require('path')
const list = [
	{
		name:'爱情剧温馨背景',
		path: '爱情剧温馨背景.wav',
	},
	{
		name:'钢琴舒缓的神奇声音',
		path: '钢琴舒缓的神奇声音.wav',
	},
	{
		name:'国外舒缓吉他声',
		path: '国外舒缓吉他声.wav',
	},
	{
		name:'婚礼音乐震撼开场曲',
		path: '婚礼音乐震撼开场曲.wav',
	},
	{
		name:'切尔西音效',
		path: '切尔西音效.wav',
	},
	{
		name:'下雨过后屋檐滴水',
		path: '下雨过后屋檐滴水.wav',
	},
	{
		name:'阴森悬疑的游戏背景配乐',
		path: '阴森悬疑的游戏背景配乐.wav',
	},
	{
		name:'音乐渐入开场',
		path: '音乐渐入开场.wav',
	},
	{
		name:'早晨轻松愉快的音乐',
		path: '早晨轻松愉快的音乐.wav',
	},
	{
		name:'无',
		path: '',
	},
]
list.forEach((item)=>{
	if(item.path) {
		item.path = path.join(rootPath, item.path);
	}
})
module.exports = list;