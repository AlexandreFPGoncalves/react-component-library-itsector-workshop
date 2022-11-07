import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export default [
	{
		input: './src/index.js',
		//exports as commonJS and ESModules
		//Each item of the following array will be a different configuration for each type of output
		output: [
			//commonJS Configuration
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			//ES6 Configuration
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			postcss({
				plugins: [],
				minimize: true,
			}),
			typescript({ tsconfig: './tsconfig.json' }),
			babel({
				exclude: 'node_modules/**',
				presets: ['@babel/preset-react', '@babel/preset-typescript'],
			}),
			external(),
			resolve({
				extensions: ['.js', '.jsx', '.jsox', '.ts', '.tsx', '.d.ts'],
			}),
			commonjs(),
			terser(),
		],
	},
	{
		input: 'dist/esm/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
	},
];
