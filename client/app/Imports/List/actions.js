import api from 'app/api'
import layoutActions from 'app/Layout/actions'

import { parseImports } from './util'

const actions = {
  SET_IMPORTS: 'SET_IMPORTS',

  setImports(imports) {
    return {
      type: actions.SET_IMPORTS,
      payload: imports
    }
  },

  getImports() {
    return (dispatch) => {
      dispatch(layoutActions.setLoading(true))

      return api.show(window.env.routes.imports_path()).then((resp) => {
        dispatch(layoutActions.setLoading(false))

        if (resp.ok) {
          dispatch(actions.setImports(parseImports(resp.body)))
        }
      }).catch(() => {
        dispatch(layoutActions.setLoading(false))
      })
    }
  }
}

export default actions

