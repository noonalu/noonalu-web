<script setup lang="ts">

	import Increment from './Increment.vue'
	import DayModel from '../../models/DayModel'
	import { reactive } from 'vue'

	// TODO: architecture?? MVVM?
	export interface Props {
		dayModel: DayModel
		timeRangeLength: number
	}

	const props = defineProps<Props>()

	// TODO: handle relative index reactive click from Increment component
	// and bubble up to Calendar component as a unified (i.e., selected) range

	const emit = defineEmits(['intersects'])

	let dragging: boolean = false

	// Using for O(1) even tho vals are not semantically important
	// (i.e., .exists() would work just as fine)
	let intersections = reactive(new Map())

	function mousedown(event) {
		dragging = true
		console.log("mousedown")
	}

	function mouseup(event) {
		dragging = false
		console.log("mouseup")
	}


	// MARK: Intersection
	// These are mouse events we explicitly listen to the child for
	// to avoid intersection calculations

	function childMouseenter(index) {
		if (!dragging) { return }

		// if already selected, toggle to unselected
		// TODO: boolean zen
		if (intersections.get(index)) {
			intersections.set(index, false)
		} else {
			console.log("set " + index + " to true")
			console.log(intersections)
			intersections.set(index, true)
		}
	}

	function childMousedown(index) {
		console.log("clicked on " + intersections.get(index))
		intersections.set(index, !intersections.get(index))
	}

	function childClick(index) {

	}



</script>

<template>

    <div
		class="day"
		@mousedown="mousedown"
		@mouseup="mouseup"
	>
    	<h3>{{ dayModel.name }}</h3>
		<Increment
			v-for="(n, i) in timeRangeLength"
			:index="i"
			@child-mouseenter="childMouseenter"
			@child-mousedown="childMousedown"
			@child-click="childClick"
			:class="{ selectedElement: intersections.get(i) }"
		/>
	</div>
</template>

<style scoped lang="scss">

	.day {
		display: grid;
		row-gap: 5px;
	}

	// The selected "day" element
	.selectedElement {
		background-color: #FC7753 !important;
		color: black;
	}

	h3 {
		text-align: center;
		height: 40px;
		margin: 0;
	}

</style>
