basePath = '../../';

files = [
  MOCHA,
  MOCHA_ADAPTER,
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,

  //Test-Specific Code
  './node_modules/chai/chai.js',
  './test/lib/chai-should.js',
  './test/lib/chai-expect.js',
  './test/lib/angular/angular-mocks.js',

  //Test-Specs
  './test/e2e/**/*.js'
];

autoWatch = true;
port = 9203;
runnerPort = 9303;
colors = true;
captureTimeout = 5000;
singleRun = false;
growl = true;

browsers = ['Chrome'];
reporters = ['progress'];

proxies = {
  '/': 'http://yom-angularjs-testing-article/'
};

