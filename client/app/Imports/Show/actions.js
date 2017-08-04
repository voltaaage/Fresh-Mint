import api from 'app/api'
import layoutActions from 'app/Layout/actions'
import camelcaseKeysDeep from 'camelcase-keys-deep'

const actions = {
  SET_IMPORT_ID: 'SET_IMPORT_ID',
  SET_TRANSACTIONS: 'SET_TRANSACTIONS',
  SET_MONTHS: 'SET_MONTHS',

  setImportId(importId) {
    return {
      type: actions.SET_IMPORT_ID,
      payload: importId
    }
  },

  setTransactions(transactions) {
    return {
      type: actions.SET_TRANSACTIONS,
      payload: transactions
    }
  },

  setMonths(months) {
    return {
      type: actions.SET_MONTHS,
      payload: months
    }
  },

  getImport({ id }) {
    return (dispatch) => {
      dispatch(layoutActions.setLoading(true))

      return api.show(window.env.routes.import_path(id)).then((resp) => {
        dispatch(layoutActions.setLoading(false))

        if (resp.ok) {
          const response = camelcaseKeysDeep(resp.body)

          dispatch(actions.setImportId(response.importId))
          dispatch(actions.setTransactions(response.transactions))
          dispatch(actions.setMonths(response.months))
        }
      }).catch(() => {
        dispatch(layoutActions.setLoading(false))
      })
    }
  },
}

export default actions

