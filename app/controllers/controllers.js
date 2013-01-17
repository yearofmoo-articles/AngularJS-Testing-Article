angular.module('App.Controllers', [])

  .run(['$rootScope', '$appScope', function($rootScope, $appScope) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      $appScope.topScope().onLoading();
    });

    $rootScope.onLoading = function() {
      var $scope = $appScope.topScope();
      $appScope.safeApply(function() {
        $scope.loading = true;
        $scope.status = 'loading';
      },this);
    };

    $rootScope.onReady = function() {
      var $scope = $appScope.topScope();
      $appScope.safeApply(function() {
        $scope.loading = false;
        $scope.status = 'ready';
      },this);
    };
  }])

  .controller('AppCtrl', ['$appTimer', '$appStorage', '$location', '$scope', function($timer, $storage, $location, $scope) {
    $scope.search = function(q, skip) {
      var S = function() {
        var indexPath = ROUTER.routePath('videos_path');
        var current = $location.path();
        if(indexPath != current) {
          $location.path(indexPath);
        }
        $location.search('q',q);
        if(!$scope.$$phase) $scope.$apply();
      }
      if(skip) {
        S();
      }
      else {
        $timer(function() {
          S();
        });
      }
    };

    $scope.onReady();
  }])

  .controller('VideosCtrl', ['$appYoutubeSearcher', '$scope', '$routeParams', function($youtube, $scope, $params) {
    $scope.q = $params.q || 'latest';
    $youtube.query($scope.q, true, function(q, videos) {
      $scope.videos = videos;
      $scope.onReady();
    });
  }])

  .controller('OtherCtrl', ['$scope', function($scope) {
    $scope.other_status = 'success'
  }])

  .controller('WatchedVideosCtrl', ['$appYoutubeSearcher','$appStorage', '$scope', '$routeParams', function($youtube, $storage, $scope, $params) {
    $scope.videos = $youtube.getWatchedVideos();
    $scope.sortFn = function(entry) {
      return entry.timestamp;
    };
    $scope.onReady();
  }])

  .controller('VideoCtrl', ['$appYoutubeSearcher','$compile', '$rootScope', '$routeParams', '$scope',function($youtube, $compile, $rootScope, $params, $scope) {
    var id = $params.id;
    $youtube.findVideo(id, true, function(id, video) {
      $scope.video_id = id;
      $scope.video = video;
      $scope.stars = 5;

      $youtube.addToWatchedVideos(video);
      $scope.onReady();

      $youtube.query(video.title, true, function(q, videos) {
        $scope.related = videos;
        if(!$scope.$$phase) $scope.$apply();
      });
    });
  }]);
