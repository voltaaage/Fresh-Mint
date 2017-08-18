import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { expect } from 'chai'
import store from 'app/store'
import NewImport from 'app/Import/New'

describe('<NewImport />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <NewImport />
      </Provider>
    )
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders component', () => {
    expect(wrapper.find(NewImport)).to.have.length(1)
  })
})
