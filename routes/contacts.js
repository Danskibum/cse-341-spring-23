const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/lesson1');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

module.exports = router;