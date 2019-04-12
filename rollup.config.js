import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-cpy';

const plugins = env => [
  babel({
    exclude: 'node_modules/**',
    babelrc: false,
    presets: [['@babel/preset-env', env], '@babel/preset-react'],
    plugins: ['@babel/plugin-proposal-export-default-from'],
    comments: false,
  }),
  copy({
    files: ['src/*.d.ts'],
    dest: 'dist',
  }),
  copy({
    files: ['src/*.d.ts'],
    dest: 'es',
  }),
];

const external = [];

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'react-feather',
      file: 'es/index.js',
      format: 'esm',
    },
    external,
    plugins: plugins({ modules: false, targets: { node: '11' } }),
  },
  {
    input: 'src/index.js',
    output: {
      name: 'react-feather',
      file: 'dist/index.js',
      format: 'cjs',
    },
    external,
    plugins: plugins({ modules: false, targets: { node: '10' } }),
  },
];
