import camelcaseKeysDeep from 'camelcase-keys-deep'

export function parseImports(response) {
  return camelcaseKeysDeep(response.map(value => (value)))
}
