var shared = require('./karma-shared.conf');

module.exports = function(config) {
  shared(config);

  config.files = shared.files.concat([
    //extra testing code
    'components/ngMidwayTester/Source/ngMidwayTester.js',

    //test files
    'test/midway/**/*.js'
  ]);
};
