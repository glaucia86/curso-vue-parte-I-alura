/**
 * Arquivo: database.js
 * Descrição: arquivo responsável por executar a base de dados no lado do back-end.
 * Data: 17/09/2018
 * Author: Glaucia Lemos
 */

var Datastore = require('nedb')
    ,dbName = 'data.db'
    ,db;

if(!db) {
    db = new Datastore({
        filename: dbName,
        autoload: true
    });
}

module.exports = db;
