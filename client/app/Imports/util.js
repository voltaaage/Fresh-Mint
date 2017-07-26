import Papa from 'papaparse'
import actions from 'app/Imports/actions'
import camelCaseKeysDeep from 'camelcase-keys-deep'
import decamelizeKeysDeep from 'decamelize-keys-deep'

function configuration(onComplete) {
  return {
    delimiter: "",	// auto-detect
    newline: "",	// auto-detect
    quoteChar: '"',
    header: true,
    dynamicTyping: true,
    worker: false,
    complete: onComplete(),
    error: undefined,
    skipEmptyLines: true
  }
}

export function parseCsv(file, onComplete) {
  Papa.parse(file, configuration(onComplete))
}

export function convertKeysToBackend(object) {
  return decamelizeKeysDeep(camelCaseKeysDeep(object))
}

export function convertCsvResultToTransactions(result) {
  return result.data.map((value, key) => (value))
}
