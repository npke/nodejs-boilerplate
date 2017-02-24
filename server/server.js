require('./config/mongoose').loadModels();

module.exports = {
    config: require('./config/env/development'),
    express: require('./config/express'),
    mongodb: require('./config/mongoose'),
    seedDb: require('./config/seed')
};
