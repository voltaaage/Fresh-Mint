import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Article,
  Header,
  Heading,
  Section,
  Table,
  TableRow
} from 'grommet'

import actions from './actions'
import layoutActions from 'app/Layout/actions'

class Import extends Component {
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

    this.dispatch(actions.getImport({ id: this.props.id }))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  fetchStoreState() {
    return this.context.store.getState().imports.show
  }

  renderTransactions() {
    const transactions = this.state.transactions
    console.log(transactions)

    return transactions.map(transaction => (
      <TableRow key={transaction.id}>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.category}</td>
        <td>{transaction.originalDescription}</td>
        <td>{transaction.notes}</td>
        <td>{transaction.transactionType}</td>
      </TableRow>
    ))
  }

  render() {
    return (
      <Section className="projectsImport__wrapper">
        <Header pad="medium">
          <Heading>Import Transactions</Heading>
        </Header>
        <Table>
          <thead>
            <tr>
              <th>DATE</th>
              <th>DESCRIPTION</th>
              <th>AMOUNT</th>
              <th>CATEGORY</th>
              <th>ORIGINAL DESCRIPTION</th>
              <th>NOTES</th>
              <th>TRANSACTION TYPE</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTransactions()}
          </tbody>
        </Table>
      </Section>
    )
  }
}

Import.contextTypes = {
  store: PropTypes.object
}

Import.propTypes = {
  id: PropTypes.string.isRequired
}

Import.defaultProps = {}

export default Import

