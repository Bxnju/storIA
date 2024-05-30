<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let n_hrefs = 5;

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

{#if loading}
	<header class="skeleton">
		<h1>StorIA</h1>
		<nav>
			<ul>
				{#each Array(n_hrefs) as _}
					<li>Loading...</li>
				{/each}
			</ul>
		</nav>
	</header>
{:else if typeof localStorage == 'undefined' || localStorage.getItem('authUser') == null}
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
			<li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
				<a class="btn_login" href="/login">Login</a>
			</li>
		</nav>
	</header>
{:else if typeof localStorage !== 'undefined' && localStorage.getItem('authUser') !== null}
	<header>
		<h1>StorIA</h1>
		<nav>
			<li aria-current={$page.url.pathname === '/feed' ? 'page' : undefined}>
				<a href="/feed">Feed</a>
			</li>
			<li aria-current={$page.url.pathname === '/documentation' ? 'page' : undefined}>
				<a href="/documentation">Documentation</a>
			</li>
			<li aria-current={$page.url.pathname === '/characters' ? 'page' : undefined}>
				<a href="/characters">Characters</a>
			</li>
			<li aria-current={$page.url.pathname === '/stories' ? 'page' : undefined}>
				<a href="/stories">Stories</a>
			</li>
			<li aria-current={$page.url.pathname === '/account' ? 'page' : undefined}>
				<a class="btn_login" href="/account">Account</a>
			</li>
		</nav>
	</header>
{/if}

<style>
	/* Estilos para el esqueleto de carga del header */
	.skeleton {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em 0;
		width: 100%;
		background: transparent; /* Color de fondo del esqueleto */
		backdrop-filter: blur(1px); /* Efecto de desenfoque */
	}

	.skeleton nav ul {
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.skeleton nav ul li {
		margin-right: 2em;
		font-size: 1.5em;
		font-family: var(--raleway);
		letter-spacing: 0.1em;
		color: transparent; /* Texto transparente mientras carga */
		transition: color 0.2s linear;
	}

	/* Efecto de carga (opcional, para hacer que los elementos parezcan cargar) */
	@keyframes skeleton-loading {
		0% {
			background-color: rgba(18, 111, 23, 0.51); /* Color de fondo de carga */
		}
		50% {
			background-color: rgba(4, 58, 7, 0.51); /* Cambio de color */
		}
		100% {
			background-color: rgba(18, 111, 23, 0.51); /* Vuelve al color original */
		}
	}

	.skeleton nav ul li {
		animation: skeleton-loading 1.5s infinite ease-in-out; /* Aplica el efecto de carga */
	}

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
