//
// test/e2e/directives/directivesSpec.js
//
describe("Testing Directives", function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  it('the videos page should have a welcome text on there', function() {
    browser().navigateTo('#!/videos');
    expect(browser().location().path()).toBe("/videos");
    expect(element('#app-welcome-text').html()).toContain('Welcome');
  });

  it('should request /other and it should work fine', function() {
    browser().navigateTo('#!/videos');
    element('.app-youtube-listing').click();
    expect(browser().location().path()).toMatch(/\/videos\/.+/);
  });

});
