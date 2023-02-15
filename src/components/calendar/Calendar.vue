<script setup lang="ts">

	import Day from './Day.vue'
	import DayModel from '../../models/DayModel'
	import { computed } from 'vue'
	import Navbar from "../common/Navbar.vue"
	import Footer from "../common/Footer.vue"

	export interface Props {
		// Non contiguous set of days
		// ("Mon/Tue/Sun", "Tue/Thurs", etc.)
		// For now anything goes
		dayModels: DayModel[]
		// pre: MUST be on an hour boundary (1am, 3pm, etc.)
		startTime: Date
		endTime: Date
	}

	// Initialize props
	const props = defineProps<Props>()

	function isMorning(hour: number): boolean {
		return hour <= 12
	}

	function isAfternoon(hour: number): boolean {
		return !isMorning(hour)
	}

	// TODO: Make computed, didn't do it because <vague compiler complaints>
	function timeRange(): number[] {
		// Create a range of hours that can be returned
		// For instance, if our prop is
		//		startTime: 9am
		//		endTime: 4pm
		// This method would return
		//		[9, 10, 11, 12, 1, 2, 3, 4]

		let hours: number[] = []

		const startHour = props.startTime.getHours()
		const endHour = props.endTime.getHours()

		if (isMorning(startHour) && isAfternoon(endHour)) {
			for (var i = startHour; i <= 12; i++) {
				hours.push(i)
			}
			// Start at "1" that gets converted
			for (var i = 13; i <= endHour; i++) {
				hours.push(i - 12)
			}
		} else {
			hours.push(-1)
			// Loop directly
			for (var i = startHour; i <= endHour; i++) {
				hours.push(i)
			}
		}

		return hours
	}

	// MARK: CSS Binding constants
	// Used for ranges of the calendar page

	const timeRangeLength = computed<number>(() => {
		return timeRange().length * 2
	})

	const dayRangeLength = computed<number>(() => {
	// function timeRangeLength(): number {
		return props.dayModels.length
	})

</script>

<template>
	<Navbar />

	<div id="calContainer">
		<div id="calendar">
			<div id="legend">
				<!-- Dummy first node to leave space for header -->
				<p></p>
				<p v-for="(hour, i) in timeRange()">{{ hour }}</p>
			</div>
			<Day v-for="(day, i) in dayModels" :dayModel="day" :timeRangeLength="timeRangeLength" />
		</div>
	</div>
	<Footer />
</template>

<style scoped lang="scss">

	#calContainer {
		margin: 0 auto;
		width: min(750px, 80%);
	}

	#calendar {

		$legend-width: 10%;

		// Each column width is the total window width minus the legend-width divided by the number of days
		grid-template-columns: $legend-width repeat(v-bind('dayRangeLength'), calc((100% - $legend-width) / v-bind('dayRangeLength')));

		// HACK: Style background for the calendar
		// Since we can't style around row gaps,
		// we need to do some manual... adjustments.
		&>div {
			background-color: rgba(black, 0.2);
			padding: 10px;

			// Border radius only on edges of first & last "real" col
			// (I can't believe this works...)
			&:nth-child(2) {
				border-radius: 8px 0 0 8px;
			}

			&:last-child {
				border-radius: 0 8px 8px 0;
			}
		}

		display: grid;
		justify-content: center;

		#legend {
			display: grid;
			grid-template-rows: repeat(v-bind('timeRangeLength'), 40px);
			row-gap: 5px;
			background-color: white;

			// Day cols
			p {
				grid-row: span 2;
				font-size: 1.1rem;
				margin: 0;
				padding-right: 20px;
				text-align: right;
				border-top: 1px solid black;

				// Hidden empty first cell
				// to match day of week name
				// acting as a table header row.
				// All other cells span 2 rows
				&:nth-child(1) {
					border: none;
					grid-row: span 1;
				}
			}
		}
	}
</style>
