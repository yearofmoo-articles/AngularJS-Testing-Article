var CONFIG;

(function() {

var appPrefix = 'app/';
var templateUrlPrefix = 'templates/';

CONFIG = {

  baseDirectory : appPrefix,
  templateDirectory : templateUrlPrefix,

  routing : {

    prefix : '!',
    html5Mode : false

  },

  viewUrlPrefix : templateUrlPrefix + 'views/',
  partialUrlPrefix : templateUrlPrefix + 'partials/',

  templateFileSuffix : '_tpl.html',

  prepareViewTemplateUrl : function(url) {
    return this.viewUrlPrefix + url + this.templateFileSuffix;
  }

};

})();
