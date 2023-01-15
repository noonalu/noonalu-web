<script setup lang="ts">
addEventListener("mousemove", (event) => {});
let rotation = 0;

import { ref } from "vue";
const count = ref(rotation);
function increment(e) {
	console.log(e);
	count.value = e;
}
onmousemove = (event) => {
	increment(event.clientX)
	console.log(event.clientX, event.clientY);
};
</script>

<template>
	<img style="transform: rotate(90deg)" src="../assets/smile.png" />
	<button @click="increment">Count is: {{ count }}</button>
</template>

<style scoped lang="scss"></style>
