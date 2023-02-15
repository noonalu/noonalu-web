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
	let dragging = false

	// Key is index of the Increment that is selected (relative to each day col)
	// Value is true/false if selected
	// Map with boolean vals is used for O(1) (.exists() is semantically equivalent)
	let intersections: Map<number, boolean> = reactive(new Map())
	for (var i = 0; i < props.timeRangeLength; i++) {
		intersections.set(i, false)
	}

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
    	<div class="incrementContainer">
			<Increment
				v-for="i in timeRangeLength"
				:index="i"
				:key="i"
				@child-mouseenter="childMouseenter"
				@child-mousedown="childMousedown"
				class="increment"
				:class="{ selectedElement: intersections.get(i) }"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">

	.day {
		user-select: none;

		h3 {
			font-size: 1.4rem;
			text-align: center;
			height: 40px;
			margin: 0;
			padding-top: 5px; // Bump a bit closer
			font-weight: normal;
			background-color: white;
		}
	}

	.incrementContainer {
		display: grid;
		row-gap: 5px;
		background-color: rgba(black, 0.2);
	}

	// The selected "day" element
	.selectedElement {
		transition: 0.05s background-color;
		background-color: $primary !important;
		color: black;
	}


</style>
