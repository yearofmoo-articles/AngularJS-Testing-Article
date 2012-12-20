'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../index.html');
  });

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/");
  });

  describe('redirections', function() {

    it('should redirect /home to /', function() {
      browser().navigateTo('#/home');
      expect(browser().location().url()).toBe("/");
    });

  });

  describe('view1', function() {

    beforeEach(function() {
      browser().navigateTo('#/');
    });

    it('should render / properly', function() {
      expect(element('body').text()).toMatch(/home page/);
    });

    it('2', function() {
    });

  });

});
