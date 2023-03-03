<script setup lang="ts">

	import Navbar from "../common/Navbar.vue"
	import TextInput from "../common/TextInput.vue"
	import DayOfWeek from "./DayOfWeek.vue"
	import PrimaryButton from "../common/PrimaryButton.vue"
	import GooglyLogoFull from "../common/GooglyLogoFull.vue";
	import Footer from "../common/Footer.vue"

</script>

<template>
	<Navbar :withLogo="false" />
	<div id="setup-container">
		<GooglyLogoFull id="hero-logo"/>
		<TextInput :name="'Name'"/>
		<DayOfWeek />
		<PrimaryButton text="Submit" />
		<!-- TODO: [NLU-33] Time range component -->
	</div>
	<Footer />
</template>

<style scoped lang="scss">

	#hero-logo {
		height: 7.5rem;
		margin: 0 auto;
	}

	#setup-container {
		display: grid;
		grid-template-rows: 1.5fr 1fr 1fr 1fr;
		justify-items: center;
		align-items: center;
	}

	#button {
		width: 200px;
		height: 50px;
		background-color: $primary;
		border-radius: 7px;
	}

	Footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}



</style>
