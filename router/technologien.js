var express = require('express');
var router = express.Router();

const Technologien = require('../lib/templates/technologien');

const tec = new Technologien();
// define the home page route
router.get('/:page?', function(req, res) {
  console.log(req.path);
  if(req.path == '/nodejs') {
    res.send(tec.nodejs());
  }
  if(req.path == '/angular') {
    res.send(tec.angular());
  }
  if(req.path == '/docker') {
    res.send(tec.docker());
  }
  if(req.path == '/firstspirit') {
    res.send(tec.firstspirit());
  }
  if(req.path == '/jakarta-ee') {
    res.send(tec.jakartaEe());
  }
  if(req.path == '/reactjs') {
    res.send(tec.reactjs());
  }
  if(req.path == '/springboot') {
    res.send(tec.springboot());
  }
  if(req.path == '/vuejs') {
    res.send(tec.vuejs());
  }
  res.send('Not Found');
});

module.exports = router;