

<script setup lang="ts">

	import { ref } from 'vue'

	export interface Props {
		index: number // index that was selected
	}
	const selected = ref(false)

	function toggleSelected() {
		selected.value = !selected.value
	}

</script>

<template>
	<div class="increment" @click="toggleSelected" :class="selected && 'active'"></div>
</template>

<style scoped lang="scss">

	.increment {
		border-radius: 8px;
		background-color: white;
		height: 40px;
		transition: 0.02s background-color;

		&:hover {
			background-color: #FC7753;
		}

	}

	.active {
		background-color: rgba(blue, 0.5);
	}

</style>
