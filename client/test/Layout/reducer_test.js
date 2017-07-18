import { expect } from 'chai'
import reducer, { initialState } from 'app/Layout/reducer'
import actions from 'app/Layout/actions'

describe('Layout reducer', () => {
  context('SET_LAYER', () => {
    it('returns expected state', () => {
      expect(reducer(initialState, {
        type: actions.SET_LAYER,
        payload: {}
      })).to.eql({
        ...initialState,
        layer: {}
      })
    })
  })

  context('SET_ACTIVE_NAV', () => {
    it('returns expected state', () => {
      expect(reducer(initialState, {
        type: actions.SET_ACTIVE_NAV,
        payload: 'users'
      })).to.eql({
        ...initialState,
        activeNavItem: 'users'
      })
    })
  })

  context('RESET_LAYER', () => {
    it('returns expected state', () => {
      expect(reducer(initialState, {
        type: actions.RESET_LAYER
      })).to.eql({
        ...initialState
      })
    })
  })

  context('SET_LOADING', () => {
    it('returns expected state', () => {
      expect(reducer(initialState, {
        type: actions.SET_LOADING,
        payload: true
      })).to.eql({
        ...initialState,
        loading: true
      })
    })
  })

  context('SET_REDIRECT', () => {
    it('returns expected state', () => {
      expect(reducer(initialState, {
        type: actions.SET_REDIRECT,
        payload: '/'
      })).to.eql({
        ...initialState,
        redirect: '/'
      })
    })
  })

  context('SET_TOAST', () => {
    it('returns expected state', () => {
      expect(reducer(initialState, {
        type: actions.SET_TOAST,
        payload: {}
      })).to.eql({
        ...initialState,
        toast: {}
      })
    })
  })

  context('RESET_TOAST', () => {
    it('returns expected state', () => {
      expect(reducer(initialState, {
        type: actions.RESET_TOAST
      })).to.eql({
        ...initialState
      })
    })
  })
})

