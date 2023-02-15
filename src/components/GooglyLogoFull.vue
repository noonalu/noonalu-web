<script setup lang="ts">
import Eyes from './Eyes.vue';
</script>
<template>
    <div id="googlyLogoContainer">
        <img id="logo" src="../assets/logo-full-2.svg"/>
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
        position: relative;
        width: '100%';
        max-width: inherit;
    }
    #googlyEyesContainer {
        left: 30%;
        width: 20%;
        z-index: 10;
        background-color: white;
    } 
    #googlyEyes {
        aspect-ratio: 100/46.5;
    }
    #logo {
        left: 0;
        top: 0;
    }
    #logo {
        z-index: 10;
    }
</style>