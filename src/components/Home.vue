<script setup lang="ts">
import GooglyLogoFull from './GooglyLogoFull.vue';
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
				<GooglyLogoFull/>
				<div>
					<p><i>Schedule things, probably.</i></p>
				</div>
			</div>
			<div id="header">
			</div>
			<p id="float-tagline">We make time for everyone.<br /><sub>(we pwomise 👉👈)</sub></p>

			<div id="video">
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/0fOUf1JwzBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>


			<div class="content-blob blob-first">
				<div class="content-text">
					<h2>how much better?</h2>
					<p>glad you asked!</p>
					<p>no idea yet. we're still coding the darn thing.</p>
				</div>

				<div class="content-rect">
					<img src="../assets/graph.png" />
				</div>
			</div>


			<div class="content-blob blob-second">
				<div class="content-rect">
					<img src="../assets/shrug.png" />
				</div>

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
		text-align: center;

		sub {
			font-size: 1rem;
			display: block;
		}
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
		gap: 30px;
		width: 70%;

		h2 {
			font-size: 2rem;
		}

		img {
			width: 100%;
			height: 100%;
			box-shadow: 0px 3px 4px 0px rgba(black, 0.2);
			border-radius: 8px;
		}

		.content-text, .content-rect {
			width: 40%;
			display: inline-block;
		}
		.content-rect {
			flex-shrink: 1;
			border-radius: 8px;
			max-width: 500px;
			max-height: 300px;
			width: auto;
			aspect-ratio: 16 / 9;

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
				margin: 2px 0 0 10px;
				font-size: 1.5rem;
			}
		}

		p {
			font-size: 1rem;
			margin: 10px 0 0 0;
		}
	}

	@media screen and (max-width: 1200px) {
		.content-blob {
			width: 80%;
		}
	}

	@media screen and (max-width: 800px) {

		nav {
			justify-content: center;

			#links {
				margin-right: 0;
			}
		}

		#header {
			width: 100%;
			margin-right: 0;

			img {
				max-width: 20rem;
			}
		}

		#video {
			width: 90%;
			height: 250px;
		}

		.content-blob {
			width: 90%;
			display: block;

			.content-text {
				width: 80%;
			}

			.content-rect {
				max-width: 80%;
				max-height: 80%;
			}
		}

		.blob-first {
			display: flex;
			flex-direction: column-reverse;
		}
		.blob-second {
			display: flex;
			flex-direction: column;
		}
	}

	@media screen and (max-width: 500px) {
		.content-blob {
			width: 95%;

			.content-rect {
				max-width: 95%;
				max-height: 95%;
			}
		}
	}

</style>
