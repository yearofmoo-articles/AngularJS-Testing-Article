var shared = require('./karma-shared.conf');

module.exports = function(config) {
  shared(config);

  config.set({
    frameworks: ['ng-scenario'],
    files: ['test/e2e/**/*.js'],
    urlRoot: '/_karma_/',
    proxies: {
      '/': 'http://localhost:8000/'
    }
  });
};
