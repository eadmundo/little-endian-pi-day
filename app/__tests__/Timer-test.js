jest.autoMockOff();

describe('Timer', function(){
  it('schedules updateTime to run every second', function(){
    var MockDate = require('mockdate');
    MockDate.set(1434319925275);
    var React = require('react/addons');
    var Timer = require('../Timer.js');
    var TestUtils = React.addons.TestUtils;

    var component = TestUtils.renderIntoDocument(
      <Timer/>
    );
    var timer = TestUtils.findRenderedDOMComponentWithClass(
      component, 'timer'
    );
    expect(timer.getDOMNode().textContent).toEqual('Only 2143 years, 6 months, 23 days, 1 hours, 47 minutes and 54 seconds until little-endian Pi Day!');
    MockDate.reset();
  });
});