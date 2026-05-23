<template>
    <div>
        <canvas ref="canvasRef" />
        <button @click="triggerSmall">Small reward (25)</button>
        <button @click="triggerLarge">Large reward (500)</button>
        <button @click="triggerMissReward">Miss reward (200)</button>
        <button @click="triggerBossCatch">
            Boss Catch Reward
        </button>
    </div>
</template>

<script setup lang="ts">
import * as PIXI from "pixi.js";
import { onMounted, onUnmounted, ref } from "vue";
import { showBigRewardEffect } from "~/composables/game_core/reward/big-reward";
import { showBossCatchEffect } from "~/composables/game_core/reward/boss-kill-reward";
import { showFishMissRewardEffect } from "~/composables/game_core/reward/miss-reward";
import { showRewardEffect } from "~/composables/game_core/reward/normal";

const canvasRef = ref<HTMLCanvasElement>();
let app: PIXI.Application;
let layer: PIXI.Container;

onMounted(async () => {
    app = new PIXI.Application({
        view: canvasRef.value,
        width: 800,
        height: 600,
        backgroundColor: 0x1a1a2e,
    });

    layer = new PIXI.Container();
    app.stage.addChild(layer);

    // await preloadRewardAssets();
});

onUnmounted(() => {
    app?.destroy(false, { children: true });
});

function triggerSmall() {
    showRewardEffect({ layer, x: 400, y: 300, amount: 25, boxTarget: { x: 720, y: 40 } });
}

const fishX = 200;
const fishY = 400;

function triggerMissReward() {
    showFishMissRewardEffect({
        layer,
        x: fishX,        // fish position on screen
        y: fishY,
        rewardX: 400,    // center of screen, or wherever looks good
        rewardY: 250,
        amount: 500,
        fishName: "Pufferfish",
        fishId: 19,
    });
}

function triggerLarge() {
    showBigRewardEffect({
        layer,
        x: 400,
        y: 300,
        amount: 50,
        boxTarget: { x: 720, y: 40 },
    });
}


function triggerBossCatch() {
    showBossCatchEffect({
        layer,
        x: 400,
        y: 300,
        fishId: 20,
        winOdd: 705,       // ← swap field name to match yours
        maxKillOdd: 1000,   // ← swap field name to match yours
        lang: "en",
        onComplete: () => { },
    });
}
</script>