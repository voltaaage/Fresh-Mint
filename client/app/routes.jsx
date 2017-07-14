import React from 'react'
import page from 'page'
import client from './client'
// Components
import Home from './Home'

// GET - /
page('', () => {
  client(<Home />)
})

page()
