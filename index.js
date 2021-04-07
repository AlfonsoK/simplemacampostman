const bodyparser = require('body-parser');
const cors = require('cors');
const express = require('express');
const server = express();
const port = 4200;

server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Local server listening at http://localhost:${port}`)
})
