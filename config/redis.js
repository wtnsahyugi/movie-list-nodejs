const redis = require('redis');

if (process.env.REDISTOGO_URL) {
    var rtg   = require("url").parse(process.env.REDISTOGO_URL);
    var client = redis.createClient(rtg.port, rtg.hostname);

    client.auth(rtg.auth.split(":")[1]);
} else {
    var client = redis.createClient();
}

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 10 * 1000, // 15 minutes
    max: 40, // limit each IP to 100 requests per windowMs,
    message:
    "Too many request from this IP, please try again after 10 second"
  });

module.exports = {
    client: client,
    limiter: limiter
}