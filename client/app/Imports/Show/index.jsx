import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Accordion,
  AccordionPanel,
  Article,
  Box,
  Columns,
  Header,
  Heading,
  Label,
  Section,
  Table,
  TableRow,
  Value
} from 'grommet'
import {
  Button,
  ButtonGroup,
  ButtonToolbar
} from 'react-bootstrap'

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
    return this.state.transactionsImport.transactions.map(transaction => {
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
    let year = 2017
    const yearsMonths = this.state.transactionsImport.yearsMonths
    return yearsMonths.map((yearMonths) => (
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
    return yearMonths.months.map((month) => (
      <Button
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
        <Accordion openMulti={true}>
          <AccordionPanel heading='Months'>
            <Box
              align='center'
              colorIndex='light-2'
              direction='row'
              justify='start'
              margin='small'
              pad='small'
              wrap={true}
            >
              {this.renderYears()}
            </Box>
          </AccordionPanel>
          <AccordionPanel heading='Transactions'>
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
          </AccordionPanel>
        </Accordion>
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

