<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import world from '$lib/images/planet-1.png';

	let mail = '';
	let password = '';
	let errorMessage = '';

	// Validador de email
	function validateEmail(input) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(input);
	}

	// Validador de contraseña
	function validatePassword(input) {
		return input.length >= 5; // Longitud mínima de 6 caracteres
	}

	async function handleSubmit() {
		if (!validateEmail(mail)) {
			errorMessage = '🚩 Por favor, ingrese un correo electrónico válido.';
			return;
		}

		if (!validatePassword(password)) {
			errorMessage = '🚩 La contraseña debe tener al menos 5 caracteres.';
			return;
		}

		try {
			const response = await axios.post('http://127.0.0.1:3000/api/v1/sign_in/', {
				mail,
				password
			});

			console.log('Respuesta del backend:', response.data);

			let token = response.data.token;
			localStorage.setItem('authToken', token);
		} catch (error) {
			console.error('Error al enviar la petición:', error.message);
		}
	}

	onMount(() => {
		errorMessage = '';
	});
</script>

<svelte:head>
	<title>StorIA | Login</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="image">
	<img src={world} alt="" />
</div>
<form on:submit|preventDefault={handleSubmit}>
	<h1>Login to StorIA</h1>
	<label>
		Email
		<input type="email" bind:value={mail} />
	</label>

	<label>
		Password
		<input type="password" bind:value={password} />
	</label>

	<button type="submit">Let's go</button>

	{#if errorMessage}
		<p class="error-message">{errorMessage}</p>
	{/if}
</form>

<style>
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
		margin-top: 5em;
	}

	form {
		position: relative;
		z-index: 1;
		margin: 2rem auto;
		width: 450px;
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
			fadeInLeft 1s ease-in,
			float 5s infinite ease-in-out;
	}

	label {
		display: block;
		margin-bottom: 1rem;
		font-family: var(--raleway);
		font-size: 1rem;
		color: var(--white);
	}

	input[type='email'],
	input[type='password'] {
		width: 100%;
		padding: 1rem;
		margin-top: 1rem;
		color: var(--l-green);
		font-weight: bold;
		margin-bottom: 1.5rem;
		border: none;
		transition: 0.8s;
		border-radius: 8px;
		background-color: rgba(5, 48, 7, 0.51);
		box-shadow: inset 0px 5px 15px rgba(121, 121, 121, 0.1);
		transition: box-shadow 0.3s ease;
	}

	input[type='email']:focus,
	input[type='password']:focus {
		outline: none;
		box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.2);
	}

	button[type='submit'] {
		width: 100%;
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
