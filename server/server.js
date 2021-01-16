require('./config/config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/usuario', function(req, res) {
    res.json('Get usuario')
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            usuario: body
        });
    }



});

// Así indicamos que recibe un parametro en la solicitud
app.put('/usuario/:id', function(req, res) {
    let id2 = req.params.id;
    res.json({
        id2
    })
});

app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
});
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});