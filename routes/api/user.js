var router = require('express').Router();
var User = require('../../requests/User');
var request = require('request');
// console.log(module)
router.get('', function(req, res){
    res.send("Hello world!a");
});

router.post('/login', function(req, res, next) {
    if(!req.body.user.email){
        return res.status(422).json({errors: {email: "can't be blank"}});
    }
    
    if(!req.body.user.password){
        return res.status(422).json({errors: {password: "can't be blank"}});
    }
    
    return res.json(req.body);
});

router.get('/request_token', function(req, res) {
    request(User.request_token, function(err, resp) {
        if (err) throw err;

        return res.json(JSON.parse(resp.body));
    });    
});

module.exports = router;