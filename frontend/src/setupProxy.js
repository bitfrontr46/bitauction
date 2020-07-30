// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(
//         '/api', ///api로 시작되는 api는 target으로 설정된 서버 url로 호출하도록 설정됨
//         createProxyMiddleware({
//             target: 'http://localhost:4000',
//             changeOrigin: true,
//         })
//     );
// };