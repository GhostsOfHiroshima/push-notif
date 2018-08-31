var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Push notification test' });
});

// router.get('/sw-offline', function(req, res){
//   res.render('sw-offline', {layout:null});
// });

router.get('/sw-google-offline', function(req, res){
    res.render('sw-google-offline', {layout:null});
});

router.get('/sw-google-push', function(req, res){
    res.render('sw-google-push', {layout:null});
});

module.exports = router;
