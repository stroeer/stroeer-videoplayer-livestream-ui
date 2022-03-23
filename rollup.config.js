import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import svg from 'rollup-plugin-svg'
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [{
  input: 'src/UI.ts',
  output: {
    file: 'dist/StroeerVideoplayer-livestream-ui.umd.js',
    exports: 'default',
    format: 'umd',
    name: 'StroeerVideoplayerLivestreamUI',
    sourcemap: true
  },
  plugins: [
    typescript(),
    json(),
    svg()
  ]
},
{
  input: 'src/UI.ts',
  output: [
    {
      file: pkg.main,
      exports: 'default',
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    json(),
    svg()
  ]
},
{
  input: 'src/UI.ts',
  output: [
    {
      file: pkg.module,
      exports: 'default',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    json(),
    svg()
  ]
}]
