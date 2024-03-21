import { defineConfig } from 'astro/config';
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
    integrations: [AstroPWA({
        srcDir: "src",
        filename: "service-worker.ts",
        strategies: "injectManifest",
        injectRegister: false,
        injectManifest: {
            // @ts-expect-error This is a valid configuration according to the VitePWA documentation. See https://vite-pwa-org.netlify.app/guide/service-worker-without-pwa-capabilities.html#plugin-configuration
            injectionPoint: null,
        },
        manifest: false,
        devOptions: {
            enabled: true,
            type: "module",
        },
    })],
    vite: {
        // I tried this but it didn't work
        // envPrefix: "ASTRO_",
    }
});
