module.exports = {
    app: {
        name: 'Homely',
        title: 'NodeJS Boilerplate Project',
        description: ''
    },

    port: process.env.PORT || 8080,

    host: process.env.HOST || '0.0.0.0',

    db: {
        uri: 'mongodb://localhost/nodejs-boilerplate',
        options: {
            user: '',
            pass: ''
        },
        seed: true
    },

    facebook: {
        appId: '',
        appSecret: ''
    },

    google: {

    }
};
