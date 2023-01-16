<script setup lang="ts">
addEventListener("mousemove", (event) => {});

import { ref, reactive } from "vue";
const rotation = ref(0);

function increment(e) {
	rotation.value = e;
}

onmousemove = (event) => {
	let eyes = document.getElementById("Eyes");
	let eyepos = eyes.getBoundingClientRect();
	let eyeY = eyepos.y;
	let eyeX = eyepos.x;
	let ydiff = eyeY - event.clientY;
	let xdiff = eyeX - event.clientX;
	let t = 180;
	if (ydiff < 0) {
		t = 0;
	}
	let rad = Math.atan(xdiff / ydiff);

	let angle = rad / (Math.PI / 180);
	angle = t - angle;
	console.log(ydiff, xdiff, angle);
	increment(angle);
};
</script>

<template>
	<img
		id="Eyes"
		:style="{
			width: '200px',
			transform: 'rotate(' + rotation + 'deg)',
		}"
		src="../assets/logo-full.svg"
	/>
	<img
		id="Eyes"
		:style="{
			width: '200px',
			transform: 'rotate(' + rotation + 'deg)',
		}"
		src="../assets/logo-full.svg"
	/>
</template>

<style scoped lang="scss"></style>
