import React from 'react'
import PropTypes from 'prop-types'

const NotFound = ({ path }) => (
  <div>
    <h1>404.</h1>
    <p>The requested URL <em>{path}</em> was not found.</p>
  </div>
)

NotFound.propTypes = {
  path: PropTypes.string
}

NotFound.defaultProps = {
  path: '/'
}

export default NotFound
