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
	let langle = eyeMouseAngle("left", event.clientX, event.clientY);
	let rangle = eyeMouseAngle("right", event.clientX, event.clientY);
	updateLeft(langle);
	updateRight(rangle);
};
</script>

<template>
	<div id="logoContainer" :style="{ position: 'relative' }">
		<div id="leftEye" class="wholeEye">
			<img class="eyeCircle"
			src="../assets/o1.svg"/>
			<img
				id="left"
				class="eyePupil"
				:style="{
					transform: 'rotate(' + leftRot + 'rad)',
				}"
				src="../assets/eye1.svg"
			/>
		</div>
		<div id="rightEye" class="wholeEye">
			<img class="eyeCircle"
				src="../assets/o1.svg"
			/>
			<img
				class="eyePupil"
				id="right"
				:style="{
					transform: 'rotate(' + rightRot + 'rad)',
				}"
				src="../assets/eye1.svg"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
	#leftEye {
		left: 0;
	}

	#rightEye {
		position: absolute;
		width: 45%;
		height: 100%;
		right: 0;
	}

	#logoContainer {
		max-width: inherit;
		width: inherit;
	}

	.wholeEye {
		position: absolute;
		width: 45%;
		height: 100%;
	}

	.eyePupil {
		position: absolute;
		width: 70%;
		top: 16.13%;
		left: 15%;
	}

	.eyeCircle{
		position: absolute;
		width: 100%;
		left:0;
	}
 </style>
