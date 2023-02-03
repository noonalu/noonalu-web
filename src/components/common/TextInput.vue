<script setup lang="ts">
	import { ref } from 'vue'

	export interface Props {
		name: string
	}

	// Initialize props
	const props = defineProps<Props>()
	var inFocus = ref(false);

	function toggleFocus(focus: boolean) {
		inFocus.value = focus;
	}

</script>

<template>
	<div>
		<div id="container" :class="{ focused: inFocus }" >
			<label :for="props.name">{{ props.name }}</label>
			<input
				type="text"
				:name="props.name"
				:placeholder="props.name"
				@focusin="toggleFocus(true)"
				@focusout="toggleFocus(false)"
			/>
			<button @click="$emit('on-click')" >
				<font-awesome-icon icon="fa-solid fa-arrow-right" />
			</button>
		</div>
	</div>
</template>

<style scoped lang="scss">

	div {
		width: 400px;
	}

	#container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		// width: 400px;
		border-radius: 50px;
		border: 2px solid #7d7d7d;
		box-shadow: 3px 3px 0 0px #7d7d7d;
		padding: 5px 10px;
		transition: all 0.1s;

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
		font-style: italic;
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
