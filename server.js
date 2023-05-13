const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const PORT = process.env.PORT || 5000;
const app = express();

const swaggerAutogen = require('swagger-autogen') ();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));
app.listen(PORT, () => {
  console.log('server is running on port ${PORT}.');
});  

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(`Connected to DB and listening on ${PORT}`);
  }
});
