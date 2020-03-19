let express = require('express')
let app = express()
let path = require('path')
let fs = require('fs')
let formidable = require('formidable')

app.use(express.static('public'))

app.post('/', (req, res) => {
	const form = new formidable.IncomingForm()

	form.parse(req, (err, fields, files) => {
		let oldpath = files.filetoupload.path
		let newpath = path.join(__dirname + "/public/"+  files.filetoupload.name)
		fs.rename(oldpath, newpath, function(err) {
			if (err) throw err
			res.send('File uploaded and saved!')
		})
	})
})

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname + '/index.html'))
// })

app.listen(80, () => console.log('server started'))
