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
    #googlyLogoContainer {
        width: 100%;
        height: 100%;
        max-width: inherit;
        position: relative;
    }
    #googlyEyesContainer {
        margin-top: -5.61rem;
        margin-left: 14.22rem;
        width: 9.5rem;
        z-index: 10;
        padding: 5px;
        position: absolute;
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