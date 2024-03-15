import { loadOml2d } from "oh-my-live2d";

// .client后缀，仅在客户端触发，处于 plugins/ 目录下插件会自动注册
export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        loadOml2d({
            models: [
                {
                    path: "https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json",
                },
            ],
        });
    }
});
