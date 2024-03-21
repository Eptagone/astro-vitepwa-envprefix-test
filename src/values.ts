/**
 * Name: values.ts
 */

export const ASTRO_TEST_IMPORT = import.meta.env.PUBLIC_TEST || 'Fail!';
export const VITE_TEST_IMPORT = import.meta.env.VITE_TEST || 'Fail!';

export const SERVICE_WORKER_PATH = import.meta.env.PROD ? "/service-worker.js" : "/dev-sw.js?dev-sw";
