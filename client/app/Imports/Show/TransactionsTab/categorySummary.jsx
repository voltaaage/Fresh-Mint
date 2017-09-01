import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  CurrencyIcon,
  MultipleIcon,
  Value
} from 'grommet'

import { calculateTotalCosts } from '../util'

const CategorySummary = props => (
  <Box direction="row" >
    <Box pad="small">
      <Value
        label="Cost ($)"
        size="small"
        value={calculateTotalCosts(props.transactions)}
        icon={<CurrencyIcon />}
      />
    </Box>
    <Box pad="small">
      <Value
        label="# of Transactions"
        size="small"
        value={props.transactions.length}
        icon={<MultipleIcon />}
      />
    </Box>
  </Box>
)

CategorySummary.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      category: PropTypes.string,
      createdAt: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.number,
      importId: PropTypes.number,
      notes: PropTypes.string,
      originalDescription: PropTypes.string,
      transactionType: PropTypes.string,
      updatedAt: PropTypes.string
    })
  ).isRequired
}

export default CategorySummary
