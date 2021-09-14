import alias from '@rollup/plugin-alias'

module.exports = {
  input: 'src/index.ts',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [
    alias({
      entries: [
        {find: '@', replacement: './src'},
      ]
    })
  ]
}
