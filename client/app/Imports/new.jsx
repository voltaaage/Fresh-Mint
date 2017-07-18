import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Header,
  Heading,
  Section
} from 'grommet'
import actions from 'app/Imports/actions'

class NewImport extends Component {
  static onFileUpload(e) {
    const file = e.target.value
    this.dispatch(actions.setFileUploaded(file))
  }

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
          <Heading>New Import</Heading>
        </Header>
        <Header pad="medium">
          <span>Import your transaction spreadsheet here</span>
        </Header>
        <input type="file" onChange={this.onFileUpload} />
      </Section>
    )
  }
}

NewImport.contextTypes = {
  store: PropTypes.object
}

NewImport.propTypes = {}

NewImport.defaultProps = {}

export default NewImport

