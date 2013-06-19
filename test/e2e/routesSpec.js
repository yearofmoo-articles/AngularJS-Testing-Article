//
// test/e2e/routesSpec.js
//
describe("E2E: Testing Routes", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should jump to the /videos path when / is accessed', function() {
    browser().navigateTo('#/');
    expect(browser().location().path()).toBe("/videos");
  });

  it('should have a working /videos route', function() {
    browser().navigateTo('#/videos');
    expect(browser().location().path()).toBe("/videos");
  });

  it('should have a working /wathced-videos route', function() {
    browser().navigateTo('#/watched-videos');
    expect(browser().location().path()).toBe("/watched-videos");
  });

  it('should have a working /videos/ID route', function() {
    browser().navigateTo('#/videos/10');
    expect(browser().location().path()).toBe("/videos/10");
  });

});
