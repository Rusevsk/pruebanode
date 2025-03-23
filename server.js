const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde el proyecto de prueba sin bcrypt!');
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));