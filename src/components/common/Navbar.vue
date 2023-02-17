<script setup lang="ts">

	export interface Props {
		withLogo?: boolean
	}

	const props = withDefaults(defineProps<Props>(), {
		withLogo: true
	})

	// Can't seem to do class binding with a prop, so here we are
	function isWithLogo(): boolean {
		return props.withLogo
	}

</script>

<template>
	<nav :class="{ withoutLogoDesc: !isWithLogo() }">
		<img src="../../assets/logo-horizontal.svg" v-show="withLogo"/>
		<div id="links">
			<a href="#">about</a>
		</div>
	</nav>
</template>

<style scoped lang="scss">

	.withoutLogoDesc {
		justify-content: end;
	}

	nav {
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
