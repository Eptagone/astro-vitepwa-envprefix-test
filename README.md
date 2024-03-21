# Minimal reproduction repo to test envPrefix when using Astro + VitePWA

The file `.env` defines the environment variables `PUBLIC_TEST` and `VITE_TEST`.
They are read in the `src/values.ts` file which is also used in the `src/pages/index.astro` and `src/service-worker.ts` files.

First, install the dependencies with `npm install`.

If you run the project in **development mode** with `npm run dev` and open the browser console, you will see that the `PUBLIC_TEST` variable is correctly read in both the `index.astro` and `service-worker.ts` files but the `VITE_TEST` variable is not. That's correct because Astro uses `PUBLIC_` as `envPrefix` instead of `VITE_`. The `VITE_TEST` variable is not read in any of the files, as expected.

```log
Common script (Non-SW): VITE_TEST: Fail!, ASTRO_TEST: Works!
Service Worker: VITE_TEST: Fail!, ASTRO_TEST: Works!
```

But if you compile the project with `npm run build` and run it in **production mode** using the preview server with `npm run preview`, the `PUBLIC_TEST` variable is correctly read in the `index.astro` file but not in the `service-worker.js` file which is reading the `VITE_TEST` variable instead. That's incorrect because the `envPrefix` should be `PUBLIC_` in both files because Astro uses `PUBLIC_` as `envPrefix`.

```log
Common script (Non-SW): VITE_TEST: Fail!, ASTRO_TEST: Works!
Service Worker: VITE_TEST: Works!, ASTRO_TEST: Fail!
```

You can also see in the compiled `dist/service-worker.js` file that the `VITE_TEST` variable is being read instead of the `PUBLIC_TEST` variable.

```javascript
const o={VITE_TEST:"Works!",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0}.PUBLIC_TEST||"Fail!",n="Works!";function e(){console.log(`Service Worker: VITE_TEST: ${n}, ASTRO_TEST: ${o}`),console.log("Service Worker have the 'production' version. If the mode is not the expected one, update/remove the old service worker using the inspector and reload the page.")}onmessage=()=>e();self.addEventListener("push",()=>e());

```
