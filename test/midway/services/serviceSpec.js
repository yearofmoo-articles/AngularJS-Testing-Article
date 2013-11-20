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

  it('should perform a JSONP operation to youtube and fetch data', function(done) {
    var $yt = tester.inject('$appYoutubeSearcher');
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
