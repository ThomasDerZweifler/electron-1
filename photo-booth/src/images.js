const path = require('path')
const logError = err => err && console.log(err)
const fs = require('fs')
const shell = require('electron').shell
const spawn = require('child_process').spawn

let images = []

exports.save = (picturesPath, contents, done) => {
	//Strip out the header information from contents
	const base64Data = contents.replace(/^data:image\/png;base64,/,'')
	//Write to a file with date as folde name. Make sure it is base64 encoded. Add callback logError
	const imgPath = path.join(picturesPath, `${new Date().getTime()}.png`)
	fs.writeFile(imgPath, base64Data, {encoding: 'base64'}, err => {
		if(err) return logError(err)

		done(null, imgPath)
	})
}

exports.getPicturesDir = app => {
	console.log(path.join(app.getPath('pictures'), 'photobombth'))
	return path.join(app.getPath('pictures'), 'photobombth')
}

exports.mkdir = (picturesPath) => {
	console.log(1)

	/*if (!fs.existsSync(picturesPath)){
        fs.mkdirSync(picturesPath);
    } else {
        console.log("Directory already exist");
    }*/
    
	fs.stat(picturesPath, (err, stats) => {
		if(err && err.code !== 'ENOENT') {
			return logError(err)
		} else if(err || !stats.isDirectory()) {
			fs.mkdir(picturesPath, logError)
		}
	})
}

exports.cache = imgPath => {
	images = images.concat([imgPath])
}

exports.getFromCache = index => {
	return images[index]
} 

exports.rm = (index, done) => {
	fs.unlink(images[index], err => {
		if(err) {
			return logError(err)
		} 
		images.splice(index, 1)
		done()
	})
} 


const openCmds = {
  darwin: 'open',
  win32: 'explorer',
  linux: 'nautilus'
}

exports.openDir = dirPath => {
  const cmd = openCmds[process.platform]
  if (cmd)
    spawn(cmd, [ dirPath ])
  else
    shell.showItemInFolder(dirPath)
}