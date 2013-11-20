//
// test/midway/services/servicesSpec.js
//
describe("Midway: Testing Services", function() {

  var tester;
  beforeEach(function() {
    if(tester) {
      tester.destroy();
    }
    tester = ngMidwayTester('App');
  });

  it('should have a working timer', function() {
  });

});
