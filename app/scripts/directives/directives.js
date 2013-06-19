angular.module('App.Directives', [])

  .directive('appWelcome', function() {
    return function($scope, element, attrs) {
      var html = element.html();
      element.html('Welcome: <strong>' + html + '</strong>');
    };
  })

  .directive('appYoutubeListing', ['$appLocation', function($appLocation) {
    return function($scope, element, attrs) {
      element.bind('click', function() {
        var elm = $(this);
        var id = elm.attr('data-app-youtube-listing-id');
        var url = ROUTER.routePath('video_path', {
          id : id
        });
        $appLocation.change(url, $scope);
      });
    };
  }])

  .directive('appYoutubeListings', ['$appLocation', function($appLocation) {
    var listingSelector = '.app-youtube-listing';
    var className = 'app-youtube-listings';

    return function($scope, element, attrs) {
      element.addClass(className);
    };
  }]);
