<script setup lang="ts">

	import { reactive } from "vue"


	// Ref amount of days
	const days = ["Su", "M", "Tu", "W", "Th", "F", "Sa"]
	let selectedDays: Map<String, boolean> = reactive(new Map())

	// TODO: would be nice to tweak this to
	// not react on mousedown iff isSelected
	function toggle(index: String) {
		const selected = selectedDays.get(index)
		selectedDays.set(index, !selected)
	}


</script>

<template>

	<div>
		<!-- TODO: Container component -->
		<div id="dayofweek-container">
			<div id="dayofweek-header">
				<h3>Days of the Week</h3>
			</div>
			<div id="day-container">
				<div id="days">
					<button class="day"
					     v-for="(day) in days"
					     @mousedown="toggle(day)"
					     :key="day"
					     :class="{ selected: selectedDays.get(day) }">
					 	<p>
				 			{{ day }}
				 		</p>
				 	</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

	$headerHeight: 2rem;
	$headerWidth: 200px;

	p {
		margin: 0;
		font-size: 1rem;
	}


	#dayofweek-container {
		height: 130px;
		width: 410px;
		margin: auto;
		// Preserve optical spacing
		margin-top: ($headerHeight / 2);
	}

	#dayofweek-header {
		@include container-header($headerWidth, $headerHeight);
	}

	// Main "visible" container to the user
	#day-container {
		width: 100%;
		height: 100%;
		padding: 20px;
		border: 2px solid $secondary;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	#days {
		display: flex;
		justify-content: space-between;
	}

	.day {
		background-color: white;
		padding: 10px;
		width: 45px;
		height: 45px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;

		// Shadows n' borders
		border: 2px solid $secondary;
		box-shadow: 2px 2px 0 0px $secondary;
		transition: all 0.1s;
		user-select: none;
		cursor: pointer;

		&:hover:not(:active) {
			background-color: lighten($primary, 10%);
		}
	}

	.selected {
		background-color: $primary;
		color: white;
		font-weight: bold;
		box-shadow: 0 0 0 0;
		transform: translateY(2px) translateX(2px);
	}
</style>
