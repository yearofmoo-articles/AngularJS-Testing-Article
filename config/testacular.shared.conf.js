var shared = {};
shared.singleRun = false
shared.autoWatch = true
shared.colors    = true
shared.growl     = true

shared.defaultReporters = ['progress'];
shared.defaultBrowsers = ['Chrome'];
shared.defaultProxies = {
  '/': 'http://localhost:8000'
};

exports.shared = shared;
