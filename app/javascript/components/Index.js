var React = require("react")
var Index = React.createClass({
  propTypes: {
    heading: React.PropTypes.string,
    test: React.PropTypes.bool
  },

  render: function() {
    return (
      <div>
        <div>Heading: {this.props.heading}</div>
        <div>Test: {this.props.test}</div>
        <div>Body: {this.props.body}</div>
      </div>
    );
  }
});
module.exports = Index

