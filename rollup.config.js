import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';

export default {
  input: 'tmp.js',
  output: {
    file: 'build/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs(),
    minify({sourceMap: false, comments: false})
  ]
};
