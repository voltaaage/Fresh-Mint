import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import {
  Layer,
  Toast
} from 'grommet'
import store from 'app/store'
import actions from 'app/Layout/actions'
import Layout from 'app/Layout'

describe('<Layout />', () => {
  const dispatch = store.dispatch
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Layout />
      </Provider>
    )
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders component', () => {
    expect(wrapper.find(Layout)).to.have.length(1)
  })


  describe('componentDidUpdate', () => {
    context('redirect', () => {
      it('calls expected function', () => {
        const spy = sinon.spy(Layout.prototype, 'redirect')
        const redirect = window.env.routes.root_path()
        dispatch(actions.setRedirect(redirect))
        wrapper.update()
        expect(spy.called).to.equal(true)
      })
    })
  })

  context('Grommet', () => {
    describe('<Layer />', () => {
      it('renders component', () => {
        dispatch(actions.setLayer({
          component: null
        }))
        expect(wrapper.find(Layer)).to.have.length(1)
      })

      context('onClose', () => {
        it('calls expected function', () => {
          const onClose = sinon.spy()
          dispatch(actions.setLayer({
            component: null,
            onClose
          }))
          wrapper.find(Layer).props().onClose()
          expect(onClose.callCount).to.equal(1)
        })
      })
    })

    describe('<Toast />', () => {
      it('renders component', () => {
        dispatch(actions.setToast({
          status: null
        }))
        expect(wrapper.find(Toast)).to.have.length(1)
      })
    })
  })
})

