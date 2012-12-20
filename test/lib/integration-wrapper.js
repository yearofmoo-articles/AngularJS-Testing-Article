;var YOMngTest;

(function() {

  YOMngTest = function() {};

  YOMngTest.prototype.register = function(module, callback) {
    this.$module = module;

    var name = module.value('appName').name;

    alert(JSON.stringify(module.value('appName')));

    var that = this;
    module.run(['$injector', function($injector) {
      that.$injector = $injector;
    }]);

    this.attach(module, name);
    this.prepareGlobals(callback);
  };

  YOMngTest.prototype.attach = function(module, name) {
    var html = this.html();
    html.setAttribute('data-ng-app',name);
    var body = this.body();
    body.innerHTML += '<div id="data-ng-view" data-ng-view></div>';
    angular.bootstrap(html, [name]);
  };

  YOMngTest.prototype.html = function() {
    return document.getElementsByTagName('html')[0];
  };

  YOMngTest.prototype.body = function() {
    return document.getElementsByTagName('body')[0];
  };

  YOMngTest.prototype.view = function() {
    return document.getElementById('data-ng-view');
  };

  YOMngTest.prototype.reset = function(callback) {
    this.resetPath();
    this.resetView();
    this.apply(callback);
  };

  YOMngTest.prototype.resetView = function(callback) {
    this.view().innerHTML = '';
  };

  YOMngTest.prototype.resetPath = function(callback) {
    this.path('/', callback);
  };

  YOMngTest.prototype.path = function(url, callback) {
    if(url && callback) {
      this.location().path(url);
      this.apply(callback);
    }
    else {
      return this.location().path();
    }
  };

  YOMngTest.prototype.directive = function(html, scope) {
    scope = scope || this.scope();
    return this.$compile(html)(scope);
  };

  YOMngTest.prototype.module = function(module) {
    return this.service(module);
  }

  YOMngTest.prototype.factory = function(service) {
    return this.service(service);
  }

  YOMngTest.prototype.service = function(service) {
    try {
      return this.$injector.get(service);
    }
    catch(e) {
      return null;
    };
  };

  YOMngTest.prototype.location = function() {
    return this.$location;
  };

  YOMngTest.prototype.injector = function() {
    return this.$injector;
  };

  YOMngTest.prototype.module = function() {
    return this.$module;
  };

  YOMngTest.prototype.inject = function(array) {
    if(this.$injector) {
      this.injector().invoke(array);
    }
    else {
      this.module().run(array);
    }
  };

  YOMngTest.prototype.ready = function() {
    return !!this.$injector;
  };

  YOMngTest.prototype.controller = function(ctrl, options) {
    return this.$controller(ctrl, options);
  };

  YOMngTest.prototype.newScope = function(fn) {
    return this.$rootScope.$new();
  };

  YOMngTest.prototype.scope = function(element) {
    return angular.element(element || document.body).scope();
  };

  YOMngTest.prototype.apply = function(scope, callback) {
    callback = callback || function() {};
    var s = this.scope();
    if(s.$$phase) {
      callback();
    }
    else {
      s.$apply(function() {
        callback(); 
      });
    }
  };

  YOMngTest.prototype.prepareGlobals = function(callback) {
    var that = this;
    this.inject(['$controller','$location','$routeParams','$rootScope','$compile',function($c, $l, $p, $r, $o) {
      that.$controller  = $c;
      that.$location    = $l;
      that.$params      = $p;
      that.$compile     = $o;
      that.$rootScope   = that.$injector.get('$rootScope');
      that.$route       = that.$injector.get('$route');
      if(callback) callback();
    }]);
  };

})();
