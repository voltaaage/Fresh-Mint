import { expect } from 'chai'
import reducer, { initialState } from 'app/Home/reducer'
import actions from 'app/Home/actions'

describe('Home reducer', () => {
  context('SET_TITLE', () => {
    it('returns expected state', () => {
      expect(reducer(initialState, {
        type: actions.SET_TITLE,
        payload: 'This Title'
      })).to.eql({
        ...initialState,
        title: 'This Title'
      })
    })
  })
})

