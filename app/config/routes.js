angular.module('App.Routes', [])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    if(CONFIG.routing.html5Mode) {
      $locationProvider.html5Mode(true);
    }
    else {
      var routingPrefix = CONFIG.routing.prefix;
      if(routingPrefix && routingPrefix.length > 0) {
        $locationProvider.hashPrefix(routingPrefix);
      }
    }

    ROUTER.when('videos_path', '/videos', {
      controller : 'VideosCtrl',
      templateUrl : CONFIG.prepareViewTemplateUrl('videos/index')
    });

    ROUTER.when('video_path', '/videos/:id', {
      controller : 'VideoCtrl',
      templateUrl : CONFIG.prepareViewTemplateUrl('videos/show')
    });

    ROUTER.when('watched_videos_path', '/watched-videos', {
      controller : 'WatchedVideosCtrl',
      templateUrl : CONFIG.prepareViewTemplateUrl('videos/watched_videos')
    });

    ROUTER.when('other_path', '/other', {
      controller : 'OtherCtrl',
      templateUrl : CONFIG.prepareViewTemplateUrl('other/index')
    });

    ROUTER.alias('home_path', 'videos_path');

    ROUTER.otherwise({
      redirectTo : '/videos'
    });

    ROUTER.install($routeProvider);
  }]).

  run(['$rootScope', '$location', function($rootScope, $location) {
    var prefix = '';
    if(!CONFIG.routing.html5Mode) {
      prefix = '#' + CONFIG.routing.prefix;
    }
    $rootScope.route = function(url, args) {
      return prefix + ROUTER.routePath(url, args);
    };

    $rootScope.r = $rootScope.route;

    $rootScope.c = function(route, value) {
      var url = ROUTER.routePath(route);
      if(url == $location.path()) {
        return value;
      }
    };
  }]);
