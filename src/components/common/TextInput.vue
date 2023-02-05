<script setup lang="ts">
	import { ref } from 'vue'

	export interface Props {
		name: string,
		withButton?: boolean
	}

	// Initialize props
	const props = withDefaults(defineProps<Props>(), {
		withButton: false
	})
	var inFocus = ref(false);

	function toggleFocus(focus: boolean) {
		inFocus.value = focus;
	}

</script>

<template>
	<div id="textinput-container">
		<div id="textinput-header" :class="{ focused: inFocus }">
			<h3>Create</h3>
		</div>
		<div id="text-container" :class="{ focused: inFocus }">
			<label :for="props.name">{{ props.name }}</label>
			<input
				type="text"
				:name="props.name"
				:placeholder="props.name"
				@focusin="toggleFocus(true)"
				@focusout="toggleFocus(false)"
			/>
			<button v-show="withButton" @click="$emit('on-click')" >
				<font-awesome-icon icon="fa-solid fa-arrow-right" />
			</button>
		</div>
	</div>
</template>

<style scoped lang="scss">

	$headerHeight: 2rem;

	#textinput-container {
		width: 410px;
		// border: 3px solid blue;
		margin: auto;
		// Preserve optical spacing
		margin-top: ($headerHeight / 2);

		h3 {
			font-size: 1rem;
			margin: 0;
			text-align: center;
			color: white;
		}
	}

	#textinput-header, #text-container {
		// We want these two elements to transition together
		// when the user focuses.
		transition: all 0.1s;
	}

	#textinput-header {
		// TODO: Percentages aren't reading parent container width
		$width: 200px;
		position: absolute;
		left: 50%;
		width: $width;
		margin-left: -($width / 2);
		// Half over the top border
		height: $headerHeight;
		margin-top: -($headerHeight / 2);
		border-radius: 50px; // todo: why 50?
		background-color: black;
		// h/v centering text within our height
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		z-index: 2;
	}

	#text-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		// Needed as size calc changes when button is hidden vs. shown
		min-height: 3.5rem;
		border-radius: 50px;
		border: 2px solid $secondary;
		box-shadow: 3px 3px 0 0px $secondary;
		padding: 5px 20px;
		z-index: 1;

		button {
			border: 2px solid white;
		}
	}

	.focused {
		box-shadow: none !important;
 		transform: translateY(2px) translateX(2px);
	}

	input {
		height: 100%;
		width: 100%;
		margin-right: 20px;
		border: 0px solid #333;
		outline: 0px solid;
		font-size: 20px;
	}

	button {
		flex-shrink: 0;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background-color: #fc7753;
		display: grid;
		place-items: center;
	}

	label {
		display: none;
	}

</style>
