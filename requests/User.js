let user = {
    request_token :{  
        url: 'https://api.themoviedb.org/3/authentication/token/new',
        method: 'GET',
        qs: { 'api_key': 'bb11e63899b98af0b998882e7b4c58ff' }
    }
};

module.exports = user;