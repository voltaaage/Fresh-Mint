import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import {
  Header,
  Heading,
  Section
} from 'grommet'
import store from 'app/store'
import actions from 'app/Imports/actions'
import NewImport from 'app/Import/new'

describe('<NewImport />', () => {
  const dispatch = store.dispatch
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


