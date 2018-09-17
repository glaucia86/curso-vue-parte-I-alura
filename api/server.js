/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por executar a api em Node.js
 * Data: 17/09/2018
 * Author: Glaucia Lemos
 */

const http = require('http');
const app = require('./config/express');
const db = require('./config/database');

http.createServer(app).listen(3000, () => {
  console.log(`Api executando na porta...: ${this.address().port}`);
});
