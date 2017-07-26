import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Header,
  Heading,
  Section
} from 'grommet'
import actions from 'app/Imports/actions'
import {
  convertCsvResultToTransactions,
  convertKeysToBackend,
  parseCsv
} from './util'

class NewImport extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = this.fetchStoreState()
    this.dispatch = this.context.store.dispatch

    this.onSubmit = this.onSubmit.bind(this)
    this.onComplete = this.onComplete.bind(this)
  }

  componentWillMount() {
    const store = this.context.store
    this.unsubscribe = store.subscribe(() => {
      this.setState(this.fetchStoreState())
    })
  }

  onComplete() {
    return (result) => {
      let transactions = convertCsvResultToTransactions(result)
      transactions = convertKeysToBackend(transactions)
      this.dispatch(actions.uploadTransactions(transactions))
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const file = this.transactionsFile.files[0]
    parseCsv(file, this.onComplete)
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
        <form
          onSubmit={this.onSubmit}
          encType="multipart/form-data"
        >
          <input
            type="file"
            accept=".csv"
            ref={input => this.transactionsFile = input}
          />
          <input
            type="submit"
            value="submit"
          />
        </form>
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

