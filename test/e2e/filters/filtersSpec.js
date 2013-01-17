//
// test/e2e/filters/filtersSpec.js
//
describe("Testing Filters", function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  it('should have a filter that expands the stars properly', function() {
    browser().navigateTo('#!/videos/WuiHuZq_cg4');
    expect(repeater('.app-youtube-stars > .app-youtube-star').count()).toEqual(5);
  });

});
