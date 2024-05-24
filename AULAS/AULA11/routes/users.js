
var express = require('express');
var router = express.Router();
var controller = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/", controller.criar);

router.post("/login", controller.entrar);

module.exports = router;
