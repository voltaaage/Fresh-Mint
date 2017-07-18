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
    return (
      <Sidebar fixed size="small" colorIndex="brand">
        <Header pad="small" justify="between" size="small">
          <Menu>
            <Anchor
              label="Fresh-Mint"
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
              label="New Import"
              href={window.env.routes.new_import_path()}
              icon={<Icons.Base.DocumentCsv />}
              onClick={() => this.dispatch(actions.setActiveNav('new_import'))}
              className={
              this.state.activeNavItem.includes('users') ? 'active' : null
              }
            />
            <Anchor
              label="All Imports"
              href={window.env.routes.imports_path()}
              icon={<Icons.Base.DriveCage />}
              onClick={() => this.dispatch(actions.setActiveNav('imports'))}
              className={
              this.state.activeNavItem.includes('projects') ? 'active' : null
              }
            />
          </Menu>
        </Box>
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

