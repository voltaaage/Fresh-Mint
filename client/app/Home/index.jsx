import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Header,
  Heading,
  Section
} from 'grommet'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = this.fetchStoreState()
    this.dispatch = this.context.store.dispatch
  }

  componentWillMount() {
    const store = this.context.store
    this.unsubscribe = store.subscribe(() => {
      this.setState(this.fetchStoreState())
    })
  }

  fetchStoreState() {
    return this.context.store.getState().home
  }

  render() {
    return (
      <Section className="home__wrapper">
        <Header pad="medium">
          <Heading>{this.state.title}</Heading>
        </Header>
        <Header pad="medium">
        </Header>
      </Section>
    )
  }
}

Home.contextTypes = {
  store: PropTypes.object
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home


