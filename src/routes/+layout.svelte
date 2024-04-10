<script>
	import Header from './components/Header.svelte';
	import Button from './components/Button.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="footer">
		<div class="footer-inner">
			<div class="footer-column">
				<h3>Company</h3>
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
					<li>Email: contact@yourdomain.com</li>
					<li>Phone: +1 234 567 890</li>
				</ul>
			</div>
		</div>
		<div class="footer-bottom">
			<p>&copy; 2024 Your Company. All rights reserved.</p>
		</div>
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
		padding: 0 1em;
	}

	.footer-column h3 {
		font-size: 1.5em;
		margin-bottom: 0.5em;
	}

	.footer-column ul {
		list-style-type: none;
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
		margin-top: 1em;
	}

	.footer-bottom p {
		font-size: 0.8em;
	}
</style>
