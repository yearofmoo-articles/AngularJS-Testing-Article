//
// test/e2e/directives/directivesSpec.js
//
describe("E2E: Testing Directives", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have a working welcome directive apply it\'s logic to the page', function() {
    browser().navigateTo('#!/videos');
    expect(browser().location().path()).toBe("/videos");
    expect(element('#app-welcome-text').html()).toContain('Welcome');
  });

  it('should have a working youtube listing directive that goes to the right page when clicked', function() {
    browser().navigateTo('#!/videos');
    element('.app-youtube-listing').click();
    expect(browser().location().path()).toMatch(/\/videos\/.+/);
  });

});
