<script setup lang="ts">

	import Navbar from "../common/Navbar.vue"
	import TextInput from "../common/TextInput.vue"
	import DayOfWeek from "./DayOfWeek.vue"
	import Button from "../common/Button.vue"

</script>

<template>

	<Navbar />

	<div id="container">

		<TextInput :name="'Name'"/>
		<DayOfWeek />
		<!-- <div id="button"></div> -->
		<Button text="Submit" />
		<!-- TODO: Time range component -->
	</div>

</template>

<style scoped lang="scss">

	#container {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		justify-items: center;
		align-items: center;
	}

	#button {
		width: 200px;
		height: 50px;
		background-color: $primary;
		border-radius: 7px;

	}

</style>
