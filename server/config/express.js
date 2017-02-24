var express = require('express'),
    assets = require('./assets/development'),
    bodyParser = require('body-parser'),
    pug = require('pug'),
    favicon = require('serve-favicon'),
    path = require('path'),
    helmet = require('helmet'),
    chalk = require('chalk'),
    methodOverride = require('method-override'),
    compress = require('compression'),
    morgan = require('morgan');

function initMiddleware(app) {
    app.use(compress({
        filter: (req, res) => {
            return (/json|text|javascript|css|font|svg/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    // app.use(favicon(assets.client.favicon));

    app.use(morgan('dev'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(methodOverride());
}

function initHelmetHeaders(app) {
    app.use(helmet.frameguard());

    app.use(helmet.xssFilter());

    app.use(helmet.noSniff());

    app.use(helmet.ieNoOpen());

    app.disable('x-powered-by')
}

function initViewEngine(app) {
    app.set('view engine', 'pug');
    app.set('views', path.resolve('./server/core/views'))
}

function initClientRoutes(app) {
    app.use('/', express.static(path.resolve('./public')));
}

function initServerRoutes(app) {
    require('../core/routes/core.route')(app);
    require('../users/routes/users.route')(app);

    // Error handler
    require('../core/controllers/errors.handler')(app);
}

module.exports.init = () => {
    return new Promise((resolve, reject) => {
        console.log(chalk.bold.blue('EXPRESS SERVER:'))

        var app = express();

        initMiddleware(app);

        initHelmetHeaders(app);

        initViewEngine(app);

        initClientRoutes(app);

        initServerRoutes(app);

        console.info(chalk.yellow(`    (v) Express initialized`));

        resolve(app);
    });
};
