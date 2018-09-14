/**
 * index
 * @author oldj
 * @blog https://oldj.net
 */

'use strict'

const path = require('path')
const exec = require('child_process').exec
var iconv = require('iconv-lite'); 

function tryToGetFonts (s) {
  let a = s.split('\n');

  // console.log(typeof a);
  if (a[0].includes('Microsoft')) {
    a.splice(0, 3)
  }
  // a.sort();
  a = a.map(i => {
    let fullName = i.split(path.sep);
    fullName = fullName[fullName.length - 1];
    i = i
      .split('\t')[0]
      .split(path.sep)
    i = i[i.length - 1];

    

    if (!i.match(/^[\w\s]+$/)) {
      i = ''
    }
    // fullName = fullName.replace(i, '');
    
    i = i
    .replace(/^\s+|\s+$/g, '')
    .replace(/(Regular|常规)$/i, '')
    .replace(/^\s+|\s+$/g, '')
    
    fullName = fullName.replace(i, '');
    // console.log(fullName);
    fullName = fullName
    .replace(/^\s+|\s+$/g, '')
    .replace(/^Regular/mig, '')
    .replace(/(Regular|常规)$/mig, '')
    .replace(/^\s+|\s+$/g, '')
    // console.log(fullName);

    if (i.includes(' ')) {
      i = `"${i}"`
    }

    return {name: fullName, value: i};
  })

  return a.filter(i => i.value).sortBy();
}

module.exports = () => new Promise((resolve, reject) => {
  let fn = path.join(__dirname, 'fonts.vbs')
  //let c = fs.readFileSync(path.join('for_win', 'fonts.vbs'), 'utf-8')
  //fs.writeFileSync(fn, c, 'utf-8')

  let cmd = `cscript "${fn}"`
  exec(cmd, { encoding: 'buffer' }, (err, stdout, stderr) => {
    let fonts = []

    if (err) {
      reject(err)
      return
    }

    const decodeOut = iconv.decode(stdout, 'gbk').toString();
    if (stdout) {
      //require('electron').dialog.showMessageBox({message: 'stdout: ' + stdout})
      fonts = fonts.concat(tryToGetFonts(decodeOut))
    }
    if (stderr) {
      //require('electron').dialog.showMessageBox({message: 'stderr: ' + stderr})
      fonts = fonts.concat(tryToGetFonts(decodeOut))
    }

    fonts.sort()
    resolve(fonts)
  })
})