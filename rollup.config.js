import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'index.js',
  output: {
    dir: 'web_modules',
    format: 'es'
  },
  plugins: [commonjs()]
}
