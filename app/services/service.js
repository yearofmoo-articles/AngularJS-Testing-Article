App.factory('service', function() {

  return function(name) {
    name = name || '';
    if(name.length == 0) {
      throw new Error();
    }
    return name.toUpperCase();
  };

});
