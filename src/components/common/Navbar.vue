<script setup lang="ts">
</script>

<template>
	<nav>
		<img src="../../assets/logo-horizontal.svg"/>
		<div id="links">
			<a href="#">calendar</a>
			<a href="#/features">features</a>
			<a href="#">pricing</a>
			<a href="#">about</a>
		</div>
	</nav>
</template>

<style scoped lang="scss">
nav {
		display: inline-block;
		width: 100%;
		display: flex;
		justify-content: space-between;

		#links {
			margin-right: 2rem;
			display: flex;
		}

		img {
			width: 240px;
			margin-left: 2rem;
		}

		a {
			text-decoration: none;
			color: black;
			margin: 20px;
			font-size: 1.5rem;
			font-family: 'Varela Round', sans-serif;
			transition: 0.1s all;
			border-bottom: 3px solid transparent;

			&:hover {
				transform: translateY(-3px);
				color: $primary;
				border-bottom: 3px solid $primary;
			}
		}
	}
</style>
