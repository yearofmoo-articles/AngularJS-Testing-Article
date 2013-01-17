//
// test/unit/services/servicesSpec.js
//
describe("Unit: Testing Controllers", function() {

  beforeEach(angular.mock.module('App'));

  it('should contain an $appStorage service', inject(function($appStorage) {
    expect($appStorage).not.to.equal(null);
  }));

  it('should contain an $appYoutubeSearcher service', inject(function($appYoutubeSearcher) {
    expect($appYoutubeSearcher).not.to.equal(null);
  }));

  it('should have a owrking $appYoutubeSearcher service', inject(['$appYoutubeSearcher',function($yt) {
    expect($yt.prefixKey).not.to.equal(null);
    expect($yt.resize).not.to.equal(null);
    expect($yt.prepareImage).not.to.equal(null);
    expect($yt.getWatchedVideos).not.to.equal(null);
  }]));

  it('should have a working service that resizes dimensions', inject(['$appYoutubeSearcher',function($yt) {
    var w = 100;
    var h = 100;
    var mw = 50;
    var mh = 50;
    var sizes = $yt.resize(w,h,mw,mh);
    expect(sizes.length).to.equal(2);
    expect(sizes[0]).to.equal(50);
    expect(sizes[1]).to.equal(50);
  }]));

  it('should store and save data properly', inject(['$appStorage',function($storage) {
    var key = 'key', value = 'value';
    $storage.enableCaching();
    $storage.put(key, value);
    expect($storage.isPresent(key)).to.equal(true);
    expect($storage.get(key)).to.equal(value);

    $storage.erase(key);
    expect($storage.isPresent(key)).to.equal(false);

    $storage.put(key, value);
    $storage.flush();
    expect($storage.isPresent(key)).to.equal(false);
  }]));

});
