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
	$headerWidth: 200px;

	#textinput-container {
		width: 410px;
		margin: auto;
		// Preserve optical spacing
		margin-top: calc($headerHeight / 2);

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
		@include container-header($headerWidth, $headerHeight);
	}

	#text-container {
		@include container-header-body;
		@include container-style;
		@include hard-shadow;
		display: flex;
		align-items: center;
		justify-content: space-between;
		// Needed as size calc changes when button is hidden vs. shown
		min-height: 3.5rem;
		border-radius: 50px;
		padding: 5px 20px;

		button {
			border: 2px solid white;
		}
	}

	.focused {
		box-shadow: none !important;
		transform: translateY(2px) translateX(2px);
	}

	input {
		font-size: 1rem;
		width: 100%;
		margin-right: 20px; // Space for button
		border: none;
		outline: none;
	}

	button {
		flex-shrink: 0;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background-color: $primary;
		display: grid;
		place-items: center;
	}

	label {
		display: none;
	}

</style>
