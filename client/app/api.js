import superagent from 'superagent'

const request = (method, url) => (
  superagent[method](url)
  .accept('json')
  .type('json')
  .set('X-Requested-With', 'XMLHttpRequest')
)

const requestCSRF = (method, url) => (
  request(method, url).send({
    [window.env.meta.csrf_param]: window.env.meta.csrf_token,
    utf8: '✓'
  })
)

const api = {
  create(url, payload) {
    return requestCSRF('post', url).send(payload)
  },
  show(url, payload) {
    return request('get', url).query(payload)
  },
  update(url, payload) {
    return requestCSRF('put', url).send(payload)
  },
  destroy(url) {
    return requestCSRF('del', url)
  }
}

export default api
