var shared = {};
shared.plugins = [
  'karma-mocha',
  'karma-ng-scenario',
  'karma-chrome-launcher',
  'karma-firefox-launcher',
  'karma-safari-launcher',
  'karma-ng-scenario'
];

shared.frameworks = ['mocha'];
shared.basePath  = '../';
shared.singleRun = true
shared.autoWatch = false
shared.colors    = true

shared.reporters = ['progress'];
shared.browsers = ['Chrome'];
shared.proxies = {
  '/': 'http://localhost:8000/'
};

shared.files = [
  './test/mocha.conf.js',

  //3rd Party Code
  'components/angularjs/index.js',
  'app/scripts/lib/router.js',

  //App-specific Code
  'app/scripts/config/config.js',
  'app/scripts/services/**/*.js',
  'app/scripts/directives/**/*.js',
  'app/scripts/controllers/**/*.js',
  'app/scripts/filters/**/*.js',
  'app/scripts/config/routes.js',
  'app/scripts/app.js',

  //Test-Specific Code
  './node_modules/chai/chai.js',
  './test/lib/chai-should.js',
  './test/lib/chai-expect.js'
];

exports.shared = shared;
