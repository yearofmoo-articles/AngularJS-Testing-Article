basePath = '../';

files = [
  MOCHA,
  MOCHA_ADAPTER,
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  './test/lib/chai.js',
  './test/lib/chai-should.js',
  './test/lib/chai-expect.js',
  './test/e2e/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

proxies = {
  '/': 'http://yom-angularjs-testing-article/'
};

reporters = ['progress'];
