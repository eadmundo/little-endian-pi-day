var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
  getDiff: function(lepiday) {
    return moment.duration(lepiday.diff(moment()));
  },
  getInitialState: function() {
    var lepiday = moment('3-1-4159', 'D-M-YYYY');
    return {
      lepiday: lepiday,
      diff: this.getDiff(lepiday)
    };
  },
  updateTime: function() {
      this.setState({diff: this.getDiff(this.state.lepiday)});
  },
  componentDidMount: function() {
      this.updateTime();
      setInterval(this.updateTime, 1000);
  },
  render: function () {
    return (
      <span className="timer">Only {this.state.diff.years()} years, {this.state.diff.months()} months, {this.state.diff.days()} days, {this.state.diff.hours()} hours, {this.state.diff.minutes()} minutes and {this.state.diff.seconds()} seconds until little-endian Pi Day!</span>
    );
  }
});