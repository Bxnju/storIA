<script>
	import axios from 'axios';
	import { onMount } from 'svelte';

	import world from '$lib/images/planet-3.png';
	import world_2 from '$lib/images/planet-4.png';

	let name = '';
	let last_name = '';
	let mail = '';
	let birth_date = '';
	let password = '';
	let password_confirmation = '';
	let errorMessage = '';

	function validateEmail(input) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(input);
	}

	function validatePassword(input) {
		return input.length >= 6;
	}

	function validateBirthDay(input) {
		const today = new Date();
		const birthDate = new Date(input);
		return birthDate <= today;
	}

	async function handleSubmit() {
		errorMessage = '';

		if (!validateEmail(mail)) {
			errorMessage = '🚩 Por favor, ingrese un correo electrónico válido.';
			return;
		}
		if (!validatePassword(password)) {
			errorMessage = '🚩 La contraseña debe tener al menos 6 caracteres.';
			return;
		}

		if (!validateBirthDay(birth_date)) {
			errorMessage = '🚩 La fecha de nacimiento no puede ser en el futuro.';
			return;
		}

		try {
			const response = await axios.post('http://127.0.0.1:3000/api/v1/sign_up', {
				user: {
					name,
					last_name,
					mail,
					birth_date,
					password,
					password_confirmation
				}
			});

			console.log('Backend reply:', response.data);

			let token = response.data.token;
			localStorage.setItem('authToken', token);

			errorMessage = '✔ You are now succesfully registered! 🎉';
		} catch (error) {
			console.error('Error sending the request:', error.response.data);

			if (error.response && error.response.status === 401) {
				errorMessage = '🚩 There was an error with your data. Please check it and try again.';
			} else {
				errorMessage = '🚩 There was an error with the server. Please try again later.';
			}
		}
	}

	onMount(() => {
		errorMessage = '';
	});
</script>

<svelte:head>
	<title>StorIA | Register</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="image">
	<img src={world} alt="" />
</div>
<div class="image">
	<img src={world_2} alt="" />
</div>
<form on:submit|preventDefault={handleSubmit}>
	<h1>Register to make the best stories</h1>

	<div class="input-row">
		<div class="input-columns">
			<label>
				Name
				<input type="text" bind:value={name} />
			</label>

			<label>
				Last Name
				<input type="text" bind:value={last_name} />
			</label>

			<label>
				Email
				<input type="email" bind:value={mail} />
			</label>
		</div>

		<div class="input-columns">
			<label>
				Birth Day
				<input type="date" bind:value={birth_date} />
			</label>

			<label>
				Password
				<input type="password" bind:value={password} />
			</label>

			<label>
				Confirm your password
				<input type="password" bind:value={password_confirmation} />
			</label>
		</div>
	</div>

	<button type="submit">Register my data</button>

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

	.image > img {
		position: absolute;
		width: 26%;
		animation:
			fadeIn 1s ease-in,
			float 5s infinite ease-in-out;
	}

	.image:last-of-type > img {
		position: absolute;
		left: 20%;
		top: 60%;
		width: 20%;
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
		background-color: var(--d-green);
		color: var(--white);
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button[type='submit']:hover {
		background-color: var(--m-green);
	}
</style>
