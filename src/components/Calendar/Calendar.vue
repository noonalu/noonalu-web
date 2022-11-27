<script setup lang="ts">

import Day from './Day.vue';

</script>

<template>
	<h1>Noonalu</h1>

	<div id="calContainer">

		<div id="calendar">

			<div id="legend">
				<p></p>
				<p>9am</p>
				<p>10am</p>
				<p>11am</p>
				<p>12pm</p>
				<p>1pm</p>
			</div>
			<Day name="Sun"/>
			<Day name="Mon"/>
			<Day name="Tue"/>
			<Day name="Wed"/>
			<Day name="Thu"/>
			<!-- <Day name="Fri"></Day> -->
			<!-- <Day name="Sat"></Day> -->
		</div>
	</div>

</template>

<style scoped lang="scss">

	h1 {
		text-align: center;
	}

	#calContainer {
		margin: 0 auto;
		width: 80%;
	}

	#calendar {

		// HACK: Style background for the calendar
		// Since we can't style around row gaps,
		// we need to do some manual... adjustments.
		&>div {
			background-color: rgba(black, 0.2);
			// padding: 0 5px;
			padding: 10px;

			// REDO ALL STYLING GOING LEFT TO RIGHT TO STAY SANE
			// AAAHHHHHHH

			&:nth-child(2),
			&:last-child {
				// padding: 0 10px;
			}

			&:first-child {
				// padding: 0;
			}

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
		// column-gap: 8px;
		// 1 + num days for legend col
		grid-template-columns: 10% repeat(5, 14%);
		justify-content: center;

		#legend {
			display: grid;
			grid-template-rows: repeat(6, 40px);
			row-gap: 5px;
			background-color: white;


			// Day cols:
			// 40 + 5 + 40 = 85
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
