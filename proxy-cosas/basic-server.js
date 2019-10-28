const express = require('express');
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('Hello World!')
})

//http://127.0.0.1:3000/name/?nombre=Julian
// /name/:nombre
// lo recibo como req.params.nombre
app.get('/name', function (req, res) {
    res.send(`Hola ${req.query.nombre}!`)
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})