import actions from 'app/Imports/actions'
import api from 'app/api'
import layoutActions from 'app/Layout/actions'
import sinon from 'sinon'
import { expect } from 'chai'
import { messages, dispatch } from 'test/helpers'

describe('Imports actions', () => {
  const file = 'c://fake_file_path.csv'

  describe('setFileUploaded', () => {
    it('returns expected action', () => {
      expect(actions.setFileUploaded(file)).to.eql({
        type: actions.SET_FILE_UPLOADED,
        payload: file
      })
    })
  })

  describe('setErrors', () => {
    it('returns expected action', () => {
      expect(actions.setErrors({})).to.eql({
        type: actions.SET_ERRORS,
        payload: {}
      })
    })
  })

  describe('resetErrors', () => {
    it('returns expected action', () => {
      expect(actions.resetErrors()).to.eql({
        type: actions.RESET_ERRORS
      })
    })
  })

  describe('uploadTransactions', () => {
    let stub

    afterEach(() => {
      messages.length = 0
      stub.restore()
    })

    context('resolve', () => {
      beforeEach(() => {
        stub = sinon.stub(api, 'create', () => (
          Promise.resolve({
            ok: true,
            body: file
          })
        ))
      })

      it('dispatches expected actions', () => (
        dispatch(actions.uploadTransactions()).then(() => {
          expect(messages.length).to.equal(3)
          expect(messages[0]).to.eql(layoutActions.setLoading(true))
          expect(messages[1]).to.eql(layoutActions.setLoading(false))
          expect(messages[2]).to.eql(actions.setFileUploaded(file))
        })
      ))
    })

    context('reject', () => {
      beforeEach(() => {
        stub = sinon.stub(api, 'show', () => (
          Promise.reject({
            body: {}
          })
        ))
      })

      it('dispatches expected actions', () => (
        dispatch(actions.uploadTransactions()).catch(() => {
          expect(messages.length).to.equal(3)
          expect(messages[0]).to.eql(layoutActions.setLoading(true))
          expect(messages[1]).to.eql(layoutActions.setLoading(false))
          expect(messages[2]).to.eql(actions.setErrors())
        })
      ))
    })
  })
})

