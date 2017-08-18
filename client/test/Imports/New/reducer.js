import { expect } from 'chai'
import reducer, { initialState } from 'app/Imports/New/reducer'
import actions from 'app/Imports/New/actions'

describe('Layout reducer', () => {
  context('SET_FILE_UPLOADED', () => {
    const file = 'c://fake_file_path'
    it('returns expected state', () => {
      expect(reducer(initialState, {
        type: actions.SET_FILE_UPLOADED,
        payload: file
      })).to.eql({
        ...initialState,
        fileUploaded: file
      })
    })
  })

  context('SET_ERRORS', () => {
    it('returns expected state', () => {
      expect(reducer(initialState, {
        type: actions.SET_ERRORS,
        payload: { errors: {} }
      })).to.eql({
        ...initialState,
        errors: { errors: {} }
      })
    })
  })

  context('RESET_ERRORS', () => {
    it('returns expected state', () => {
      expect(reducer(initialState, {
        type: actions.RESET_ERRORS
      })).to.eql({
        ...initialState
      })
    })
  })
})

