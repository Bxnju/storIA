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
			<h1>{$character.name}</h1>
			<p><strong>ID:</strong> {$character.id}</p>
			<p><strong>Description:</strong> {$character.description}</p>
			<p><strong>Created At:</strong> {new Date($character.created_at).toLocaleDateString()}</p>
			<p><strong>Updated At:</strong> {new Date($character.updated_at).toLocaleDateString()}</p>
		</div>
	{:else}
		<p>Loading Character...</p>
	{/if}
</div>

<style>
    .text-column {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .character-details {
        max-width: 600px;
        padding: 20px;
        background-color: #f8f9fa;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        text-align: left;
    }

    .character-details h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        color: #333;
    }

    .character-details p {
        font-size: 1.2rem;
        margin-bottom: 8px;
        color: #555;
    }

    .character-details strong {
        font-weight: bold;
        color: #333;
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

    .loading-character {
        font-size: 1.2rem;
        color: #777;
        animation: pulse 1.5s infinite;
    }
</style>
