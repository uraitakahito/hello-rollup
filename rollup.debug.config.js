// can be an array (for multiple inputs)
export default [
  {
    input: 'src/main-b.js', // conditionally required

    // required (can be an array, for multiple outputs)
    output: [
      {
        dir: 'dist/es6',
        format: 'es',
      },
    ],
  },
];
