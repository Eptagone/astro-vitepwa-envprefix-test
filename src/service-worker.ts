/**
 * Name: service-worker.ts
 * Description: Custom Service Worker
 */

/// <reference lib="webworker" />

import { ASTRO_TEST_IMPORT, VITE_TEST_IMPORT } from "./values";

export type { };
declare let self: ServiceWorkerGlobalScope;

function printEnv() {
    console.log(`Service Worker: VITE_TEST: ${VITE_TEST_IMPORT}, ASTRO_TEST: ${ASTRO_TEST_IMPORT}`);
    console.log(`Service Worker have the '${import.meta.env.MODE}' version. If the mode is not the expected one, update/remove the old service worker using the inspector and reload the page.`);
}

onmessage = () => printEnv();
self.addEventListener('push', () => printEnv());
