//
// test/spec/midway/appSpec.js
//
describe("Testing Modules ", function() {
  describe("App Module", function() {

    var module;
    before(function() {
      module = angular.module("App");
    });

    it("It should be registered", function() {
      expect(module).not.to.equal(null);
    });

    describe("Dependencies", function() {

      var deps;
      var hasModule = function(m) {
        return deps.indexOf(m) >= 0;
      };
      before(function() {
        deps = module.value('appName').requires;
      });

      //you can also test the module's dependencies
      it("It should have App.Controllers as a dependency ", function() {
        expect(hasModule('App.Controllers')).to.equal(true);
      });

      it("It should have App.Directives as a dependency ", function() {
        expect(hasModule('App.Directives')).to.equal(true);
      });

      it("It should have App.Filters as a dependency ", function() {
        expect(hasModule('App.Filters')).to.equal(true);
      });

      it("It should have App.Routes as a dependency ", function() {
        expect(hasModule('App.Routes')).to.equal(true);
      });

      it("It should have App.Services as a dependency ", function() {
        expect(hasModule('App.Services')).to.equal(true);
      });
    });
  });
});
