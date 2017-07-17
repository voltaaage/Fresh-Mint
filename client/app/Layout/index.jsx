import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Anchor,
  Box,
  Header,
  Footer,
  Icons,
  Layer,
  Menu,
  Sidebar,
  Split,
  Toast
} from 'grommet'
import _ from 'lodash'
import actions from './actions'

class Layout extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = this.fetchStoreState()
    this.dispatch = this.context.store.dispatch

    this.onLayerClose = this.onLayerClose.bind(this)
    this.onToastClose = this.onToastClose.bind(this)
  }

  componentWillMount() {
    const store = this.context.store
    this.unsubscribe = store.subscribe(() => {
      this.setState(this.fetchStoreState())
    })
  }

  componentDidUpdate() {
    if (this.state.redirect) {
      this.redirect()
    }
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onLayerClose() {
    this.dispatch(actions.resetLayer())
  }

  onToastClose() {
    this.dispatch(actions.resetToast())
  }

  redirect() {
    this.dispatch(actions.redirect(this.state.redirect))
  }

  fetchStoreState() {
    return this.context.store.getState().layout
  }

  rootPath() {
    const user = this.props.user

    if (_.isEmpty(user)) {
      return window.env.routes.root_path()
    }

    return window.env.routes.authenticated_root_path()
  }

  renderLayer() {
    const layer = this.state.layer

    if (_.isEmpty(layer)) {
      return null
    }

    return (
      <Layer closer flush onClose={layer.onClose || this.onLayerClose}>
        {layer.component}
      </Layer>
    )
  }

  renderLoading() {
    if (this.state.loading) {
      return (
        <Icons.Spinning />
      )
    }
    return null
  }

  renderAppMenu() {
    const user = this.props.user

    if (_.isEmpty(user)) {
      return null
    }

    return (
      <Sidebar fixed size="small" colorIndex="brand">
        <Header pad="small" justify="between" size="small">
          <Menu>
            <Anchor
              label="Time Management"
              href={this.rootPath()}
            />
          </Menu>
          <Box flex justify="end" direction="row">
            {this.renderLoading()}
          </Box>
        </Header>
        <Box flex="grow" justify="start">
          <Menu primary>
            <Anchor
              label="Team"
              href={window.env.routes.users_path()}
              icon={<Icons.Base.User />}
              onClick={() => this.dispatch(actions.setActiveNav('users'))}
              className={
                this.state.activeNavItem.includes('users') ? 'active' : null
              }
            />
            <Anchor
              label="Projects"
              href={window.env.routes.projects_path()}
              icon={<Icons.Base.Tasks />}
              onClick={() => this.dispatch(actions.setActiveNav('projects'))}
              className={
                this.state.activeNavItem.includes('projects') ? 'active' : null
              }
            />
            <Anchor
              label="Forecasting"
              href={window.env.routes.forecasts_path()}
              icon={<Icons.Base.Cloud />}
              onClick={() => this.dispatch(actions.setActiveNav('forecasts'))}
              className={
                this.state.activeNavItem.includes('forecasts') ? 'active' : null
              }
            />
            <Anchor
              label="Reporting"
              href={window.env.routes.reports_path()}
              icon={<Icons.Base.LineChart />}
              onClick={() => this.dispatch(actions.setActiveNav('reports'))}
              className={
                this.state.activeNavItem.includes('reports') ? 'active' : null
              }
            />
          </Menu>
        </Box>
        <Footer>
          <Menu label={user.email} icon={<Icons.Base.User />} size="small">
          </Menu>
        </Footer>
      </Sidebar>
    )
  }

  render() {
    return (
      <Box>
        {this.renderLayer()}
        <Split flex="right">
          {this.renderAppMenu()}
          <Box>
            {this.props.children}
          </Box>
        </Split>
      </Box>
    )
  }
}

Layout.contextTypes = {
  store: PropTypes.object
}

Layout.propTypes = {
  children: PropTypes.element,
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

Layout.defaultProps = {
  children: null,
  user: null
}

export default Layout

