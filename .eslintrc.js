module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'indent': ['error', 4],
    'react/jsx-uses-react': 'error',   
    'react/jsx-uses-vars': 'error',
    'no-useless-catch': 'off'
  },
  parser: 'babel-eslint'
}
