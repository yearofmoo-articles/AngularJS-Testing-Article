describe("Testing AngularJS Controllers", function() {

  var test;

  before(function(done) {
    test = new YOMngTest();
    test.register(App, done);
  });

  beforeEach(function() {
    test.reset();
  });

  it('should be on the correct page', function() {
    test.path().should.eq('/');
  });

  it('should redirect to the correct page', function() {
    test.path('/home');
    test.path().should.eq('/');
  });

  it('should execute the controller', function() {
    var $scope  = test.newScope();
    var $ctrl   = test.controller('HomeCtrl', {
      $scope : $scope 
    });
    $scope.status.should.eq('ready');
  });

});
