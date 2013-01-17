basePath = '../';

files = [
  MOCHA,
  MOCHA_ADAPTER,

  //3rd Party Code
  './app/lib/angular.min.js',
  './app/lib/*.js',

  //Test-Specific Code
  './node_modules/chai/chai.js',
  './test/lib/chai-should.js',
  './test/lib/chai-expect.js',

  //Test-Specs
  './test/3rd_party/**/*.js'
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

proxies = {
  '/': 'http://localhost/yearofmoo.com-code/articles/AngularJS-Testing-Article'
};

growl = true;
