import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Heading,
  Section
} from 'grommet'

import TransactionTable from './transactionTable'
import CategorySummary from './categorySummary'
import { formatTitle } from '../util'

class TransactionsTab extends Component {
  renderCategories() {
    const categories = this.props.categories
    const categoryTransactions = []

    Object.keys(categories).forEach((category) => {
      const transactions = categories[category].map(value => (value))
      categoryTransactions.push(
        <Section
          pad="medium"
          key={category}
        >
          <Heading
            tag="h3"
            size="medium"
          >
            {formatTitle(category)}
          </Heading>
          <CategorySummary transactions={transactions} />
          <TransactionTable transactions={transactions} />
        </Section>
      )
    })
    return categoryTransactions
  }

  render() {
    return (
      <Section>
        {this.renderCategories()}
      </Section>
    )
  }
}

TransactionsTab.contextTypes = {
  categories: PropTypes.object
}

export default TransactionsTab

