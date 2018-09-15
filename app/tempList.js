const d = __dirname;
const path = require('path');
const tempList = [
	{
	  name: 'temp1',
		url: path.join(d, 'template/temp1', 'temp1.html'),
		img: path.join(d, 'template/temp1', 'temp1.png'),
	},
	{
	  name: 'temp2',
	  url:  path.join(d, 'template/temp2', 'h.html'),
	  img:  path.join(d, 'template/temp2', 'h.png'),
	},
	{
	  name: 'temp error',
	  url:  'h.html',
	  img:  path.join(d, 'template/temp2', 'h.png'),
	},
	

];

module.exports = tempList;
