<script setup lang="ts">

	import Increment from './Increment.vue'
	import DayModel from '../../models/DayModel'

	// TODO: architecture?? MVVM?
	export interface Props {
		dayModel: DayModel
		timeRangeLength: number
	}

	const props = defineProps<Props>()

	// TODO: handle relative index reactive click from Increment component
	// and bubble up to Calendar component as a unified (i.e., selected) range

</script>

<template>
    <div class="day">
    	<h3>{{ dayModel.name }}</h3>
		<Increment v-for="(n, i) in timeRangeLength" :index="i"/>
	</div>
</template>

<style scoped lang="scss">

	.day {
		display: grid;
		row-gap: 5px;
	}

	h3 {
		text-align: center;
		height: 40px;
		margin: 0;
	}

</style>
