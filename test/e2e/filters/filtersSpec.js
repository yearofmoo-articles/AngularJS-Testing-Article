//
// test/e2e/filters/filtersSpec.js
//
describe("E2E: Testing Filters", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have a filter that expands the stars properly', function() {
    browser().navigateTo('#/videos/zogrnQjHZAM');
    expect(repeater('#app-youtube-stars > .app-youtube-star').count()).toBeGreaterThan(0);
  });

});
