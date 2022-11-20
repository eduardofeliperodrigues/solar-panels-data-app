const { Router } = require('express')

const dataController = require('./controllers/dataController');

const routes = new Router();

routes.get('/', dataController.index);
routes.get('/listdata', dataController.show);

module.exports = routes;
