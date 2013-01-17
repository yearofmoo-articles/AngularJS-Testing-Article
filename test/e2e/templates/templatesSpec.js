//
// test/e2e/templates/templatesSpec.js
//
describe("Testing Templates", function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  it('should load the template fine inside the videos page', function() {
    browser().navigateTo('#!/');
    expect(element('#ng-view').html()).toContain('youtube_listing');
  });

  it('should load the template fine inside the watched videos page', function() {
    browser().navigateTo('#!/watched-videos');
    expect(element('#ng-view').html()).toContain('youtube_listing');
  });

  it('should load the template fine inside the video profile page', function() {
    browser().navigateTo('#!/videos/123');
    expect(element('#ng-view').html()).toContain('profile');
  });

  it('should redirect back to the index page if anything fails', function() {
    browser().navigateTo('#!/something/else');
    expect(element('#ng-view').html()).toContain('youtube_listing');
  });

});
