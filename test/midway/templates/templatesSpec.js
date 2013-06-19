//
// test/midway/templates/templatesSpec.js
//
describe("Midway: Testing Requests", function() {

  var test, onChange;
  var $location, $injector, $params;

  before(function(done) {
    ngMidwayTester.register('App', function(instance) {
      test = instance;
      test.$rootScope.$on('$routeChangeSuccess', function() {
        if(onChange) onChange(); 
      });
      done();
    });
  });

  before(function() {
    $injector = test.$injector;
    $location = test.$location;
    $params   = test.$routeParams;
  });

  beforeEach(function() {
    onChange = null;
  });

  it("should load the template for the videos page properly", function(done) {
    onChange = function() {
      onChange = function() {};

      setTimeout(function() {
        var current = test.route().current;
        var controller = current.controller;
        var template = current.templateUrl;
        expect(template).to.match(/templates\/views\/videos\/index_tpl\.html/);
        onChange = null
        done();
      },1000);
    };
    test.path('/videos?123');
  });

});
