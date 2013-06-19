module.exports = function(karma) {
  config = require(__dirname + "/karma-shared.conf.js").shared;
  config.files = config.files.concat([
    //extra testing code
    'components/angular-mocks/index.js',

    //test files
    './test/unit/**/*.js'
  ]);
  karma.configure(config);
};
