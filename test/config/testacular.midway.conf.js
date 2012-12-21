// base path, that will be used to resolve files and exclude
basePath = '../../';

files = [
  MOCHA,
  MOCHA_ADAPTER,

  //3rd Party Code
  './app/lib/angular.min.js',
  './app/lib/*.js',

  //App-specific Code
  './app/controllers/*.js',
  './app/directives/*.js',
  './app/filters/*.js',
  './app/services/*.js',
  './app/resources/*.js',
  './app/config/*.js',
  './app/app.js',

  //Test-Specific Code
  './node_modules/chai/chai.js',
  './test/lib/chai-should.js',
  './test/lib/chai-expect.js',
  './test/lib/integration-wrapper.js',

  //Test-Specs
  './test/midway/**/*.js'
];

port = 9202;
runnerPort = 9302;
colors = true;
captureTimeout = 5000;
singleRun = false;
growl = true;

browsers = ['Chrome'];
reporters = ['progress'];

proxies = {
  '/': 'http://yom-angularjs-testing-article/'
};
