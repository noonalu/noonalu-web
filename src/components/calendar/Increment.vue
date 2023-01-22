

<script setup lang="ts">

	import { ref } from 'vue'

	export interface Props {
		index: number // index that was selected
	}
	const props = defineProps<Props>()


</script>

<template>

	<!-- Events are for parent ("Day") to listen to -->
	<div
		class="increment"
		@mouseenter="$emit('child-mouseenter', index)"
		@mousedown="$emit('child-mousedown', index)"
	></div>
</template>

<style scoped lang="scss">

	.increment {
		border-radius: 8px;
		background-color: white;
		height: 40px;
		transition: 0.02s background-color;
		user-select: none;

		&:hover {
			background-color: lighten(#FC7753, 10%);
		}
	}

</style>
