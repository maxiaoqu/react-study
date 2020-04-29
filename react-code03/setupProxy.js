const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/apiServe',
        proxy({
            target: 'http://localhost:3100',
            changeOrigin: true,
        })
    );
};