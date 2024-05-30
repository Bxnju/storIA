<script>
	import axios from 'axios';
	import { onMount } from 'svelte';

	import world from '$lib/images/planet-5.png';

	let name = '';
	let physicalCharacteristic = '';
	let physicalCharacteristics = [];
	let emotionalCharacteristic = '';
	let emotionalCharacteristics = [];
	let birth_date = '';
	let context = '';
	let errorMessage = '';

	function validateBirthDay(input) {
		const today = new Date();
		const birthDate = new Date(input);
		return birthDate <= today;
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

			const other = `Caracteristicas fisicas: ${physicalCharacteristics.join(', ')}, Caracteristicas emocionales: ${emotionalCharacteristics.join(', ')}`;

			const response = await axios.post(
				'http://127.0.0.1:3000/api/v1/create_character?len=en',
				{
					character: {
						name,
						birth_date,
						context,
						other
					}
				},
				{
					headers: {
						Authorization: `Bearer ${authUser}`
					}
				}
			);

			console.log('Respuesta del backend:', response.data);

			errorMessage = '✔ Character created successfully.';
			location.replace('/characters');
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
	});
</script>

<svelte:head>
	<title>StorIA | Create character</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="image">
	<img src={world} alt="" />
</div>
<form on:submit|preventDefault={handleSubmit}>
	<h1>Enter the character characteristics</h1>

	<div class="input-row">
		<div class="input-columns">
			<label>
				Name
				<input type="text" bind:value={name} />
			</label>

			<label>
				Physical Characteristic
				<input type="text" bind:value={physicalCharacteristic} />
			</label>

			<a
				class="add_characteristic_button"
				on:click={() => {
					if (physicalCharacteristics.length < 5 && physicalCharacteristic.length > 0) {
						physicalCharacteristics.push(physicalCharacteristic);
						physicalCharacteristic = '';
						physicalCharacteristics = physicalCharacteristics.slice();
					} else {
						alert('You have more than 5 characteristics or the field is empty');
					}
				}}>Add physical characteristic</a
			>
		</div>

		<div class="input-columns">
			<label>
				Birth Day
				<input type="date" bind:value={birth_date} />
			</label>

			<label>
				Emotional Characteristic
				<input type="text" bind:value={emotionalCharacteristic} />
			</label>

			<a
				class="add_characteristic_button"
				on:click={() => {
					if (emotionalCharacteristics.length < 5 && emotionalCharacteristic.length > 0) {
						emotionalCharacteristics.push(emotionalCharacteristic);
						emotionalCharacteristic = '';
						emotionalCharacteristics = emotionalCharacteristics.slice();
					} else {
						alert('You have more than 5 characteristics or the field is empty');
					}
				}}>Add emotional characteristic</a
			>
		</div>
	</div>

	{#if physicalCharacteristics.length > 0}
		<div class="physicalCharacteristics">
			<h2>Physical Characteristics:</h2>
			{#each physicalCharacteristics as characteristic, index (characteristic)}
				<p key={index}>{characteristic}</p>
			{/each}
		</div>
	{/if}

	{#if emotionalCharacteristics.length > 0}
		<div class="emotionalCharacteristics">
			<h2>Emotional Characteristics:</h2>
			{#each emotionalCharacteristics as characteristic, index (characteristic)}
				<p key={index}>{characteristic}</p>
			{/each}
		</div>
	{/if}

	<textarea placeholder="Write here the context of your next character" bind:value={context}
	></textarea>
	<button type="submit">Create with AI</button>

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
		color: var(--l-green);
		background: rgba(5, 48, 7, 0.51);
		font-weight: bold;
		font-size: 1.1em;
		border: none;
		font-family: var(--raleway);
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
		background-color: rgba(18, 111, 23, 0.51);
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

	.physicalCharacteristics {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		gap: 0.5em;
		margin: 0.5em;
	}

	.physicalCharacteristics p {
		background-color: var(--d-green);
		color: var(--white);
		padding: 0.5em;
		border-radius: 1em;
		font-family: var(--chakra);
		font-size: 1.1em;
	}

	.emotionalCharacteristics {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		gap: 0.5em;
		margin: 0.5em;
	}

	.emotionalCharacteristics p {
		background-color: var(--d-green);
		color: var(--white);
		padding: 0.5em;
		border-radius: 1em;
		font-family: var(--chakra);
		font-size: 1.1em;
	}

	.add_characteristic_button {
		background-color: var(--m-green);
		text-align: center;
		text-decoration: none;
		color: var(--white);
		border: none;
		font-family: var(--chakra);
		padding: 0.5em 1em;
		border-radius: 1em;
		font-size: 1.1em;
		transition: color 0.2s linear;
		cursor: pointer;
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
		color: var(--l-green);
		font-weight: bold;
		border: none;
		transition: 0.8s;
		border-radius: 8px;
		background-color: rgba(5, 48, 7, 0.51);
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
		background-color: var(--m-green);
		color: var(--white);
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button[type='submit']:hover {
		background-color: var(--green);
	}
</style>
