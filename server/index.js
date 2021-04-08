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
    let params = req.params;
    res.send('Yes, default GET route works.\n')
  })
  .post((req, res) => {
    let body = req.body;
    let url = 'https://api.nasa.gov/planetary/apod?api_key=RPuX87WMDWKkZY6dhNV8PtfbVLuIZdYGrCwiMmH8';    
    
    axios.get(url)
    .then(response => {
      console.log(response.data.url);
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
