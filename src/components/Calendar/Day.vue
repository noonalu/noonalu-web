<script setup lang="ts">
	import Increment from './Increment.vue';

	const props = defineProps({
		name: String
	})

	var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5]

</script>

<template>
    <div class="day">
    	<h3>{{ name }}</h3>
		<Increment v-for="n in 10"/>
	</div>
</template>

<style scoped lang="scss">

	.day {
		display: grid;
		row-gap: 5px;
		// TODO: Might want to map days dynamically here...
		// and remove `height: 40px` on `.increment`
		// grid-template-rows: repeat()
	}

	h3 {
		text-align: center;
		height: 40px;
		margin: 0;
	}

</style>
