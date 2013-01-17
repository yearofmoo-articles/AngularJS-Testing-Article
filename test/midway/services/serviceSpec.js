//
// test/midway/services/servicesSpec.js
//
describe("Testing AngularJS Services", function() {

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

  it('should perform a JSONP operation to youtube and fetch data', function(done) {
    var $yt = $injector.get('$appYoutubeSearcher');
    expect($yt).not.to.equal(null);

    //this is the first video ever uploaded on youtube
    //so I doubt it will be removed anytime soon
    //and should be a good testing item
    var youtubeID = 'jNQXAC9IVRw';

    $yt.findVideo(youtubeID, false,
      function(q, data) {
        expect(data).not.to.equal(null);
        expect(data.id).to.equal(youtubeID);
        done();
      }
    );
  });

});
