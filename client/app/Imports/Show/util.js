import _ from 'lodash'

export function formatTitle(title) {
  let formattedTitle = _.snakeCase(title)
  formattedTitle = _.replace(formattedTitle, '_', ' ')
  formattedTitle = _.capitalize(formattedTitle)

  return formattedTitle
}

export function calculateTotalCosts(transactions) {
  const total = _.reduce(transactions, (sum, transaction) => {
    if (transaction.transactionType === 'credit') {
      return sum - transaction.amount
    }
    return sum + transaction.amount
  }, 0)

  return _.round(total, 2)
}
