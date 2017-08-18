import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Accordion,
  AccordionPanel,
  Box,
  Header,
  Heading,
  Section,
  Tabs,
  Tab,
  Table,
  TableRow
} from 'grommet'
import {
  Button,
  ButtonGroup,
  ButtonToolbar
} from 'react-bootstrap'

import actions from './actions'
import TransactionTable from './transactionTable.jsx'

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

    this.dispatch(actions.getImport({
      id: this.props.id,
      month: this.state.month,
      year: this.state.year
    }))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onMonthClick(month, year) {
    return (() => {
      this.dispatch(actions.getImport({
        id: this.props.id,
        month,
        year
      }))
    })
  }

  fetchStoreState() {
    return this.context.store.getState().imports.show
  }

  renderTransactions() {
    return this.state.transactionsImport.transactions.map((transaction) => {
      const transactionDate = new Date(transaction.date)
      return (
        <TableRow key={transaction.id}>
          <td>{transactionDate.toDateString()}</td>
          <td>{transaction.description}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.category}</td>
          <td>{transaction.originalDescription}</td>
          <td>{transaction.notes}</td>
          <td>{transaction.transactionType}</td>
        </TableRow>
      )
    })
  }

  renderYears() {
    const yearsMonths = this.state.transactionsImport.yearsMonths
    return yearsMonths.map(yearMonths => (
      <div key={yearMonths.year}>
        {yearMonths.year}
        <ButtonToolbar>
          <ButtonGroup>
            {this.renderMonths(yearMonths)}
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    ))
  }

  renderMonths(yearMonths) {
    return yearMonths.months.map(month => (
      <Button
        bsSize="small"
        key={month}
        onClick={this.onMonthClick(month, yearMonths.year)}
      >
        {month}
      </Button>
    ))
  }

  render() {
    return (
      <Section className="projectsImport__wrapper">
        <Header pad="medium">
          <Heading>Import Transactions</Heading>
        </Header>
        <Accordion>
          <AccordionPanel heading="Months">
            <Box
              align="center"
              colorIndex="light-2"
              direction="row"
              justify="start"
              margin="small"
              pad="small"
            >
              {this.renderYears()}
            </Box>
          </AccordionPanel>
        </Accordion>
        <Tabs justify="start">
          <Tab title="Transactions">
            <TransactionTable transactions={this.state.transactionsImport.transactions} />
          </Tab>
          <Tab title="Categories">
            test
          </Tab>
        </Tabs>
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

