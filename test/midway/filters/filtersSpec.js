//
// test/midway/filters/filtersSpec.js
//
describe("Midway: Testing Filters", function() {

  var tester;
  beforeEach(function() {
    tester = ngMidwayTester('App');
  });

  afterEach(function() {
    tester.destroy();
    tester = null;
  });

  it('should have a working range filter', function() {
    expect(tester.inject('$filter')('range')).not.to.equal(null);
  });

  it('should have a working filter that updates the DOM', function(done) {
    var id = 'temp-filter-test-element';
    var html = '<div id="' + id + '"><div class="repeated" ng-repeat="n in [] | range:10">...</div></div>';
    var element = angular.element(html);

    var scope = tester.rootScope().$new();
    tester.compile(element, scope);
    
    var elm = element[0];
    setTimeout(function() {
      var kids = elm.getElementsByTagName('div');
      expect(kids.length).to.equal(10);
      done();
    },1000);
  });

});
