module.exports = function(karma) {
  shared = require(__dirname + "/karma-shared.conf.js").shared;
  karma.configure({
    urlRoot: '/_karma_/',
    plugins: shared.plugins,
    frameworks: ['ng-scenario'],
    basePath: shared.basePath,
    browsers: shared.browsers,
    autoWatch: shared.autoWatch,
    reporters: shared.reporters,
    singleRun: shared.singleRun,
    colors: shared.colors,
    proxies: shared.proxies,
    files: [
      './test/e2e/**/*.js'
    ]
  });
};
