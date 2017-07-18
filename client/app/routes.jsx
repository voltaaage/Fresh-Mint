import React from 'react'
import page from 'page'
import client from './client'
// Components
import Home from './Home'
import NewImport from './imports/new'

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
page()
