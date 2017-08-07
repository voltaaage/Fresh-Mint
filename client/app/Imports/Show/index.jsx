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

  renderMonths() {
    let year = 2017
    return this.state.transactionsImport.months.map(month => {
      const label= `${month.month}/${month.year}`
      return (
        <Box
          align='center'
          colorIndex='light-1'
          direction='row'
          justify='start'
          key={label}
          margin='small'
          pad='small'
          onClick={this.onMonthClick(month.month, month.year)}
          wrap={true}
        >
          <Value
            value={label}
            colorIndex='accent-2'
            size='small'
          />
        </Box>
      )
    })
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
              {this.renderMonths()}
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

