import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      <div>
        <h1>
          {this.state.title}
        </h1>
        <h2>
          <span>Welcome to Fresh-Mint</span>
        </h2>
      </div>
    )
  }
}

Home.contextTypes = {
  store: PropTypes.object
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home

