import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import NotFound from 'app/Errors/404'

describe('Errors', () => {
  describe('<NotFound />', () => {
    it('renders component', () => {
      const component = render(<NotFound />)
      expect(component).to.have.length(1)
    })
  })
})
