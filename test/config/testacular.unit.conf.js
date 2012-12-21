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
  './test/lib/angular/angular-mocks.js',

  //Test-Specs
  './test/unit/**/*.js'
];

port = 9201;
runnerPort = 9301;
colors = true;
captureTimeout = 5000;
singleRun = false;
growl = true;

browsers = ['Chrome'];
reporters = ['progress'];
