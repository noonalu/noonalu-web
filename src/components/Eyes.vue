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
 * Returns the angle between the center of a given element with id eyeID, and the selected eye and the given mouse positions
 */
function eyeMouseAngle(eyeID: string, mouseX: number, mouseY: number) {
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
	let rangle = eyeMouseAngle("Right", event.clientX, event.clientY)-15*0.01745329;
	updateLeft(langle);
	updateRight(rangle);
};
</script>

<template>
	<div :style="{ position: 'relative' }">
		<div :style="{position:'absolute'}">
				<img
					:style="{
						position: 'absolute',
					}"
					src="../assets/o.svg"
				/>

				<img
					id="Left"
					:style="{
						position: 'absolute',
						left: '5px',
						top: '6px',
						width:'23px',
						transform: 'rotate(' + leftRot+ 'rad)',
					}"
					src="../assets/eye.svg"
				/>
		</div>
		<div :style="{ width: '35px', height: '50px' }">
			<div :style="{ position: 'absolute' }">
				<img
					:style="{
						position: 'absolute',
						left: '35px',
					}"
					src="../assets/o.svg"
				/>
				<img
					id="Right"
					:style="{
						position: 'absolute',
						left: '39.5px',
						top: '6px',
						width:'23px',
						transform: 'rotate(' + rightRot + 'rad)',
					}"
					src="../assets/eye.svg"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
</style>
