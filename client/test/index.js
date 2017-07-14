import JSDom from 'jsdom'
import { routes } from 'test/routes'

global.document = JSDom.jsdom('<div id="client" />')

global.window.env = {
  environment: 'test',
  meta: {
    authenticity_token: null
  },
  options: {
    project: {
      kinds: {
        confirmed: 0,
        internal: 2,
        operations: 3,
        tentative: 1
      }
    },
    user: {
      roles: ['user', 'admin']
    }
  },
  user: {
    roles: []
  },
  routes: {}
}

// Generate route helper functions from `js-routes`
// https://github.com/railsware/js-routes
routes.forEach((route) => {
  global.window.env.routes[`${route}_path`] = path => (
    `/${[route, path].filter(s => s).join('/')}`
  )
})

global.history = {
  replaceState() {},
  pushState() {}
}

// Grommet
global.window.HTMLElement.prototype.scrollIntoView = () => {}

