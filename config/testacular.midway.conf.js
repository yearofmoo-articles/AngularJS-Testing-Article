basePath = '../';

files = [
  MOCHA,
  MOCHA_ADAPTER,
  './config/mocha.conf.js',

  //3rd Party Code
  './app/lib/angular.min.js',
  './app/lib/app.router.js',

  //App-specific Code
  './app/controllers/*.js',
  './app/directives/*.js',
  './app/filters/*.js',
  './app/services/*.js',
  './app/config/*.js',
  './app/app.js',

  //Test-Specific Code
  './node_modules/chai/chai.js',
  './test/lib/chai-should.js',
  './test/lib/chai-expect.js',
  './vendor/ngMidwayTester/Source/ngMidwayTester.js',

  //Test-Specs
  './test/midway/**/*.js'
];

singleRun = false;
autoWatch = true;

port = 9202;
runnerPort = 9302;
colors = true;
captureTimeout = 5000;
growl = true;

browsers = ['Chrome'];
reporters = ['progress'];

proxies = {
  '/': 'http://localhost:8000'
};
