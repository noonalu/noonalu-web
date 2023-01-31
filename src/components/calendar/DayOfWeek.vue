<script setup lang="ts">

	import { reactive } from "vue"

	export interface Props {

	}

	// Initialize props
	const props = defineProps<Props>()


	// Ref amount of days
	const days = ["Su", "M", "Tu", "W", "Th", "F", "Sa"]
	let selectedDays: Map<String, boolean> = reactive(new Map())

	function toggle(index: number) {
		const selected = selectedDays.get(index)
		selectedDays.set(index, !selected)
	}


</script>

<template>

	<div id="container">
		<h2>Days of week</h2>
		<div id="days">
			<div class="day"
			     v-for="(i, day) in days"
			     @mousedown="toggle(i)"
			     :key="day"
			     :class="{ selected: selectedDays.get(i) }">
			 	<p>
		 			{{ day }}
		 		</p>
		 </div>
		</div>
	</div>

</template>

<style scoped lang="scss">

	p {
		margin: 0;
		font-size: 1rem;
	}

	#container {
		background-color: #2e2e2e;
		padding: 30px;
		border-radius: 7px;
		margin: 0 auto;
		height: 160px;
		width: 400px;
	}

	h2 {
		color: white;
	}

	#days {
		display: flex;
		justify-content: space-around;
	}

	.day {
		background-color: white;
		padding: 10px;
		width: 40px;
		height: 40px;
		text-align: center;
		border-radius: 7px;
		border: 2px solid gray;
		border-bottom: 4px solid gray;
		border-right: 3px solid gray;

		transition: all 0.05s;
		user-select: none;

		&:hover:not(:active) {
			background-color: lighten(#FC7753, 10%);
		}
	}

	.selected {
		background-color: #FC7753;
		color: white;
		border-bottom: 2px solid gray;
		border-right: 2px solid gray;

		transform: translateY(1px) translateX(1px);
	}

</style>
