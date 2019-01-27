var router = require('express').Router();
var tvShow = require('../../requests/TvShow');

router.get('/discover/tv', tvShow.discover.cache, tvShow.discover.apifunct);

router.get('/tv/:tvId', tvShow.detail.cache, tvShow.detail.apifunct)
router.get('/tv/:tvId/season/:seasonId', tvShow.season.apifunct)

router.get('/clear', function (req, res) {
    client.flushdb(function(err, success) {
        console.log(success)
    })
    res.send('Ok');
});

module.exports = router;