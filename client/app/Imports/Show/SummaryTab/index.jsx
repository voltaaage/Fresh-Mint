import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Section,
  Table,
  TableRow
} from 'grommet'

import CategorySummary from '../TransactionsTab/categorySummary'
import { calculateTotalCosts, formatTitle } from '../util'
import _ from 'lodash'

class SummaryTab extends Component {
  renderCategorySummaries() {
    const categories = this.props.categories
    const categorySummaries = []
    let totalCost = 0
    let totalCount = 0

    Object.keys(categories).forEach((category) => {
      const transactions = categories[category].map(value => (value))
      const cost = calculateTotalCosts(transactions)
      const count = transactions.length
      totalCost += cost
      totalCount += count

      categorySummaries.push(
        <TableRow key={category}>
          <td>{formatTitle(category)}</td>
          <td>${cost}</td>
          <td>{count}</td>
        </TableRow>
      )
    })

    categorySummaries.push(
      <TableRow key="total">
        <td>Total</td>
        <td>${_.round(totalCost, 2)}</td>
        <td>{totalCount}</td>
      </TableRow>
    )

    return categorySummaries
  }

  render() {
    return (
      <Section>
        <Table>
          <thead>
            <tr>
              <th>CATEGORY</th>
              <th>TOTAL</th>
              <th>TRANSACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {this.renderCategorySummaries()}
          </tbody>
        </Table>
      </Section>
    )
  }
}

SummaryTab.contextTypes = {
  categories: PropTypes.object
}

export default SummaryTab

