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
	const emit = defineEmits(['intersects'])

	let dragging: boolean = false

	// Using for O(1) even tho vals are not semantically important
	// (i.e., .exists() would work just as fine)
	let intersections = reactive(new Map())

	function mousedown(event: Event) {
		dragging = true
		// Skip default behavior to prevent edit cursor in Safari
		// src: https://stackoverflow.com/a/9743380/1431900
		event.preventDefault()
	}

	function mouseup(event: Event) {
		dragging = false
	}

	function mouseleave(event: Event) {
		dragging = false
	}


	// MARK: Intersection & child events
	// These are mouse events we explicitly listen to the child for
	// to avoid intersection calculations

	function childMouseenter(index: number) {
		if (!dragging) { return }
		// Toggle
		const selected = intersections.get(index)
		intersections.set(index, !selected)
	}

	function childMousedown(index: number) {
		intersections.set(index, !intersections.get(index))
	}

</script>

<template>

    <div
		class="day"
		@mousedown="mousedown"
		@mouseup="mouseup"
		@mouseleave="mouseleave"
	>
    	<h3>{{ dayModel.name }}</h3>
		<Increment
			v-for="(n, i) in timeRangeLength"
			:index="i"
			@child-mouseenter="childMouseenter"
			@child-mousedown="childMousedown"
			:class="{ selectedElement: intersections.get(i) }"
		/>
	</div>
</template>

<style scoped lang="scss">

	.day {
		display: grid;
		row-gap: 5px;
		user-select: none;
	}

	// The selected "day" element
	.selectedElement {
		transition: 0.05s background-color;
		background-color: #FC7753 !important;
		color: black;
	}

	h3 {
		text-align: center;
		height: 40px;
		margin: 0;
	}

</style>
