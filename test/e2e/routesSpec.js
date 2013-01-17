//
// test/e2e/routesSpec.js
//
describe("Testing Routes", function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  it('it should jump to the /videos path when / is accessed', function() {
    browser().navigateTo('#!/');
    expect(browser().location().path()).toBe("/videos");
  });

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser().navigateTo('#!/videos');
    expect(browser().location().path()).toBe("/videos");
  });

  it('it should have a working watched_videos page', function() {
    browser().navigateTo('#!/watched-videos');
    expect(browser().location().path()).toBe("/watched-videos");
  });

  it('it should have a working video page', function() {
    browser().navigateTo('#!/videos/10');
    expect(browser().location().path()).toBe("/videos/10");
  });

});
