const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/', (req, res) => {
    res.render('p', {url: req.body.url})
})

let port = process.env.PORT || 5000
app.listen(port, () => {console.log('Listening at port: ' + port)})