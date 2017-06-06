var router = require('express').Router();

router.route('/')
.get(function(req,res){
  console.log("route hit!");
  res.sendStatus(200);
});

router.route('/healthcheck')
.get(function(req,res){
  res.sendStatus(200);
});

module.exports = router;
