<script setup lang="ts">
addEventListener("mousemove", (event) => {});

import { ref, reactive } from "vue";
const rotation = ref(0);
function increment(e) {
	console.log(e);
	rotation.value = e;
}

onmousemove = (event) => {
	let eyes = document.getElementById("Eyes");
	let eyepos = eyes.getBoundingClientRect();
	let eyeY = eyepos.bottom + eyepos.top / 2;
	let eyeX = eyepos.right + eyepos.left / 2;

	let ydiff = eyeY - event.clientY;
	let xdiff = eyeX - event.clientX;

	let angle = Math.tan(ydiff / xdiff);

	increment(angle);
};
</script>

<template>
	<img
		id="Eyes"
		:style="{
			width:'100px',
			transform: 'rotate(' + rotation + 'rad)',
		}"
		src="../assets/smile.png"
	/>
	<button @click="increment">Count is: {{ rotation }}</button>
</template>

<style scoped lang="scss"></style>
