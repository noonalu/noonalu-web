<script setup lang="ts">
addEventListener("mousemove", (event) => {});

import { ref } from "vue";
const rotation = ref(0);
function increment(e) {
	rotation.value = e;
}

onmousemove = (event) => {
	let eyes = document.getElementById("Eyes");
	let eyepos = eyes.getBoundingClientRect();
	let eyeX = eyepos.bottom + eyepos.top / 2;
	let eyeY = eyepos.right + eyepos.left / 2;

	let ydiff = eyeY - event.clientY;
	let xdiff = eyeX - event.clientX;

	let rads = Math.tan(ydiff / xdiff);
	let angle = rads / (Math.PI / 180);

	console.log(angle);

	increment(angle);
};
</script>

<template>
	<img id="Eyes" style="transform: rotate(90deg)" src="../assets/smile.png" />
	<button @click="increment">Count is: {{ rotation }}</button>
</template>

<style scoped lang="scss"></style>
