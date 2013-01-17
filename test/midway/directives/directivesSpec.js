//
// test/midway/directives/directivesSpec.js
//
describe("Midway: Testing Directives", function() {

  var test, $injector;

  before(function(done) {
    ngMidwayTester.register('App', function(instance) {
      test = instance;
      done();
    });
  });

  before(function() {
    $injector = test.$injector;
  });

  it("should properly create the youtube listings with the directive in mind", function(done) {
    var $youtube = $injector.get('$appYoutubeSearcher');

    var html = '';
    html += '<div data-app-youtube-listings id="app-youtube-listings">';
    html += ' <div data-ng-include="\'templates/partials/youtube_listing_tpl.html\'" data-ng-repeat="video in videos"></div>';
    html += '</div>';

    var $scope = test.scope();
    var element = angular.element(html);

    $youtube.query('latest', false, function(q, videos) {
      $scope.videos = videos;

      test.directive(element, $scope, function(element) {
        setTimeout(function() {
          var klass = (element.attr('class') || '').toString();
          var hasClass = /app-youtube-listings/.exec(klass);
          expect(hasClass.length).to.equal(1);

          var kids = element.children('.app-youtube-listing');
          expect(kids.length > 0).to.equal(true);
          done();
        },1000);
      });
    });
  });

});
