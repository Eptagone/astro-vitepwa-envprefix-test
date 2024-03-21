/// <reference types="astro/client" />

// Extends Intellisense for Astro environment variables
interface ImportMetaEnv {
    readonly PUBLIC_TEST: string;
    readonly VITE_TEST: string;
}

// Extends Intellisense for ImportMeta
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
