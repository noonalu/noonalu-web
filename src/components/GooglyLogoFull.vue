<script setup lang="ts">
import Eyes from './Eyes.vue';
</script>
<template>
    <div id="googlyLogoContainer">
        <img id="logo" src="../assets/logo-horizontal.svg">
        <Eyes id="googlyEyes"/>
    </div>
</template>


<style scoped lang="scss">
    #googlyLogoContainer {
        width: 100%;
        height: 100%;
        max-width: inherit;
        position: relative;
    }
    #googlyEyes {
        aspect-ratio: 100/47.5;
        margin-top: -13.5%;
        margin-left: 37.04%;
        width: 22.7%;
        background-color: white;
        position: absolute;
    }
    #logo {
        height: inherit;
    }
</style>