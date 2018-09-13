/**
 * index
 * @author oldj
 * @blog https://oldj.net
 */

'use strict'

const path = require('path')
const exec = require('child_process').exec
var iconv = require('iconv-lite');
// var BufferHelper = require('bufferhelper');

function tryToGetFonts (s) {
  let a = s.split('\n')
  if (a[0].includes('Microsoft')) {
    a.splice(0, 3)
  }

  a = a.map(i => {
    console.log('i1', i.split('/t')[0]);
    i = i
      .split('\t')[0]
      .split(path.sep)
    i = i[i.length - 1]
    console.log('i', i);
    if (!i.match(/^[\w\s]+$/)) {
      i = ''
    }

    i = i
      .replace(/^\s+|\s+$/g, '')
      .replace(/(Regular|常规)$/i, '')
      .replace(/^\s+|\s+$/g, '')

    if (i.includes(' ')) {
      i = `"${i}"`
    }

    return i
  })

  return a.filter(i => i)
}

module.exports = () => new Promise((resolve, reject) => {
  let fn = path.join(__dirname, 'fonts.vbs')
  //let c = fs.readFileSync(path.join('for_win', 'fonts.vbs'), 'utf-8')
  //fs.writeFileSync(fn, c, 'utf-8')

  let cmd = `cscript "${fn}"`
  exec(cmd, (err, stdout, stderr) => {
    let fonts = []

    if (err) {
      reject(err)
      return
    }
    const decodeOut = iconv.decode(stdout, 'gbk');
    if (stdout) {
      // require('electron').dialog.showMessageBox({message: 'stdout: ' + stdout})
      fonts = fonts.concat(tryToGetFonts(decodeOut))
    }
    if (stderr) {
      //require('electron').dialog.showMessageBox({message: 'stderr: ' + stderr})
      fonts = fonts.concat(tryToGetFonts(stderr))
    }

    fonts.sort()
    resolve(fonts)
    // resolve(iconv.decode(stdout, 'utf8'));
  })
})
