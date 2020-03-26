const express = require('express');

const app = express();

app.get('/', (request, response)=>{
  return response.send('Hello world in node backend');
});

app.listen(3333);