import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                marquee: resolve(__dirname, 'src/marquee/index.html'),
                gridcard: resolve(__dirname, 'src/gridcard/index.html'),
            },
        },
    },
});
