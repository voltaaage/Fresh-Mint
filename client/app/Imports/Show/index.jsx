import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Accordion,
  AccordionPanel,
  Box,
  CurrencyIcon,
  Header,
  Heading,
  MultipleIcon,
  Section,
  Tab,
  Table,
  TableRow,
  Tabs,
  Value,
} from 'grommet'
import {
  Button,
  ButtonGroup,
  ButtonToolbar
} from 'react-bootstrap'

import actions from './actions'
import TransactionTable from './transactionTable.jsx'
import { calculateTotalCosts, formatTitle } from './util'

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

  renderCategories() {
    const categories = this.state.transactionsImport.transactions
    let categoryTransactions = []
    for (let category in categories) {
      const transactions = categories[category].map((value, key) => (value))
      categoryTransactions.push(
        <Section
          pad='medium'
          key={category}
        >
          <Heading
            tag='h3'
            uppercase={true}
            size='medium'
          >
            {formatTitle(category)}
          </Heading>
          {this.renderCategorySummary(transactions)}
          <TransactionTable transactions={transactions} />
        </Section>
      )
    }
    return categoryTransactions
  }

  renderCategorySummary(transactions) {
    return (
      <Box
        direction='row'
      >
        <Box pad='small'>
          <Value
            label='Cost ($)'
            size='small'
            value={calculateTotalCosts(transactions)}
            icon={<CurrencyIcon />}
          />
        </Box>
        <Box pad='small'>
          <Value
            label='# of Transactions'
            size='small'
            value={transactions.length}
            icon={<MultipleIcon />}
          />
        </Box>
      </Box>
    )
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
        bsSize='small'
        key={month}
        onClick={this.onMonthClick(month, yearMonths.year)}
      >
        {month}
      </Button>
    ))
  }

  render() {
    return (
      <Section className='projectsImport__wrapper'>
        <Header pad='medium'>
          <Heading>Import Transactions</Heading>
        </Header>
        <Accordion>
          <AccordionPanel heading='Months'>
            <Box
              align='center'
              colorIndex='light-2'
              direction='row'
              justify='start'
              margin='small'
              pad='small'
            >
              {this.renderYears()}
            </Box>
          </AccordionPanel>
        </Accordion>
        <Tabs justify='start'>
          <Tab title='Transactions'>
            {this.renderCategories()}
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

