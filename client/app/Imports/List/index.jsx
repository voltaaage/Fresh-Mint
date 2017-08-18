import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Anchor,
  Header,
  Heading,
  List,
  ListItem,
  Section
} from 'grommet'
import actions from './actions'

class ImportsList extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = this.fetchStoreState()
    this.dispatch = this.context.store.dispatch
  }

  componentWillMount() {
    const store = this.context.store
    this.unsubscribe = store.subscribe(() => {
      this.setState(this.fetchStoreState())
    })

    this.dispatch(actions.getImports())
  }

  fetchStoreState() {
    return this.context.store.getState().imports.list
  }

  renderImports() {
    return this.state.imports.map((csvImport) => {
      const label = `Import ${csvImport.id}`
      const id = csvImport.id
      return (
        <ListItem key={id}>
          <Anchor
            label={label}
            href={window.env.routes.import_path(id)}
          />
        </ListItem>
      )
    })
  }

  render() {
    return (
      <Section className="home__wrapper">
        <Header pad="medium">
          <Heading>Imports</Heading>
        </Header>
        <List>
          {this.renderImports()}
        </List>
      </Section>
    )
  }
}

ImportsList.contextTypes = {
  store: PropTypes.object
}

ImportsList.propTypes = {}

ImportsList.defaultProps = {}

export default ImportsList
