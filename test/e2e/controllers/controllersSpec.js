//
// test/e2e/controllers/controllersSpec.js
//
describe("Testing Requests", function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  it('the videos page url should work', function() {
    browser().navigateTo('#!/');
    expect(browser().location().path()).toBe("/videos");
    expect(element('#ng-view').html()).toContain('data-app-youtube-listings');
  });

  it('should request /other and it should work fine', function() {
    browser().navigateTo('#!/videos/WuiHuZq_cg4');
    expect(browser().location().path()).toBe("/videos/WuiHuZq_cg4");
    expect(element('#ng-view').html()).toContain('app-youtube-embed');
  });

});
