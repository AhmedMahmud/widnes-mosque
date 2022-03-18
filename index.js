const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use(express.static('public'))
app.listen(process.env.port || 3000);

console.log('Running');