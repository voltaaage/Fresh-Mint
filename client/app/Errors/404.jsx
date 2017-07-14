import React from 'react'
import PropTypes from 'prop-types'
import {
  Headline,
  Icons,
  Section
} from 'grommet'

const NotFound = ({ path }) => (
  <Section align="center">
    <Headline size="large">404.</Headline>
    <Icons.Status size="large" value="warning" />
    <p>The requested URL <em>{path}</em> was not found.</p>
  </Section>
)

NotFound.propTypes = {
  path: PropTypes.string
}

NotFound.defaultProps = {
  path: '/'
}

export default NotFound
