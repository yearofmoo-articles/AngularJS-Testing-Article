describe("Testing AngularJS Services", function() {

  var test;

  before(function(done) {
    test = new YOMngTest();
    test.register(App, 'App', done);
  });

  beforeEach(function() {
    test.reset();
  });

  it('should have a "service" service', function() {
    test.service('service').should.not.equal(null);
  });

  it('should have a "service" service', function() {
    expect(test.service('service2')).to.equal(null);
  });

  it('the "service" service should change the input', function() {
    expect(test.service('service')('username')).to.equal('USERNAME');
  });

  it('the "service" service should return a string', function() {
    expect(test.service('service')('username')).to.be.a('string');
  });

  it('the "service" service should throw an error on empty input', function() {
    expect(test.service('service')).to.throw(Error);
  });

});
