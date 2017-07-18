import { expect } from 'chai'
import actions from 'app/Layout/actions'

describe('Layout actions', () => {
  describe('setLayer', () => {
    it('returns expected action', () => {
      expect(actions.setLayer({})).to.eql({
        type: actions.SET_LAYER,
        payload: {}
      })
    })
  })

  describe('setActiveNav', () => {
    it('returns expected action', () => {
      expect(actions.setActiveNav('users')).to.eql({
        type: actions.SET_ACTIVE_NAV,
        payload: 'users'
      })
    })
  })

  describe('resetLayer', () => {
    it('returns expected action', () => {
      expect(actions.resetLayer()).to.eql({
        type: actions.RESET_LAYER
      })
    })
  })

  describe('setLoading', () => {
    it('returns expected action', () => {
      expect(actions.setLoading(true)).to.eql({
        type: actions.SET_LOADING,
        payload: true
      })
    })
  })

  describe('setRedirect', () => {
    it('returns expected action', () => {
      expect(actions.setRedirect('/')).to.eql({
        type: actions.SET_REDIRECT,
        payload: '/'
      })
    })
  })

  describe('setToast', () => {
    it('returns expected action', () => {
      expect(actions.setToast({})).to.eql({
        type: actions.SET_TOAST,
        payload: {}
      })
    })
  })

  describe('resetToast', () => {
    it('returns expected action', () => {
      expect(actions.resetToast()).to.eql({
        type: actions.RESET_TOAST
      })
    })
  })
})

