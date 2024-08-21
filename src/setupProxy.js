const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

    app.use( // fast api
        createProxyMiddleware({
            target: 'http://127.0.0.1:8000',
            changeOrigin: true,
            pathFilter: '/fast',
        }),
    );

    app.use( // 스프링 부트
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathFilter: '/api',
        }),
    );

    app.use( // 플라스크
        createProxyMiddleware({
            target: 'http://127.0.0.1:5000',
            changeOrigin: true,
            pathFilter: '/flask',
        }),
    );
};