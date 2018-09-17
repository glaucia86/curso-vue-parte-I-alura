/**
 * Arquivo: index.js
 * Descrição: arquivo responsável por toda a lógica dos endpoints da api.
 * Data: 17/09/2018
 * Author: Glaucia Lemos
 */

const db = require('../../config/database');

const api = {};

api.adiciona = function (req, res) {
  db.insert(req.body, (err, newDoc) => {
    if (err) return console.log(err);
    console.log('Adicionado com sucesso: ' + newDoc._id);
    res.json(newDoc._id);
  });
};

api.busca = function (req, res) {
  db.findOne({ _id: req.params.fotoId }, (err, doc) => {
    if (err) return console.log(err);
    if (doc) return res.json(doc);
    res.status(404).end();
  });
};

api.atualiza = function (req, res) {
  db.update({ _id: req.params.fotoId }, req.body, (err, numReplaced) => {
    if (err) return console.log(err);
    if (numReplaced) res.status(200).end();
    res.status(500).end();
    console.log('Atualizado com sucesso: ' + req.body._id);
    res.status(200).end();
  });
};

api.lista = function (req, res) {
  db.find({}).sort({ titulo: 1 }).exec((err, doc) => {
    if (err) return console.log(err);
    res.json(doc);
  });
};

api.listaPorGrupo = function (req, res) {
  let grupoId = parseInt(req.params.grupoId);
  db.find({ grupo: grupoId }, (err, doc) => {
    if (err) return console.log(err);
    res.json(doc);
  });
};

api.remove = function (req, res) {
  db.remove({ _id: req.params.fotoId }, {}, (err, numRemoved) => {
    if (err) return console.log(err);
    console.log('removido com sucesso');
    if (numRemoved) res.status(200).end();
    res.status(500).end();
  });
};

api.listaGrupos = function (req, res) {
  res.json([
    {
      _id: 1,
      nome: 'esporte',
    },
    {
      _id: 2,
      nome: 'lugares',
    },
    {
      _id: 3,
      nome: 'animais',
    },
  ]);
};


module.exports = api;