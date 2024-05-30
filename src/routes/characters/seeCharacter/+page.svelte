<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { writable } from 'svelte/store';

	// Crear un store para almacenar el personaje
	const character = writable(null);

	// Función para obtener el personaje desde el backend
	async function fetchCharacter(characterId) {
		try {
			const authUser = localStorage.getItem('authUser');
			if (!authUser) {
				console.error('Auth token not found in localStorage');
				return;
			}

			const response = await axios.get(
				`http://127.0.0.1:3000/api/v1/get_character?id=${characterId}`,
				{
					headers: {
						Authorization: `Bearer ${authUser}`
					}
				}
			);

			character.set(response.data);
		} catch (error) {
			console.error('Error fetching character data:', error);
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			let params = new URLSearchParams(window.location.search);
			let characterId = params.get('id');
			fetchCharacter(characterId);
		}
	});
</script>

<svelte:head>
	<title>StorIA | Character Details</title>
	<meta name="description" content="Character Details" />
</svelte:head>

<div class="text-column">
	{#if $character}
		<div class="character-details">
			<h1>Character name: {$character.name}</h1>
			<p><strong>Description:</strong> {$character.description}</p>
			<p><strong>Created At:</strong> {new Date($character.created_at).toLocaleDateString()}</p>
		</div>
	{:else}
		<p class="loading_character">Loading Character...</p>
	{/if}
</div>

<style>
	.text-column {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.character-details {
		max-width: 800px;
		padding: 20px;
		background-color: rgba(21, 84, 24, 0.486);
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		text-align: left;
	}

	.character-details h1 {
		font-size: 2.5rem;
		margin-bottom: 10px;
		color: var(--white);
		font-family: var(--chakra);
		font-weight: bold;
	}

	.character-details p {
		font-size: 1.2rem;
		margin: 1em 0;
		color: var(--white);
		font-family: var(--raleway);
	}

	.character-details strong {
		font-weight: bold;
		color: var(--white);
	}

	.character-details p:last-child {
		margin-bottom: 0;
	}

	/* Animación de carga */
	@keyframes pulse {
		0% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.6;
		}
	}

	.loading_character {
		font-size: 1.2rem;
		color: var(--white);
		animation: pulse 1.5s infinite;
	}
</style>
