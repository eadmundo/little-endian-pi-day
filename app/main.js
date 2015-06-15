var React = require('react');
var AppComponent = require('./AppComponent.js');
var Timer = require('./Timer.js');
React.render(<AppComponent/>, document.getElementById('when'));
React.render(<Timer/>, document.getElementById('timer'));