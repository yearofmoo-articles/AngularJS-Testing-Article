angular.module('App.Resources', [])

  .factory('User', function($resource) {
    return $resource.url('/path',
      {
        id : '@id'
      },
      {
        query : { method : 'GET', isArray : true }, //this can also be called index or all
        save : { method : 'PUT' }, //this is the update method
        create : { method : 'POST' },
        destroy : { method : 'DELETE' }
      }
  });
