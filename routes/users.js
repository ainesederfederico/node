var express = require('express');
var router = express.Router();

const VIEWS_DIR = './users/';

var users = [
  {id:1,name:"fede"},
  {id:2,name:"coco"},
  {id:3,name:"ale"}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render(VIEWS_DIR + 'index', { title: 'Users',users:users });
});

router.get('/:id', function(req, res, next) {

  const user = users.find((x)=>{ return x.id == req.params.id});

  if(!user) return res.status(404).send("User not found");

  res.render(VIEWS_DIR + 'view', { title: 'View User',user:user });

  
});

module.exports = router;
