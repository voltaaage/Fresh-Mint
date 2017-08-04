import React from 'react'
import page from 'page'
import client from './client'
// Components
import Home from './Home'
import NewImport from './Imports/New'
import Import from './Imports/Show'
import ImportsList from './Imports/List'

// GET - /
page('', () => {
  client(<Home />)
})

// GET - /imports
page(window.env.routes.imports_path(), () => {
  client(<ImportsList />)
})

// GET - /imports/new
page(window.env.routes.imports_path(), () => {
  client(<Home />)
})

// GET - /imports/:id
page(window.env.routes.import_path(':id'), (context) => {
  client(<Import id={context.params.id} />)
})

page()
