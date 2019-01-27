const redis = require('redis');
const client = redis.createClient();
const baseUrl = process.env.URL_API;
const api_key = process.env.API_KEY;
let request = require('request');

cacheDiscover = (req, res, next) => {
    client.get('list_tvshow_'+req.query.page, function (err, data) {
        if (err) throw err;

        if (data != null) {
            res.json(JSON.parse(data));
        } else {
            next();
        }
    });
}

getDiscoverDataFromApi = (req, res) => {
    const qs = { 
        'api_key': api_key,
        'page': req.query.page
    };

    let optRequest = {
        url: `${baseUrl}`+'/discover/tv',
        method: 'GET',
        qs: qs
    };

    request(optRequest, function(err, resp) {
        if (err) throw err;

        client.set('list_tvshow_'+req.query.page, resp.body, 'EX', 300)
        return res.json(JSON.parse(resp.body));
    });
}

geSeasonDataFromApi = (req, res) => {
    console.log(req.param);
    return res.send('asd');
}

cacheDetail = (req, res, next) => {
    client.get('detail_'+req.params.tvId, function (err, data) {
        if (err) throw err;

        if (data != null) {
            res.json(JSON.parse(data));
        } else {
            next();
        }
    });
}

getDetailDataFromApi = (req, res) => {
    let endPoint = `${baseUrl}/tv`,
        params = req.params,
        qs = { 
            'api_key': api_key
        };

    Object.keys(params)
      .forEach(param => endPoint += `/${params[param]}`);

    let opt = {
        url: endPoint,
        method: 'GET',
        qs : qs
    };

    request(opt, function(err, resp) {
        if (err) throw err;

        client.set('detail_'+req.params.tvId, resp.body, 'NX')
        return res.json(JSON.parse(resp.body))
    })
}

let tvshow = {
    discover : {
        apifunct: getDiscoverDataFromApi,
        cache:cacheDiscover
    },
    detail : {
        apifunct: getDetailDataFromApi,
        cache: cacheDetail
    },
    season: {
        apifunct: geSeasonDataFromApi
    }
}

module.exports = tvshow;