<script setup lang="ts">
</script>

<template>
	<footer>
		<div id="logo-title">
			<img src="../../assets/logo.svg" />
			<h2>Noonalu</h2>
		</div>
		<p><i>Schedule things, probably.</i></p>
	</footer>
</template>

<style scoped lang="scss">
	footer {
		flex-shrink: 0;
		background-color: #181a1b;
		padding: 2% 15%;
		color: white;

		#logo-title {
			display: flex;
			align-items: center;

			img {
				height: 1.5rem;
			}

			h2 {
				margin: 2px 0 0 10px;
				font-size: 1.5rem;
			}
		}

		p {
			font-size: 1rem;
			margin: 10px 0 0 0;
		}
	}
</style>
