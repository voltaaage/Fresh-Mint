import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  CurrencyIcon,
  MultipleIcon,
  Value
} from 'grommet'

import { calculateTotalCosts } from './util'

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
      id: PropTypes.number,
      date: PropTypes.string,
      description: PropTypes.string,
      amount: PropTypes.number,
      category: PropTypes.string
    })
  ).isRequired
}

export default CategorySummary
