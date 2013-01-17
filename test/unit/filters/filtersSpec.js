//
// test/unit/filters/filtersSpec.js
//
describe("Unit: Testing Filters", function() {

  beforeEach(angular.mock.module('App'));

  it('should have a range filter', inject(function($filter) {
    expect($filter('range')).not.to.equal(null);
  }));

  it('should have a range filter that produces an array of numbers', inject(function($filter) {
    var range = $filter('range')([], 5);
    expect(range.length).to.equal(5);
    expect(range[0]).to.equal(0);
    expect(range[1]).to.equal(1);
    expect(range[2]).to.equal(2);
    expect(range[3]).to.equal(3);
    expect(range[4]).to.equal(4);
  }));

  it('should return null when nothing is set', inject(function($filter) {
    var range = $filter('range')();
    expect(range).to.equal(null);
  }));

  it('should return the input when no number is set', inject(function($filter) {
    var range, input = [1];
    range = $filter('range')(input);
    expect(range).to.equal(input);

    range = $filter('range')(input, 0);
    expect(range).to.equal(input);

    range = $filter('range')(input, -1);
    expect(range).to.equal(input);

    range = $filter('range')(input, 'Abc');
    expect(range).to.equal(input);
  }));

});
