<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { writable } from 'svelte/store';

	let currentUser = null;

	// Función para obtener las historias desde el backend
	async function fetchUserData() {
		try {
			const authUser = localStorage.getItem('authUser');
			if (!authUser) {
				console.error('Auth token not found in localStorage');
				return;
			}

			const response = await axios.get('http://127.0.0.1:3000/api/v1/current_user', {
				headers: {
					Authorization: `Bearer ${authUser}`
				}
			});

			currentUser = await response.data;

			console.log('Respuesta del backend:', currentUser);
		} catch (error) {
			console.error('Error fetching stories:', error);
		}
	}

	// Obtener las historias cuando el componente se monta
	onMount(() => {
		fetchUserData();
	});
</script>

<svelte:head>
	<title>StorIA | Account</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1 class="page-title">Account</h1>
</div>

{#if currentUser}
	<p>Welcome, {currentUser.name}!</p>
{:else}
	<p>Loading user data...</p>
{/if}

<a class="btn_login" onclick="localStorage.removeItem('authUser'); location.replace('/')" href="/"
	>Logout</a
>

<style>
	h1 {
		font-size: var(--page-title-font-size);
		font-family: var(--chakra);
		color: var(--green);
		font-weight: bold;
		list-style: none;
		animation: fadeIn 0.5s ease-in-out;
	}

	.btn_login {
		background: var(--m-green);
		color: var(--white);
		padding: 0.5em 1em;
		border-radius: 5px;
		font-family: var(--raleway);
		font-size: 1.5em;
		transition: color 0.2s linear;
	}
</style>
