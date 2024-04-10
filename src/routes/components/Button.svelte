<script>
	export let text = '';
	export let url = '';
</script>

<div class="button">
	<a href="/{url}" class="link">{text}</a>
</div>

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		font-size: 1.2em;
	}

	.button .link {
		text-decoration: none;
		overflow: hidden;
		border-radius: 10px;
		color: var(--white);
		padding: 0.8em;
		display: grid;
		place-items: center;
		background: var(--m-green);
		position: relative;
		z-index: 6;
	}

	.button .link:hover {
		text-shadow: 2px 2px 10px white;
	}

	.button .link::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		transform: scale(0);
		z-index: -1;
		background: var(--d-green);
		border-radius: 50%;
		transition: 0.4s;
		width: 1em;
		height: 1em;
		opacity: 1;
	}

	.button .link:hover::before {
		transform: scale(12);
		opacity: 1;
	}
</style>
