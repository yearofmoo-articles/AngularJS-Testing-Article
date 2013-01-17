//
// test/midway/filters/filtersSpec.js
//
describe("Midway: Testing Filters", function() {

  var test, onChange, $filter;

  before(function(done) {
    ngMidwayTester.register('App', function(instance) {
      test = instance;
      test.$rootScope.$on('$routeChangeSuccess', function() {
        if(onChange) onChange(); 
      });

      $filter = test.filter();

      done();
    });
  });

  beforeEach(function() {
    test.reset();
  });

  it('should have a working range filter', function() {
    expect($filter('range')).not.to.equal(null);
  });

  it('should have a working filter that updates the DOM', function(done) {
    var id = 'temp-filter-test-element';
    var html = '<div id="' + id + '"><div class="repeated" ng-repeat="n in [] | range:10">...</div></div>';
    var element = angular.element(html);
    angular.element(document.body).append(html);

    test.directive(element, test.scope(), function(element) {
      var elm = element[0];
      setTimeout(function() {
        var kids = elm.getElementsByTagName('div');
        expect(kids.length).to.equal(10);
        done();
      },1000);
    });
  });

});
