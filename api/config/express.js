/**
 * Arquivo: express.js
 * Descrição: arquivo responsável por definir os padrões de execução do server.
 * Data: 17/09/2018
 * Author: Glaucia Lemos
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('../app/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});


routes(app);

module.exports = app;
