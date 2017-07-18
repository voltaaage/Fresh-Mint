import { expect } from 'chai'
import * as util from 'app/util'

describe('App util', () => {
  describe('capitalize', () => {
    it('returns a capitalized string', () => {
      const input = 'test'
      const output = 'Test'

      expect(util.capitalize(input)).to.eql(output)
    })
  })
})
