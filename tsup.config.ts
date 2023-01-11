import { defineConfig } from 'tsup';
import pkg from './package.json';

const N = '\n';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  target: 'es2015',
  dts: true,
  clean: true,
  splitting: false,
  minify: true,
  banner: {
    js: `/* ${N}* ${pkg.name} ${
      N}* @Version: ${pkg.version}${
      N}* @Description: ${pkg.description}${
      N}* @Date: Build time ${new Date().toLocaleString('chinese', { hour12: false })}${N}*/`
  }
});
