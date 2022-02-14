import { getColors } from 'theme-colors'

function generateColors(colors) {
  return Object.entries(colors).map(([key, color]) => [key, getColors(color)])
}

function generateCSSVariableStore(scopes = ['dark']) {
  scopes = ['default', ...scopes]
  const _store = scopes.reduce((obj, scope) => ({ [scope]: {}, ...obj }), {})
  const getScope = (scope) => _store[scope] || null
  const putSingle = (key) => (value) => {
    const _arr = value.split(' ')
    const _value = _arr.pop()
    const _scope = getScope(_arr.pop() || 'default')
    if (_scope) {
      _scope[key] = _value
    }
  }
  const put = (key, value) => {
    value.split(' ').map(putSingle(key))
  }
  const generateVar = ([key, value]) => `--${key}: ${value}`
  const generateScope = (scope) => {
    const vars = Object.entries(getScope(scope)).map(generateVar).join(';')
    if (!vars) {
      return
    }
    return scope === 'default' ? `:root {${vars}}` : `.${scope} {${vars}}`
  }
  const generate = () => scopes.map(generateScope).join(' ')
  return { put, generate }
}

function generateCSSVariables(colors) {
  const { put, generate } = generateCSSVariableStore(['dark'])
  const colorsList = generateColors(colors)
  colorsList.forEach(([color, map]) => Object.entries(map).forEach(([variant, value]) => put(`${color}-${variant}`, value)))
  return generate()
}

export {
  generateCSSVariables
}
