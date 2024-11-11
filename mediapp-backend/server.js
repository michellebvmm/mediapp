const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');  
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

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: 'Correo y contraseña son requeridos' });
    }

    const query = `
      SELECT * FROM users 
      WHERE email = ?
    `;
    
    db.execute(query, [email], (err, results) => {
      if (err) {
        return res.status(500).send({ message: 'Error de servidor' });
      }
  
      if (results.length > 0) {
        const user = results[0];
  

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            return res.status(500).send({ message: 'Error al verificar la contraseña' });
          }
  
          if (isMatch) {
            return res.status(200).send({ message: 'Login exitoso', user });
          } else {
            return res.status(401).send({ message: 'Correo o contraseña incorrectos' });
          }
        });
      } else {
        return res.status(401).send({ message: 'Correo o contraseña incorrectos' });
      }
    });
  });


const port = 3000;


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
