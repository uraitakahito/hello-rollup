// A Rollup plugin to convert CommonJS modules to ES6
import commonjs from 'rollup-plugin-commonjs';
// The @rollup/plugin-node-resolve plugin teaches Rollup how to find external modules.
import resolve from '@rollup/plugin-node-resolve';
// https://rollupjs.org/command-line-interface/#config-intellisense
import { defineConfig } from 'rollup';
// To generate a minified bundle with terser
import terser from '@rollup/plugin-terser';

const config = defineConfig(
  [
    {
      input: 'src/main-a.js', // conditionally required

      output: [
        {
          file: 'dist/iife/bundle.min.js',
          format: 'iife',
          plugins: [terser()],
        },
        {
          dir: 'dist/es6',
          format: 'es',
        },
        {
          dir: 'dist/umd',
          format: 'umd',
          name: 'MyModule',
        },
      ],
      plugins: [
        commonjs(),
        resolve(),
      ],
    },

    // In the case of Vite, it seems difficult to disable code splitting for multiple files.
    // https://github.com/uraitakahito/hello-javascript-vite/blob/954cc418e1d7549b78bfd7d1e0f6556ccd4affd4/vite.config.mjs#L16-L25
    //
    // Issues:
    // https://github.com/rollup/rollup/issues/2756
    {
      input: 'src/import-check/import-check-1-0.js',

      output: [
        {
          dir: 'dist/es6',
          format: 'es',
        },
        {
          dir: 'dist/umd',
          format: 'umd',
          name: 'MyModule',
        },
      ],
      plugins: [
        commonjs(),
        resolve(),
      ],
    },
    {
      input: 'src/import-check/import-check-1-1.js',

      output: [
        {
          dir: 'dist/es6',
          format: 'es',
        },
        {
          dir: 'dist/umd',
          format: 'umd',
          name: 'MyModule',
        },
      ],
      plugins: [
        commonjs(),
        resolve(),
      ],
    },

    {
      input: 'src/import-check/import-check-2.js',

      output: [
        {
          dir: 'dist/es6',
          format: 'es',
        },
        {
          dir: 'dist/umd',
          format: 'umd',
          name: 'MyModule',
        },
      ],
      plugins: [
        commonjs(),
        resolve(),
      ],
    },
    {
      input: 'src/main-b.js', // conditionally required

      output: [
        {
          dir: 'dist/es6',
          format: 'es',
        },
      ],
    },
  ],
);

export default config;
