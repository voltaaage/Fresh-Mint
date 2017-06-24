import React from 'react'
import PropTypes from 'prop-types'

class Index extends React.Component {
  render () {
    return (
      <div>
        <div>Your React Component has Rendered!!</div>
        <div>Heading: {this.props.heading}</div>

        <div>Published: {this.props.published ? "true" : "false"}</div>
        <div>Test</div>
      </div>
    );
  }
}

Index.propTypes = {
  heading: PropTypes.string,
  published: PropTypes.bool
};
module.exports = Index
