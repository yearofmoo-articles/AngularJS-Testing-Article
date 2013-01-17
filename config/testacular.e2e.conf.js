basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  './test/e2e/**/*.js'
];

singleRun = false;
autoWatch = true;

port = 9203;
runnerPort = 9303;
colors = true;
captureTimeout = 5000;
growl = true;

browsers = ['Chrome'];
reporters = ['progress'];

proxies = {
  '/': 'http://localhost:8100/'
};
