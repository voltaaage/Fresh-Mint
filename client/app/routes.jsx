import React from 'react'
import page from 'page'
import client from './client'
// Components
import Home from './Home'
import NewImport from './Imports/new'
import Import from './Import/show'

// GET - /
page('', () => {
  client(<Home />)
})

// GET - /imports/new
page(window.env.routes.new_import_path(), () => {
  client(<NewImport />)
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
