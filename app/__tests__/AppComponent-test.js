jest.dontMock('../AppComponent.js');

describe('AppComponent', function() {
  it('has the right date', function(){
    var React = require('react/addons');
    var AppComponent = require('../AppComponent.js');
    var TestUtils = React.addons.TestUtils;

    var component = TestUtils.renderIntoDocument(
      <AppComponent/>
    );
    var date = TestUtils.findRenderedDOMComponentWithClass(
      component, 'date'
    );
    expect(date.getDOMNode().textContent).toEqual('3/1/4159');
  });
});