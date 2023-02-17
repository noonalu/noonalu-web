<script setup lang="ts">
import Eyes from './Eyes.vue';
</script>
<template>
    <div id="googlyLogoContainer">
        <img id="logo" src="../assets/logo-horizontal.svg">
        <div id="googlyEyesContainer">
            <Eyes id="googlyEyes"/>
        </div>
    </div>
</template>


<style scoped lang="scss">
    #googlyEyesContainer {
        position: absolute;
    }
    #googlyLogoContainer {
        width: 100%;
        height: 100%;
        max-width: inherit;
        position: relative;
    }
    #googlyEyesContainer {
        margin-top: -5.29rem;
        margin-left: 14.56rem;
        width: 8.83rem;
        z-index: 10;
        justify-items: center;
        background-color: white;
    } 
    #googlyEyes {
        aspect-ratio: 100/47.5;
    }
    #logo {
        height: inherit;
    }
    #logo {
        z-index: 10;
    }
</style>