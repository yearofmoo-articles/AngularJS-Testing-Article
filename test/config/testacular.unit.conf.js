// base path, that will be used to resolve files and exclude
basePath = '../';

files = [
  MOCHA,
  MOCHA_ADAPTER,
  './application/lib/angular.min.js',
  './test/lib/angular/angular-mocks.js',
  './application/application.js',
  './application/controllers/*.js',
  './application/routes.js',
  './test/lib/console.js',
  './test/lib/chai.js',
  './test/lib/chai-should.js',
  './test/lib/chai-expect.js',
  './test/spec/**/*.js'
];

reporters = ['progress'];

// web server port
port = 9000;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
//browsers = ['Chrome'];
browsers = ['Chrome'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;

autoWatch = true;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

growl = true;
