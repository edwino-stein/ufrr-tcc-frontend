const proxy = [{
    context: '/backend',
    target: 'http://localhost:8080',
    pathRewrite: {'^/backend' : '/'}
}];
module.exports = proxy;
