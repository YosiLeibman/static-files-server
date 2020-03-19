let express = require('express')
let app = express()
let path = require('path')

app.use(express.static('public'))

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname + '/index.html'))
// })

app.listen(80, () => console.log('server started'))
