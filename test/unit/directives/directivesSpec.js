//
// test/unit/directives/directivesSpec.js
//
describe("Unit: Testing Directives", function() {

  var $compile, $rootScope;

  beforeEach(angular.mock.module('App'));

  beforeEach(inject(
    ['$compile','$rootScope', function($c, $r) {
      $compile = $c;
      $rootScope = $r;
    }]
  ));

  it("should display the welcome text properly", function() {
    var element = $compile('<div data-app-welcome>User</div>')($rootScope);
    expect(element.html()).to.match(/Welcome/i);
  })

});
