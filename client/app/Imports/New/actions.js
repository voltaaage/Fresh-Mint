import api from 'app/api'
import layoutActions from 'app/Layout/actions'

const actions = {
  SET_FILE_UPLOADED: 'SET_FILE_UPLOADED',
  SET_ERRORS: 'SET_ERRORS',
  RESET_ERRORS: 'RESET_ERRORS',

  setFileUploaded(uploaded) {
    return {
      type: actions.SET_FILE_UPLOADED,
      payload: uploaded
    }
  },

  setErrors(errors) {
    return {
      type: actions.SET_ERRORS,
      payload: errors
    }
  },

  resetErrors() {
    return {
      type: actions.RESET_ERRORS
    }
  },

  uploadTransactions(transactions) {
    return (dispatch) => {
      dispatch(layoutActions.setLoading(true))

      return api.create(window.env.routes.imports_path(), { transactions })
      .then((resp) => {
        dispatch(layoutActions.setLoading(false))

        if (resp.ok) {
          const newImportPath = window.env.routes.import_path(resp.body.id)
          dispatch(layoutActions.setRedirect(newImportPath))
        }
      }).catch((err) => {
        dispatch(layoutActions.setLoading(false))
        dispatch(actions.setErrors(err.body))
      })
    }
  }
}

export default actions

