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


	<div class="content-blob">
		<div class="content-text">
			<h2>how much better?</h2>
			<p>glad you asked!</p>
			<p>no idea yet. we're still coding the darn thing.</p>
		</div>

		<div class="content-rect"></div>
	</div>
	<div class="content-blob">
		<div class="content-rect"></div>

		<div class="content-text">
			<h2>really? no idea?</h2>
			<p>yup!</p>
		</div>
	</div>

	<footer>

	</footer>

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
		width: 800px;
		height: 450px;
		border-radius: 8px;
		margin: 0 auto;
	}

	// MARK: Content

	.content-blob {
		margin: 10rem auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 60%;

		h2 {
			font-size: 2rem;
		}

		.content-text, .content-rect {
			width: 40%;
			display: inline-block;
		}
		.content-rect {
			flex-shrink: 1;
			background: #d9d9d9;
			border-radius: 8px;
			width: 500px;
			height: 300px;
		}
	}

	// MARK: Footer

	footer {

	}


</style>
