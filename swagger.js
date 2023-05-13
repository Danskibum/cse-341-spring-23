const swaggerAutogen = require('swagger-autogen') ();

const doc = {
    info: {
        title: 'My API',
        description: 'contact API',
    },
    host: 'cse-341-lesson1.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
// await import('./index.js');   
//})