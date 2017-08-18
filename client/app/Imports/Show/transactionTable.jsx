import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  TableRow
} from 'grommet'

class TransactionTable extends Component {
  renderTransactions() {
    return this.props.transactions.map((transaction) => {
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


  render() {
    return (
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
    )
  }
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
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
  }))
}

TransactionTable.defaultProps = {
  transactions: []
}

export default TransactionTable
