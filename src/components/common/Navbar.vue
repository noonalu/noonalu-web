<script setup lang="ts">
</script>

<template>
	<nav>
		<div id="links">
			<a href="#">features</a>
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
		justify-content: flex-end;

		#links {
			margin-right: 2rem;
			display: flex;
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
				color: #FC7753;
				border-bottom: 3px solid #FC7753;
			}
		}
	}
</style>
