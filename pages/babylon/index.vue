<template>
    <div style="width: 50vw; height: 50vh">
        <canvas id="renderCanvas" touch-action="none" style="width: 100%; height: 100%"></canvas>
    </div>
</template>

<script lang="ts" setup>
import { ArcRotateCamera, Engine, HemisphericLight, MeshBuilder, PointLight, Scene, Vector3 } from "@babylonjs/core";

import { onMounted, ref } from "vue";

const engine = ref();
const scene = ref();

onMounted(() => {
    const canvas: any = document.getElementById("renderCanvas");
    if (canvas) {
        // 初始化 babylon 3D engine
        engine.value = new Engine(canvas, true);
        const createScene = () => {
            // 初始化一个场景
            const scene = new Scene(engine.value);
            // 添加一个相机
            const camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new Vector3(0, 0, 5), scene);
            // 将相机连接至画布（绑定鼠标事件-视角旋转）
            camera.attachControl(canvas, true);
            // 添加2个灯光
            const light1 = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
            const light2 = new PointLight("light2", new Vector3(0, 1, -1), scene);
            // 添加一个球体到场景中
            const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);

            return scene;
        };

        scene.value = createScene();

        // 60fps 不间断渲染
        engine.value.runRenderLoop(() => {
            scene.value.render();
        });

        // 自适应浏览器窗口
        window.addEventListener("resize", () => {
            engine.value.resize();
        });
    }
});
</script>

<style></style>
