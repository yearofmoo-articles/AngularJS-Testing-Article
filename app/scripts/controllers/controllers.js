angular.module('App.Controllers', [])

  .run(['$rootScope', '$appScope', function($rootScope, $appScope) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      $rootScope.onLoading();
    });

    $rootScope.onLoading = function() {
      $rootScope.$safeApply(function() {
        $rootScope.loading = true;
        $rootScope.status = 'loading';
      },this);
    };

    $rootScope.onReady = function() {
      $rootScope.$safeApply(function() {
        $rootScope.loading = false;
        $rootScope.status = 'ready';
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

  .controller('VideosCtrl', ['$appYoutubeSearcher', '$location', '$appStorage', '$scope', '$routeParams', function($youtube, $location, $storage, $scope, $params) {
    $scope.current_path = '#' + $location.url();
    if($params.q) {
      $scope.q = $params.q;
      $scope.search = true;
    }
    else {
      $scope.search = false;
      $scope.q = 'angularjs';
    }
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
      $scope.stars = video.rating;

      $youtube.addToWatchedVideos(video);
      $scope.onReady();

      $youtube.query(video.title, true, function(q, videos) {
        $scope.related = videos;
        if(!$scope.$$phase) $scope.$apply();
      });
    });
  }]);
