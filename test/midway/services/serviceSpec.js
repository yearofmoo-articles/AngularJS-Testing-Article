//
// test/midway/services/servicesSpec.js
//
describe("Midway: Testing Services", function() {

  var test, onChange, $injector;

  before(function(done) {
    ngMidwayTester.register('App', function(instance) {
      test = instance;
      done();
    });
  });

  before(function() {
    test.$rootScope.$on('$routeChangeSuccess', function() {
      if(onChange) onChange(); 
    });
  });

  before(function() {
    $injector = test.injector();
  });

  beforeEach(function() {
    //test.reset();
  });

});
