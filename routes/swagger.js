const router = require('express').router();
const swaggerUi = require('swagger-ui-express');
const swaggerDoucument = require('./swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;