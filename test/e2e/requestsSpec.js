//
// test/e2e/requestsSpec.js
//
describe("E2E: Testing Requests", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have a working /videos page', function() {
    browser().navigateTo('#/');
    expect(browser().location().path()).toBe("/videos");
    expect(element('#ng-view').html()).toContain('data-app-youtube-listings');
  });

  it('should have a working /other page', function() {
    browser().navigateTo('#/other');
    expect(browser().location().path()).toBe("/other");

    //try removing the controller and this will fail
    expect(element('#ng-view').html()).toContain('success');
  });

});
