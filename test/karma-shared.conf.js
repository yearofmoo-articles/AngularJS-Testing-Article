var shared = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: true,

    // these are default values anyway
    singleRun: false,
    colors: true,
  });
};

shared.files = [
  'test/mocha.conf.js',

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
  'node_modules/chai/chai.js',
  'test/lib/chai-should.js',
  'test/lib/chai-expect.js'
];

module.exports = shared;
