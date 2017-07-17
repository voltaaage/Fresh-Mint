import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from 'grommet'
import store from './store'
import Layout from './Layout'

const appStyle = {
  maxWidth: '100%'
}

const client = (components) => {
  render(
    <div>
      <Provider store={store}>
        <App style={appStyle}>
          <Layout user={window.env.user}>
            {components}
          </Layout>
        </App>
      </Provider>
    </div>,
    document.getElementById('client')
  )
}

export default client
