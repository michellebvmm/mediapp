const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:8100',  
  methods: ['GET', 'POST'],        
  allowedHeaders: ['Content-Type'] 
}));


app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root',       
  password: '',       
  database: 'mediapp' 
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});


app.post('/create-user', (req, res) => {
  const { email, fullName, password } = req.body;

  if (!email || !fullName || !password) {
    return res.status(400).send({ message: 'Todos los campos son requeridos' });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).send({ message: 'Error al encriptar la contraseña' });
    }

    const query = `
      INSERT INTO users (email, full_name, password)
      VALUES (?, ?, ?)
    `;

    db.execute(query, [email, fullName, hashedPassword], (err, results) => {
      if (err) {
        return res.status(500).send({ message: 'Error al crear el usuario' });
      }
      return res.status(201).send({ message: 'Usuario creado exitosamente', userId: results.insertId });
    });
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
