import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2'; // Vue 2 için plugin
import { resolve } from 'path'; // Path modülünü içe aktar

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'), // src klasörünü alias olarak tanımlama
        }
    }
});
