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

	<div id="header">
		<!-- <div id="header-bg"></div> -->
		<img src="../assets/logo-full-2.svg"/>
		<div>
			<!-- <h1>Noonalu</h1> -->
			<p><i>Schedule things, probably.</i></p>
		</div>
	</div>

	<p id="float-tagline">Noonalu is when2meet, but <em>better</em>.<br><sub>(we promise 👉👈)</sub></p>

	<!-- <div id="video"></div> -->
	<iframe width="560" height="315" src="https://www.youtube.com/embed/0fOUf1JwzBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</template>

<style scoped lang="scss">

	nav {
		display: inline-block;
		width: 100%;
		display: flex;
		justify-content: flex-end;
		// border-bottom: 2px solid black;

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

	#header {
		margin: 8rem auto 0 auto;
		text-align: center;
		width: 70%;

		img {
			max-width: 30rem;
		}

		p {
			font-weight: 400;
			margin: 0;
		}
	}

	#float-tagline {
		margin: 10rem 0;
		text-align: center
	}

	iframe {
		display: block;
		width: 600px;
		height: 300px;
		// background-color: #333;
		border-radius: 8px;
		margin: 0 auto;
	}


</style>
