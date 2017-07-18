import actions from 'app/Home/actions'
import { expect } from 'chai'

describe('Home actions', () => {
  describe('setTitle', () => {
    it('returns expected action', () => {
      expect(actions.setTitle('New Title')).to.eql({
        type: actions.SET_TITLE,
        payload: 'New Title'
      })
    })
  })
})

