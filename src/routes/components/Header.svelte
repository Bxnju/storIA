<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<h1>StorIA</h1>
	<nav>
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">Home</a>
		</li>
		<li aria-current={$page.url.pathname === '/documentation' ? 'page' : undefined}>
			<a href="/documentation">Documentation</a>
		</li>
		<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
			<a href="/about">About us</a>
		</li>
		<li aria-current={$page.url.pathname === '/register' ? 'page' : undefined}>
			<a href="/register">Register</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/login') ? 'page' : undefined}>
			<a class="btn_login" href="/login">Login</a>
		</li>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em 0;
		width: 100%;
		background: transparent;
		backdrop-filter: blur(1px);
	}

	header h1 {
		font-size: 5em;
		font-family: var(--chakra);
		color: var(--green);
		padding: 0 0 0 1em;
		font-weight: bold;
	}

	nav {
		display: flex;
		align-items: center;
	}

	li {
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	nav a {
		color: var(--white);
		margin-right: 2em;
		font-size: 1.5em;
		font-family: var(--raleway);
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.btn_login {
		background: var(--m-green);
		color: var(--white);
		padding: 0.5em 1em;
		border-radius: 5px;
		font-size: 1.5em;
		transition: color 0.2s linear;
	}

	a:hover {
		text-shadow: 2px 2px 10px white;
	}
</style>
