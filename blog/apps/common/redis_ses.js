var session = require("express-session");

var redisStore = require('connect-redis')(session);

var redis_db = require('../common/redis_db');