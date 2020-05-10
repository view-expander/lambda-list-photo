import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs'
    }
  ],
  plugins: [
    progress(),
    typescript({
      tsconfigOverride: {
        exclude: ['__tests__']
      }
    }),
    filesize()
  ]
}
