/**
 * Arquivo: index.js
 * Descrição: arquivo responsável por definir as rotas da api.
 * Data: 17/09/2018
 * Author: Glaucia Lemos
 */

const path = require('path');
const api = require('../api');

module.exports = (app) => {
  app.route('/v1/fotos')
    .post(api.adiciona)
    .get(api.lista);

  app.route('/v1/fotos/:fotoId')
    .delete(api.remove)
    .get(api.busca)
    .put(api.atualiza);

  app.get('/v1/grupos', api.listaGrupos);
  app.get('/v1/fotos/grupo/:grupoId', api.listaPorGrupo);
};
