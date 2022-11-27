<script setup lang="ts">
	const props = defineProps({
		selected: Boolean,
		// TODO: Track which time was set
		// time: String
	})
</script>

<template>
	<div class="increment"></div>
</template>

<style scoped lang="scss">

	.increment {
		border-radius: 8px;
		// background-color: rgba(blue, 0.5);
		background-color: white;
		height: 40px;
		transition: 0.02s background-color;

		&:hover {
			background-color: #FC7753;
		}
	}

</style>
