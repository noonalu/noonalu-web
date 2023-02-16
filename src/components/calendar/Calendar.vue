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

	const props = defineProps<Props>()

	function isMorning(hour: number): boolean {
		return hour <= 12
	}

	function isAfternoon(hour: number): boolean {
		return !isMorning(hour)
	}

	// TODO: Make computed, didn't do it because <vague compiler complaints>
	function timeRangeDisplay(): string[] {
		// Create a range of hours that can be returned
		// For instance, if our prop is
		//		startTime: 9am
		//		endTime: 4pm
		// This method would return
		//		[9, 10, 11, 12, 1, 2, 3, 4]

		let hours: string[] = []

		const startHour = props.startTime.getHours()
		const endHour = props.endTime.getHours()

		// Crosses over
		if (isMorning(startHour) && isAfternoon(endHour)) {
			for (var i = startHour; i <= 12; i++) {
				hours.push(i + "am")
			}
			// Start at "1" that gets converted
			for (var i = 13; i <= endHour; i++) {
				hours.push((i - 12) + "pm")
			}

		// All morning or all afternoon
		} else {
			// Loop directly
			for (var i = startHour; i <= endHour; i++) {

				if (isMorning(i)) {
					hours.push(i + "am")
				} else {
					hours.push(i + "pm")
				}
			}
		}

		return hours
	}

	// MARK: CSS Binding constants
	// Used for ranges of the calendar page

	const timeRangeLength = computed<number>(() => {
		return timeRangeDisplay().length * 2
	})

	const dayRangeLength = computed<number>(() => {
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
				<p v-for="(hour, i) in timeRangeDisplay()" :key="i">{{ hour }}</p>
			</div>
			<div id="leftBgCol"></div>
			<Day v-for="(day, i) in dayModels" :key="i" :dayModel="day" :timeRangeLength="timeRangeLength" />
			<div id="rightBgCol"></div>
		</div>
	</div>
	<!-- <Footer /> -->
</template>

<style scoped lang="scss">

	#calContainer {
		margin: 0 auto;
		margin-top: 50px;
		width: min(750px, 80%);
	}

	#calendar {
		$outerPad: 15px;
		$innerPad: $outerPad / 2;

		$legend-width: 10%;

		// Each column width is the total window width minus the legend-width divided by the number of days
		$dayRange: v-bind('dayRangeLength');
		$dayWidth: calc((100% - $legend-width) / $dayRange);

		// $innerPad is provided later
		// to maintain consistent col width.
		$bgColWidth: calc($outerPad - calc($innerPad / 2));

		// Note: two cols exclusively for background-color
		grid-template-columns: $legend-width $bgColWidth repeat($dayRange, $dayWidth) $bgColWidth;
		display: grid;
		justify-content: center;

		// HACK: Style background for the calendar
		// (Since we can't style under `column-gap`)
		//
		// Key iea: style the second col, first day of week,
		// as if its the first column.
		// The first actual column is the legend.

		#leftBgCol, #rightBgCol {
			background-color: rgba(black, 0.2);
			margin-top: 40px;
		}

		#leftBgCol {
			border-radius: 8px 0 0 8px;
		}

		#rightBgCol {
			border-radius: 0 8px 8px 0;
		}

		// Account for doubling in inner cols
		&::v-deep .incrementContainer {
			padding: $outerPad ($innerPad / 2);
		}

		#legend {
			display: grid;
			row-gap: 5px;
			grid-template-rows: repeat(v-bind('timeRangeLength'), 40px);
			background-color: white;
			user-select: none;

			p {
				// background-color: $primary;
				grid-row: span 2;
				font-size: 1.1rem;
				margin-right: 15px;
				text-align: right;

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
