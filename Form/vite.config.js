import { defineConfig } from 'vite';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
    base: (isDev ? '/' : `/house-test-task/Form/`),
    build: {
        outDir: '../dist/Form'
    }
});
