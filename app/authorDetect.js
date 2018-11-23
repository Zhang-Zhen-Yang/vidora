const {ipcRenderer} = require('electron');

function checkHasGetAuthor() {
	let href = location.href;
	if(href.indexOf('oauth.taobao.com') < 0) {
		console.log('sendTo');
		ipcRenderer.sendToHost('inited','dddddddd');
	} else {
		setTimeout(()=>{
			checkHasGetAuthor();
		}, 3000)
	}
}
checkHasGetAuthor();

