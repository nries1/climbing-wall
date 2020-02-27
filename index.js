const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(5000, () => {
  console.log('listening');
});
