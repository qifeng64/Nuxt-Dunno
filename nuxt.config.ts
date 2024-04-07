// https://nuxt.com/docs/api/configuration/nuxt-config

import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [resolve("./assets/css/index.less")],
    modules: ["@element-plus/nuxt"],
});
