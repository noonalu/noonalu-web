<script setup lang="ts">
</script>

<template>

	<div id="container-and-footer">
		<div id="container">
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

			<div id="video"></div>
			<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/0fOUf1JwzBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->


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
		</div>

		<!-- Outside of container for flexbox magics -->
		<footer>
			<div id="logo-title">
				<img src="../assets/logo.svg" />
				<h2>Noonalu</h2>
			</div>
			<p><i>Schedule things, probably.</i></p>
		</footer>

	</div>
</template>

<style scoped lang="scss">

	html, body {
		height: 100%;
	}

	#container-and-footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	// Surrounding thing to make footer sticky
	// https://css-tricks.com/couple-takes-sticky-footer/
	#container {
		flex: 1 0 auto;
	}

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

	#video {
		display: block;
		width: 800px;
		height: 450px;
		border-radius: 8px;
		margin: 0 auto;
		background-color: rgba(#181a1b, 0.8);
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
				margin: 2px 0 0 2px;
				font-size: 1.5rem;
			}
		}

		p {
			font-size: 1rem;
			margin: 10px 0 0 0;
		}
	}

</style>
