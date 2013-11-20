var CONFIG;

(function() {

var appPrefix = '/';
var templateUrlPrefix = 'templates/';
var appVersion = 8;

CONFIG = {

  version : appVersion,

  baseDirectory : appPrefix,
  templateDirectory : templateUrlPrefix,
  templateFileQuerystring : "?v=" + appVersion,

  routing : {

    prefix : '',
    html5Mode : false

  },

  viewUrlPrefix : templateUrlPrefix + 'views/',
  partialUrlPrefix : templateUrlPrefix + 'partials/',

  templateFileSuffix : '_tpl.html',

  prepareViewTemplateUrl : function(url) {
    return this.viewUrlPrefix + url + this.templateFileSuffix + this.templateFileQuerystring;
  }

};

})();
