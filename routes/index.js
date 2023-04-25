const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.kristalRoute);
routes.get('/Gretchen', lesson1Controller.gretchenRoute);
routes.get('/Abigail', lesson1Controller.abigailRoute);
routes.get('/Nathan', lesson1Controller.nathanRoute);
routes.get('/Brandon', lesson1Controller.brandonRoute);

module.exports = routes;