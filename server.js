const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
/* const bodyparser = require('body-parser'); */
const path = require('path');
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const config = require('./webpack.config');
const Todo = require('./models/todo');
const port = 3000;
require('dotenv').config();

const server = express();

/* server.use(bodyparser.urlencoded({ extended: false })); */

server.use(webpackDev(webpack(config)));
server.use(express.json());

server.use(express.static(path.join(__dirname, "public")));
server.use('/dist', express.static(path.join(__dirname, 'public', 'dist')));

const corsOptions = {
  origin: 'http://localhost:8080',
  methods: 'GET, POST, DELETE',
}; 

server.use(cors(corsOptions)); 

mongoose.connect('mongodb://localhost:27017/taskt', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('CONECTADO A MONGO');
})
.catch(err => {
  console.error('NO CONECTADO A MONGO' + err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'ERROR DE CONEXION A MONGODB:'));
db.once('open', () => {
  console.log('CONECTADO A MONGO');
});

server.get('/', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

server.get('/api/todos', (req, res) => {
  Todo.find({})
    .exec()
    .then(todos => {
      res.json(todos);
    })
    .catch(error => {
      console.error('Error al obtener to dos: ' + error);
      res.status(500).send('Error al obtener to dos.');
    });
});

server.listen(port, () => {
  console.log("SIRVEE EXPRESS");
});
