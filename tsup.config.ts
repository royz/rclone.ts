import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  clean: true,
  entry: ['src/**/*.{ts,tsx}'],
  format: ['esm', 'cjs'],
  bundle: true,
  tsconfig: 'tsconfig.json'
});
