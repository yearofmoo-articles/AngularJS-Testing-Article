//
// test/e2e/requestsSpec.js
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
    browser().navigateTo('#!/other');
    expect(browser().location().path()).toBe("/other");

    //try removing the controller and this will fail
    expect(element('#ng-view').html()).toContain('success');
  });

});
