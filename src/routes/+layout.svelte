<script>
	import Header from './components/Header.svelte';
	import Button from './components/Button.svelte';
	import './styles.css';

	import { onMount } from 'svelte';

	let loading = true;

	async function getToken() {
		try {
			// localStorage.setItem('authUser', 'token');
			const authUser = localStorage.getItem('authUser');
			if (authUser) {
				console.log('Logeado correctamente!');
			}
		} catch (error) {
			console.error('Error en localStorage:', error);
		} finally {
			loading = false;
		}
	}

	onMount(async () => {
		await getToken();
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	{#if loading}
		<footer
			style="display: flex; justify-content: center; align-items: center; font-size: 2em; font-family: var(--chakra);"
			class="footer"
		>
			Loading...
		</footer>
	{:else if typeof localStorage == 'undefined' || localStorage.getItem('authUser') == null}
		<footer class="footer">
			<div class="footer-inner">
				<div class="footer-column">
					<h3>Fast access</h3>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/documentation">Documentation</a></li>
						<li><a href="/about-us">About Us</a></li>
					</ul>
				</div>
				<div class="footer-column">
					<h3>Get Started</h3>
					<ul>
						<li><a href="/register">Register</a></li>
						<li><a href="/login">Login</a></li>
					</ul>
				</div>
				<div class="footer-column">
					<h3>Contact Us</h3>
					<ul>
						<li>Email: contact@storia.com</li>
						<li>Phone: +57 3023344987</li>
					</ul>
				</div>
			</div>
			<div class="footer-bottom">
				<p>&copy; 2024 StorIA. All rights reserved.</p>
			</div>
		</footer>
	{:else if typeof localStorage !== 'undefined' && localStorage.getItem('authUser') !== null}
		<footer class="footer">
			<div class="footer-bottom">
				<p>&copy; 2024 StorIA. All rights reserved.</p>
			</div>
		</footer>
	{/if}
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
		align-items: center;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.footer {
		margin-top: 7em;
		background-color: rgba(21, 84, 24, 0.486);
		backdrop-filter: blur(5px);
		color: #fff;
		padding: 2em 0;
	}

	.footer-inner {
		display: flex;
		justify-content: space-around;
		max-width: 1200px;
		margin: 0 auto;
	}

	.footer-column {
		flex: 1;
		padding: 2em;
		background: rgba(21, 84, 24, 0.486);
		border-radius: 1em;
		margin: 1em;
		box-shadow:
			inset 0 0 10px rgba(0, 0, 0, 0.6),
			3 0 10px rgba(255, 255, 255, 0.6);
	}

	.footer-column h3 {
		font-size: 1.5em;
		text-align: center;
		margin-bottom: 0.5em;
		font-family: var(--chakra);
	}

	.footer-column ul {
		list-style-type: none;
		font-family: var(--raleway);
		padding: 0;
	}

	.footer-column ul li {
		margin-bottom: 0.5em;
	}

	.footer-column ul li a {
		color: #fff;
		text-decoration: none;
	}

	.footer-bottom {
		text-align: center;
		font-family: var(--raleway);
		margin-top: 1em;
	}

	.footer-bottom p {
		font-size: 0.8em;
	}
</style>
