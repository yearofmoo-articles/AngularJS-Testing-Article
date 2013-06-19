module.exports = function(karma) {
  config = require(__dirname + "/karma-shared.conf.js").shared;
  config.files = config.files.concat([
    //extra testing code
    'components/ngMidwayTester/Source/ngMidwayTester.js',

    //test files
    './test/midway/**/*.js'
  ]);
  config.logLevel = karma.LOG_ERROR;
  karma.configure(config);
};
