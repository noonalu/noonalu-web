<script setup lang="ts">

	export interface Props {
		text: string
	}

	// Initialize props
	const props = defineProps<Props>()
</script>

<template>
	<button type="button">
		{{ text }}
	</button>
</template>

<style scoped lang="scss">

	button {
		@include hard-shadow;
		@include container-style;
		background-color: $primary;
		padding: 10px 20px;
		border-radius: 20px;
		color: white;
		font-family: $bodyFont;
		font-weight: bold;
		font-size: 1.0rem;
		cursor: pointer;
		transition: all 0.1s;

		&:hover {
			background-color: lighten($primary, 5%);
		}

		&:active {
			box-shadow: none !important;
			transform: translateY(3px) translateX(3px);
		}
	}

</style>
