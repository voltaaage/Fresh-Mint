import './routes'

// TODO: Remove `environment` condition.
if (window.env.environment !== 'test') {
  // Grommet Theme
  require('grommet/scss/hpinc') // eslint-disable-line global-require
}
