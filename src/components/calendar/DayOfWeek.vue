<script setup lang="ts">

	import { reactive } from "vue"


	// Ref amount of days
	const days = ["Su", "M", "Tu", "W", "Th", "F", "Sa"]
	let selectedDays: Map<String, boolean> = reactive(new Map())

	function toggle(index: String) {
		const selected = selectedDays.get(index)
		selectedDays.set(index, !selected)
	}


</script>

<template>

	<div id="container">
		<h2><i>Days of week</i></h2>
		<div id="days">
			<div class="day"
			     v-for="(day) in days"
			     @mousedown="toggle(day)"
			     :key="day"
			     :class="{ selected: selectedDays.get(day) }">
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
		font-family: sans-serif; // TODO: move to main styling
	}

	h2 {
		color: white;
		margin: 0;
		text-align: center;
	}

	#container {
		background-color: #2e2e2e;
		padding: 20px;
		border-radius: 10px;
		margin: 0 auto;
		height: 160px;
		width: 410px;
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

		p {
			margin-top: 2px;
		}

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

		box-shadow: 0 0 0 0;
		transform: translateY(2px) translateX(2px);
	}
</style>
