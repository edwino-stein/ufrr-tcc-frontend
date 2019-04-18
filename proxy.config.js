const proxy = [
  {
    context: '/backend',
    target: 'http://localhost',
    pathRewrite: {'^/backend' : '/'}
  }
];
module.exports = proxy;
