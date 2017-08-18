import api from 'app/api'
import layoutActions from 'app/Layout/actions'
import camelcaseKeysDeep from 'camelcase-keys-deep'

const actions = {
  SET_TRANSACTIONS_IMPORT: 'SET_TRANSACTIONS_IMPORT',
  SET_MONTH: 'SET_MONTH',
  SET_YEAR: 'SET_YEAR',

  setTransactionsImport(transactionsImport) {
    return {
      type: actions.SET_TRANSACTIONS_IMPORT,
      payload: transactionsImport
    }
  },

  setMonth(month) {
    return {
      type: actions.SET_MONTH,
      payload: month
    }
  },

  setYear(year) {
    return {
      type: actions.SET_YEAR,
      payload: year
    }
  },

  getImport({ id, month, year }) {
    return (dispatch) => {
      dispatch(layoutActions.setLoading(true))

      return api.show(window.env.routes.import_path(id), {
        month,
        year
      }).then((resp) => {
        dispatch(layoutActions.setLoading(false))

        if (resp.ok) {
          const response = camelcaseKeysDeep(resp.body)
          dispatch(actions.setTransactionsImport(response))
        }
      }).catch(() => {
        dispatch(layoutActions.setLoading(false))
      })
    }
  }
}

export default actions

