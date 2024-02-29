<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<a href="/sverdle">Empezar a crear tu historia</a>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		color: white;
		background: black;
		font-weight: bold;
		padding: 1em;
		border-radius: 10px;
		animation: subir 1s ease infinite;
	}

	@keyframes subir {
		0%,
		100% {
			transform: translateY(-2em);
		}
		50% {
			transform: translateY(0em);
		}
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
