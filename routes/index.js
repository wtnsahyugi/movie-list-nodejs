var router = require('express').Router();
var limiter = require('../config/redis').limiter;
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.use("/api/", limiter);
router.use('/api/tvshows', require('./api/tvshow'));
router.use('/api/users', require('./api/user'));

module.exports = router;
