basePath = '../';

files = [
  MOCHA,
  MOCHA_ADAPTER,
  './config/mocha.conf.js',

  //3rd Party Code
  './app/lib/angular.min.js',
  './app/lib/app.router.js',

  //App-specific Code
  './app/config/*.js',
  './app/controllers/*.js',
  './app/directives/*.js',
  './app/filters/*.js',
  './app/services/*.js',
  './app/app.js',

  //Test-Specific Code
  './node_modules/chai/chai.js',
  './test/lib/chai-should.js',
  './test/lib/chai-expect.js',
  './test/lib/angular/angular-mocks.js',

  //Test-Specs
  './test/unit/**/*.js'
];

port = 9201;
runnerPort = 9301;
captureTimeout = 5000;

shared = require(__dirname + "/testacular.shared.conf.js").shared
growl     = shared.colors;
colors    = shared.colors;
singleRun = shared.singleRun;
autoWatch = shared.autoWatch;
browsers  = shared.defaultBrowsers;
reporters = shared.defaultReporters;
