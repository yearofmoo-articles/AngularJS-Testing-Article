var App = window.App = angular.module('App',
  [
    'ngRoute',
    'Scope.safeApply',
    'App.Controllers',
    'App.Filters',
    'App.Services',
    'App.Directives',
    'App.Routes'
  ]
);
