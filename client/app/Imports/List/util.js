import actions from './actions'
import camelcaseKeysDeep from 'camelcase-keys-deep'

export function parseImports(response) {
  const temp = camelcaseKeysDeep(response.map((value, key) => (value)))
  return camelcaseKeysDeep(response.map((value, key) => (value)))
}
