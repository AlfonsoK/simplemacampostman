const bodyparser = require('body-parser');
const cors = require('cors');
const express = require('express');
const server = express();
const port = 4200;

const axios = require('axios');

server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true }));
server.use(cors());


server.route('/')
  .get((req, res) => {
    res.send('Hello World!\n')
  })
  .post((req, res) => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      console.log(response.data.url);
      console.log(response.data.explanation);
      res.status(200).send(response.data.explanation)
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error)
    });
  })

server.listen(port, () => {
  console.log(`Local server listening at http://localhost:${port}`)
})
