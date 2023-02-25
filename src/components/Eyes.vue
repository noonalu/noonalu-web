<script setup lang="ts">
import { ref, reactive } from "vue";

const EYE_DEFAULT_RAD = 0.4

const leftRotation = ref(-EYE_DEFAULT_RAD);
const rightRotation = ref(EYE_DEFAULT_RAD);

function updateLeft(e: number) {
	leftRotation.value = e;
}

function updateRight(e: number) {
	rightRotation.value = e;
}

/**
 * Returns the angle between the center of a given element with id eyeID, and the selected eye and the given mouse positions
 */
function eyeMouseAngle(eyeID: string, mouseX: number, mouseY: number) {
	if(document.getElementById(eyeID) === null) {
		return 0;
	} 

	const eyepos = document.getElementById(eyeID)!.getBoundingClientRect()
	

	const xdiff = (eyepos.left + eyepos.right) / 2 - mouseX;
	const ydiff = (eyepos.top + eyepos.bottom) / 2 - mouseY;

	// atan only handles angles up to 180, so need to add 180 if the mouse goes above the eyes
	const atanOffset = ydiff < 0 ? 0 : Math.PI;

	let angle = atanOffset - Math.atan(xdiff / ydiff);

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
			src="../assets/o.svg"/>
			<img
				id="left"
				class="eyePupil"
				:style="{
					transform: 'rotate(' + leftRotation + 'rad)',
				}"
				src="../assets/eye.svg"
			/>
		</div>
		<div id="rightEye" class="wholeEye">
			<img class="eyeCircle"
				src="../assets/o.svg"
			/>
			<img
				class="eyePupil"
				id="right"
				:style="{
					transform: 'rotate(' + rightRotation + 'rad)',
				}"
				src="../assets/eye.svg"
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
		width: 46%;
		height: 100%;
		right: 0;
	}

	#logoContainer {
		max-width: inherit;
		width: inherit;
	}

	.wholeEye {
		position: absolute;
		width: 46%;
		height: 100%;
	}

	.eyePupil {
		position: absolute;
		width: 65%;
		top: 17.85%;
		left: 17.49%;
	}

	.eyeCircle{
		position: absolute;
		width: 100%;
		left:0;
	}
 </style>
