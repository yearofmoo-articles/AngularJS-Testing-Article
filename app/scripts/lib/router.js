var ROUTER;

(function() {
  var lookup = {};
  var otherwiseLookup = null;

  ROUTER = {

    when : function(key, url, params) {
      lookup[key] = {
        url : url,
        params : params
      };
    },

    alias : function(key1, key2) {
      lookup[key1] = lookup[key2];
    },

    otherwise : function(params) {
      otherwiseLookup = params;
    },

    replaceUrlParams : function(url, params) {
      for(var k in params) {
        var v = params[k];
        url = url.replace(':'+k,v);
      }
      return url;
    },

    routeDefined : function(key) {
      return !! this.getRoute(key);
    },

    getRoute : function(key, args) {
      return lookup[key];
    },

    routePath : function(key, args) {
      var url = this.getRoute(key);
      url = url ? url.url : null;
      if(url && args) {
        url = this.replaceUrlParams(url, args);
      };
      return url;
    },

    install : function($routeProvider) {
      for(var key in lookup) {
        var route = lookup[key];
        var url = route['url'];
        var params = route['params'];
        $routeProvider.when(url, params);
      };
      if(otherwiseLookup) {
        $routeProvider.otherwise(otherwiseLookup);
      }
    }
  };

})();
