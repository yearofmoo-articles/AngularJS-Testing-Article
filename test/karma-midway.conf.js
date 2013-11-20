var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //extra testing code
    'node_modules/ng-midway-tester/src/ngMidwayTester.js',

    //mocha stuff
    'test/mocha.conf.js',

    //test files
    'test/midway/appSpec.js',
    'test/midway/controllers/controllersSpec.js',
    'test/midway/filters/filtersSpec.js',
    'test/midway/directives/directivesSpec.js',
    'test/midway/requestsSpec.js',
    'test/midway/routesSpec.js',
    'test/midway/**/*.js'
  ]);

  conf.proxies = {
    '/': 'http://localhost:9999/'
  };

  config.set(conf);
};
