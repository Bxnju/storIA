<script>
	import axios from 'axios';
	import { onMount } from 'svelte';

	import world from '$lib/images/planet-2.png';

	let name = '';
	let content = '';
	let scenario = '';
	let errorMessage = '';
	let characters = [];
	let selectedCharacters = [];

	async function fetchCharacters() {
		try {
			const authUser = localStorage.getItem('authUser');
			if (!authUser) {
				console.error('Auth token not found in localStorage');
				errorMessage = '🚩 Auth token not found. Please log in again.';
				return;
			}

			const response = await axios.get('http://127.0.0.1:3000/api/v1/all_characters', {
				headers: {
					Authorization: `Bearer ${authUser}`
				}
			});

			characters = response.data;
		} catch (error) {
			console.error('Error fetching characters:', error);
			errorMessage = '🚩 Error fetching characters. Please try again later.';
		}
	}

	function toggleCharacterSelection(event) {
		const characterId = event.target.value;
		if (event.target.checked) {
			selectedCharacters = [...selectedCharacters, characterId];
		} else {
			selectedCharacters = selectedCharacters.filter((id) => id !== characterId);
		}
	}

	async function handleSubmit() {
		errorMessage = '';

		try {
			const authUser = localStorage.getItem('authUser');
			if (!authUser) {
				console.error('Auth token not found in localStorage');
				errorMessage = '🚩 Auth token not found. Please log in again.';
				return;
			}

			content = `Scenario: ${scenario}\n\nContext: ${content}`;

			errorMessage = 'Creating story...';

			const response = await axios.post(
				'http://127.0.0.1:3000/api/v1/create_story?len=en',
				{
					story: {
						title: name,
						content: content
					},
					characters: selectedCharacters
				},
				{
					headers: {
						Authorization: `Bearer ${authUser}`
					}
				}
			);

			console.log('Response from backend:', response.data);

			errorMessage = '✔ Story created successfully.';
		} catch (error) {
			console.error('There was an error sending the request:', error.response.data);

			if (error.response && error.response.status === 401) {
				errorMessage = '🚩 An error occurred. Please log in again.';
			} else {
				errorMessage = '🚩 An error occurred. Please try again later.';
			}
		}
	}

	onMount(() => {
		errorMessage = '';
		fetchCharacters();
	});
</script>

<svelte:head>
	<title>StorIA | Create story</title>
	<meta name="description" content="Create a new story" />
</svelte:head>

<div class="image">
	<img src={world} alt="" />
</div>
<form on:submit|preventDefault={handleSubmit}>
	<h1>Make a great story...</h1>

	<div class="input-row">
		<div class="input-columns">
			<label>
				Title
				<input type="text" bind:value={name} />
			</label>
		</div>
		<div class="input-columns">
			<label>
				Scenario
				<input type="text" bind:value={scenario} />
			</label>
		</div>
	</div>

	<textarea placeholder="Write the context of your story here" bind:value={content}></textarea>

	<h2>Select Characters</h2>
	{#if !characters}
		<p class="no_characters">No characters found.</p>
	{:else if characters.length > 0}
		<div class="characters">
			{#each characters as character}
				<div class="card_character">
					<h2>{character.name}</h2>
					<input
						value={character.id}
						class="hidden_checkbox"
						type="checkbox"
						on:change={toggleCharacterSelection}
					/>
				</div>
			{/each}
		</div>
	{:else}
		<p>Loading characters...</p>
	{/if}

	<button type="submit">Create Story</button>

	{#if errorMessage}
		<p class="error-message">{errorMessage}</p>
	{/if}
</form>

<style>
	.input-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 2em;
	}

	.input-columns {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: space-between;
	}
	.characters {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
	}

	.card_character {
		background-color: rgb(5, 48, 7);
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 10em;
		height: 5em;
		border-radius: 2em;
		transition: 0.7s;
		cursor: pointer;
	}

	.card_character:hover {
		transform: scale(1.05);
	}

	.card_character:has(input:checked) {
		background-color: rgba(0, 91, 33, 0.809);
	}

	.card_character input {
		width: 100%;
		cursor: pointer;
		appearance: none;
		width: 100%;
		height: 100%;
	}

	.card_character h2 {
		margin: auto;
		font-family: var(--chakra);
		color: var(--white);
		font-weight: bold;
		font-size: 1.1em;
		user-select: none;
		position: absolute;
	}

	.error-message {
		align-self: center;
		margin-top: 1em;
		text-align: center;
		display: inline-block;
		border-radius: 15px;
		padding: 0.5em;
		background: var(--d-green);
		color: var(--white);
		font-weight: bold;
		font-family: var(--chakra);
		margin-bottom: 1em;
	}

	textarea {
		min-width: 65%;
		min-height: 4em;
		margin: 1em 0;
		height: auto;
		border-radius: 0.5em;
		padding: 1em;
		color: var(--white);
		background: rgba(0, 40, 61, 0.697);
		font-weight: bold;
		font-size: 1.1em;
		border: none;
		font-family: var(--raleway);
	}

	textarea::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}

	textarea:focus {
		outline: none;
	}

	textarea::-webkit-scrollbar {
		-webkit-appearance: none;
	}

	textarea::-webkit-scrollbar:vertical {
		width: 8px;
		background: var(--d-green);
	}

	textarea::-webkit-scrollbar-thumb {
		background-color: var(--m-green);
		border-radius: 10px;
	}

	.image {
		margin-top: 3em;
	}

	form {
		position: relative;
		display: flex;
		flex-direction: column;
		z-index: 1;
		margin: 2rem auto;
		width: 800px;
		padding: 2rem;
		border-radius: 10px;
		background: linear-gradient(145deg, rgb(0, 76, 114), rgba(5, 48, 7, 0.51));
		backdrop-filter: blur(5px);
		animation: fadeInTop 0.8s ease-in-out;
		box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
	}

	form h1 {
		color: var(--white);
		font-family: var(--chakra);
		text-align: left;
		font-weight: bold;
		margin-bottom: 1em;
	}

	form h2 {
		color: var(--white);
		margin: 1em 0.5em 1em 0;
	}

	.image > img {
		position: absolute;
		width: 26%;
		animation:
			fadeIn 1s ease-in,
			float 5s infinite ease-in-out;
	}

	label {
		display: block;
		margin-bottom: 1rem;
		font-family: var(--raleway);
		font-size: 1rem;
		color: var(--white);
	}

	label input {
		width: 100%;
		padding: 1rem;
		color: var(--white);
		font-weight: bold;
		border: none;
		transition: 0.8s;
		border-radius: 8px;
		background-color: rgba(0, 40, 61, 0.697);
		box-shadow: inset 0px 5px 15px rgba(121, 121, 121, 0.1);
		transition: box-shadow 0.3s ease;
	}

	label input:focus {
		outline: none;
		box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.2);
	}

	button[type='submit'] {
		display: inline;
		margin-top: 1rem;
		padding: 1rem;
		border: none;
		border-radius: 8px;
		background-color: var(--d-green);
		color: var(--white);
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button[type='submit']:hover {
		background-color: rgba(5, 74, 42, 0.772);
	}

	.no_characters {
		width: 100%;
		font-size: 1.5em;
		font-family: var(--chakra);
		color: var(--green);
		font-weight: bold;
		text-align: center;
		list-style: none;
		animation: fadeIn 0.5s ease-in-out;
	}
</style>
