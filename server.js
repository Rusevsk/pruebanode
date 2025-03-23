const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola, este es el cambio automático para la tarea!');
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));