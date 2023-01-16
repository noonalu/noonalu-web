<script setup lang="ts">
addEventListener("mousemove", (event) => {});

import { ref, reactive } from "vue";
const leftRot = ref(0);
const rightRot = ref(0);

function updateLeft(e) {
	leftRot.value = e;
}

function updateRight(e) {
	rightRot.value = e;
}

/**
 * Returns the angle between the eyes and the selected eye and the given mouse positions
 */
function eyeMouseAngle(eyeID, mouseX, mouseY) {
	let eyepos = document.getElementById(eyeID).getBoundingClientRect();

	let xdiff = (eyepos.left + eyepos.right) / 2 - mouseX;
	let ydiff = (eyepos.top + eyepos.bottom) / 2 - mouseY;
	// atan only handles angles up to 180, so need to add 180 if the mouse goes above the eyes
	let t = Math.PI;
	if (ydiff < 0) {
		t = 0;
	}

	let angle = t - Math.atan(xdiff / ydiff);

	return angle;
}
onmousemove = (event) => {
	let langle = eyeMouseAngle("Left", event.clientX, event.clientY);
	let rangle = eyeMouseAngle("Right", event.clientX, event.clientY);
	updateLeft(langle);
	updateRight(rangle);
};
</script>

<template>
	<img
		id="Left"
		:style="{
			width: '200px',
			transform: 'rotate(' + leftRot + 'rad)',
		}"
		src="../assets/eye.svg"
	/>
	<img
		id="Right"
		:style="{
			width: '200px',
			transform: 'rotate(' + rightRot + 'rad)',
		}"
		src="../assets/eye.svg"
	/>
</template>

<style scoped lang="scss"></style>
