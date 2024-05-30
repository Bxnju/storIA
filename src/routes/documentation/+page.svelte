<script>
	import { onMount } from 'svelte';

	let activeContent = 'content-1';

	const showContent = (contentId) => {
		activeContent = contentId;
	};

	onMount(() => {
		const buttons = document.querySelectorAll('.btn');
		buttons.forEach((button) => {
			button.addEventListener('click', () => {
				showContent(button.dataset.contentId);
			});
		});
	});
</script>

<svelte:head>
	<title>StorIA | Documentation</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1 class="page-title">Documentation</h1>
</div>

<div class="todo">
	<div class="buttons">
		<button
			class="btn {activeContent === 'content-1' ? 'btn-active' : ''}"
			data-content-id="content-1"
			on:click={() => showContent('content-1')}
		>
			How to use <span class="material-icons"> help_outline </span>
		</button>
		<button
			class="btn {activeContent === 'content-2' ? 'btn-active' : ''}"
			data-content-id="content-2"
			on:click={() => showContent('content-2')}
		>
			Character <span class="material-icons"> accessibility_new </span>
		</button>
		<button
			class="btn {activeContent === 'content-3' ? 'btn-active' : ''}"
			data-content-id="content-3"
			on:click={() => showContent('content-3')}
		>
			Context <span class="material-icons"> emoji_objects </span>
		</button>
		<button
			class="btn {activeContent === 'content-4' ? 'btn-active' : ''}"
			data-content-id="content-4"
			on:click={() => showContent('content-4')}
		>
			Scenarios <span class="material-icons"> landscape </span>
		</button>
		<button
			class="btn {activeContent === 'content-5' ? 'btn-active' : ''}"
			data-content-id="content-5"
			on:click={() => showContent('content-5')}
		>
			Interactions <span class="material-icons"> favorite </span>
		</button>
		<button
			class="btn {activeContent === 'content-6' ? 'btn-active' : ''}"
			data-content-id="content-6"
			on:click={() => showContent('content-6')}
		>
			Comments <span class="material-icons"> insert_comment </span>
		</button>
		<button
			class="btn {activeContent === 'content-7' ? 'btn-active' : ''}"
			data-content-id="content-7"
			on:click={() => showContent('content-7')}
		>
			Reports <span class="material-icons"> report_problem </span>
		</button>
	</div>
	<div class="content-container">
		<div class="content {activeContent === 'content-1' ? 'visible' : ''}" id="content-1">
			<h1>How to use <span class="material-icons"> help_outline </span></h1>
			<img
				src="https://content.nationalgeographic.com.es/medio/2022/12/29/inteligencia-artificial_8d5b40c8_221229124239_1280x853.jpg"
				alt=""
			/>
			<p class="text-content">
				StorIA is an innovative application that allows you to create fascinating stories using
				artificial intelligence. You don't need to be an expert to be a great storyteller. <br /><br
				/>At StorIA, we invite you to leave behind the conventional and the routine, and to unleash
				your imagination, your ideas, and your dreams. <br /><br />After registering, you will be
				part of this chronicling community. Now, let's create magnificent stories with the help of
				AI! To get started, imagine your own characters who will be in your stories, detailing their
				physical characteristics, skills and weaknesses, intellectual qualities, powers, and other
				relevant aspects. <br /><br />Let your imagination run wild in the creation of characters.
				Design the scenarios where your story will take place. Describe the setting of the events in
				detail. <br /><br />You can choose an existing site that inspires you or create a completely
				new one. The choice is yours. <br /><br />Publish your stories so other users can discover
				and interact with them. You also have the opportunity to comment on the narratives of
				others. Remember, the limit is set by you!
			</p>
		</div>
		<div class="content {activeContent === 'content-2' ? 'visible' : ''}" id="content-2">
			<h1>Character <span class="material-icons"> accessibility_new </span></h1>
			<img
				src="https://static01.nyt.com/images/2023/09/27/multimedia/27META-AI-SUB1-clgh/27META-AI-SUB1-clgh-videoSixteenByNine3000.jpg"
				alt=""
			/>
			<p class="text-content">
				Every story needs characters, because without them, there is no plot. But don't worry, you
				don't have to create them step by step. You just need to briefly describe what they would be
				like. <br /><br />For this, you can add characteristics such as: <br /><br />Name<br /><br
				/>Ethnicity<br /><br />Age <br /><br />Sex/Gender (Male, Female, LGBTQ+, Not Identified)
				<br /><br />Physical characteristics: add details like height, body build (slim, muscular),
				strength (strong or weak), special abilities, weaknesses, whether they are a hero or a
				villain, among others. <br /><br />Feel free to add any detail you consider relevant.
				<br /><br />Intellectual and emotional characteristics: Describe aspects such as their
				mentality (positive, winning, disturbed, vengeful), their morality (virtuous, ethical), and
				other personality traits.<br /><br /> Add all the information you consider necessary to complete
				your character. Let your imagination run free and create a unique character. You can create as
				many as you want.
			</p>
		</div>
		<div class="content {activeContent === 'content-3' ? 'visible' : ''}" id="content-3">
			<h1>Context <span class="material-icons"> emoji_objects </span></h1>
			<img src="https://i.pinimg.com/736x/e8/bf/f3/e8bff3d8091182dcbb0b3e64488b04b4.jpg" alt="" />
			<p class="text-content">
				At StorIA, our mission is to create magnificent stories, and to achieve this we need to know
				your imagination. <br /><br />Therefore, we invite you to share your ideas with us so that
				we can bring extraordinary stories to life based on your creativity. <br /><br />To start
				creating a story, we need you to describe some key details, such as the plot you want to
				develop, the time period in which it will take place, the characters you want to include,
				the important events, the year, the conflicts, and any other relevant aspect. <br /><br
				/>Your imagination is the limit. Let your creative mind run free and allow the innocence and
				creativity of your inner child to guide the process. The more information and details you
				provide us, the richer and more immersive the story we will create together will be.
				<br /><br />We are eager to see how far your imagination can go!
			</p>
		</div>
		<div class="content {activeContent === 'content-4' ? 'visible' : ''}" id="content-4">
			<h1>Scenarios <span class="material-icons"> landscape </span></h1>
			<img
				src="https://www.mascomunidad.org.ar/wp-content/uploads/2023/03/Ciudades-IA-2000x1125.jpg"
				alt=""
			/>
			<p class="text-content">
				In StorIA, your stories will unfold in splendid, incredible, and magnificent places. With
				our platform, stories can come to life in any setting you desire, from the beautiful forests
				of Norway and the vast Sahara desert to the divine landscapes of the Zelda video game you
				have always loved. <br /><br /> This is where magic becomes real. By creating great stories
				with unique characters and narratives, they will develop in wonderful places, full of
				scenarios that seem straight out of a fairy tale. <br /><br />At StorIA, we leave behind
				common reality to open the door to the unforgettable, allowing you to explore worlds and
				scenarios you had only imagined. <br /><br />There are no limits to where our stories can
				take us. You can create as many characters as you want, add all the necessary information to
				bring them to life, and specify every detail of the world they will live in. <br /><br /> With
				StorIA, every corner of your imagination can become a vibrant, lively setting for your narratives.
			</p>
		</div>
		<div class="content {activeContent === 'content-5' ? 'visible' : ''}" id="content-5">
			<h1>Interactions <span class="material-icons"> favorite </span></h1>
			<img src="https://reviewob.com/wp-content/uploads/2019/02/2-20-19social.jpg" alt="" />
			<p class="text-content">
				If you have magnificent stories, why keep them to yourself? Share your incredible stories,
				characters, and beautiful scenarios with other users. In StorIA, you can read and interact
				with the great stories of your friends and acquaintances. <br /><br />Here at StorIA, we
				want you to expand your imagination by discovering new stories, characters, and scenarios
				full of beauty and magic. In addition to sharing your own stories, you will discover a vast
				world of narratives created by other users. <br /><br />Imagine exploring tales set in
				fantastic worlds, distant kingdoms, and wonderful landscapes, each more fascinating than the
				last. <br /><br /> You will be able to get inspired by these stories, learn from them, and
				find new ideas for your own creations. <br /><br /> Our community is here to help you grow
				as a creator. Interact with other writers, exchange opinions, and collaborate on joint
				projects. <br /><br />At StorIA, we believe that imagination has no limits, and together we
				can take our stories to new heights.
			</p>
		</div>
		<div class="content {activeContent === 'content-6' ? 'visible' : ''}" id="content-6">
			<h1>Comments <span class="material-icons"> insert_comment </span></h1>
			<img
				src="https://media.sproutsocial.com/uploads/2023/11/Social-media-comments-final-2.png"
				alt=""
			/>
			<p class="text-content">
				Now that you have read your friend's or another user's story, what did you think of it?
				Would you change anything? Did you dislike it or, on the contrary, did you love it? Express
				your opinions through the comments section that you will find in each story. <br /><br />It
				is very valuable to know what others think about your creations, as this will help you
				improve in the future. At StorIA, we believe in the importance of continuous improvement and
				change. <br /><br />We want you to always feel motivated to try new things and to perfect
				your skills. Do not be afraid to experiment and take the first step towards success.
				<br /><br />Additionally, comments are not only useful for the author but also for you as a
				reader. By sharing your thoughts and opinions, you contribute to a supportive and
				collaborative community where everyone can learn and grow together. <br /><br />So, do not
				hesitate to leave your comments and suggestions. Every opinion counts and can be the spark
				that inspires a great improvement or a new direction for future stories. At StorIA, we value
				your voice and are here to help you reach your full potential as a creator.
			</p>
		</div>
		<div class="content {activeContent === 'content-7' ? 'visible' : ''}" id="content-7">
			<h1>Reports <span class="material-icons"> report_problem </span></h1>
			<img src="https://cdn.mos.cms.futurecdn.net/Ww63adT4gZijYvL7naPhkY-1280-80.jpg.webp" alt="" />
			<p class="text-content">
				<span style="font-weight: bold;"
					>Reports are currently being developed to maintain a safe environment.</span
				><br /><br />

				At StorIA, we are committed to providing the highest level of safety to all our users,
				especially you. <br /><br />Therefore, in case of receiving a comment that may harm or
				affect the mental integrity of another user, the author of the comment will be reported and
				their activity on StorIA will be suspended for a period that varies according to the
				severity of the offense.<br /><br /> Do not worry, we know that you are a brilliant and
				well-meaning person. However, it is essential to protect every member of our community and,
				above all, to maintain their enthusiasm for continuing to imagine and create new stories.<br
				/><br /> We want StorIA to be a safe and positive space where everyone can express
				themselves freely and develop their ideas without fear of being negatively judged. Besides
				safety measures, we encourage all our users to maintain an environment of respect and mutual
				support.<br /><br /> Constructive criticism is welcome, but it must always be expressed
				kindly and considerately. Our goal is to foster a community where everyone feels valued and
				motivated to continue contributing with their creativity. <br /><br />So, go ahead and share
				your stories with confidence, knowing that StorIA is here to protect you and support your
				growth as a creator.
			</p>
		</div>
	</div>
</div>

<style>
	.todo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 85%;
		height: 80vh;
		box-shadow: 0 0 1em rgba(18, 111, 23, 0.721);
	}

	.buttons {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width: 25%;
		height: 100%;
		font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
	}

	.btn {
		flex: 1;
		width: 100%;
		background: rgba(18, 111, 23, 0.266);
		backdrop-filter: blur(3px);
		cursor: pointer;
		font-size: 1.2em;
		font-family: var(--chakra);
		color: white;
		border: none;
		outline: none;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.5s;
		overflow: hidden;
	}

	.btn span {
		opacity: 0;
		font-size: 0;
		transition: 0.5s ease-in-out;
	}

	.btn:hover span {
		font-size: 1.3em;
		margin-left: 0.3em;
		opacity: 1;
	}

	.btn::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 300%;
		background: rgba(18, 111, 23, 0.077);
		backdrop-filter: blur(3px);
		border-radius: 50%;
		z-index: -1;
		transform: scale(0);
		transition: transform 0.5s ease-in;
	}

	.btn.btn-active::before {
		transform: scale(3);
	}

	.btn.btn-active {
		backdrop-filter: blur(10px);
		text-shadow: 0 0 5px var(--white);
	}

	.btn.btn-active span {
		font-size: 1.3em;
		margin-left: 0.3em;
		opacity: 1;
		animation: neon 2s infinite ease;
	}

	.content-container {
		width: 75%;
		background: rgba(18, 111, 23, 0.51);
		backdrop-filter: blur(10px);
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: none;
		color: var(--white);
		height: 100%;
		width: 100%;
		overflow: auto;
		padding: 2em 2em 2em 4em;
		font-family: var(--raleway);
	}

	.content h1 span {
		margin-left: 0.3em;
		font-size: 1.3em;
	}

	.content::-webkit-scrollbar {
		width: 10px;
	}

	.content::-webkit-scrollbar-thumb {
		background-color: var(--m-green);
		border-radius: 10px;
	}

	.content::-webkit-scrollbar-track {
		background-color: transparent;
		border-radius: 10px;
	}

	.content.visible {
		display: grid;
		place-items: center start;
		animation: fadeIn 1s;
	}

	.content.visible {
		display: flex;
		flex-direction: column;
		gap: 1em; /* Espacio entre celdas */
		animation: fadeIn 1s;
	}

	/* Estilos para el título */
	.content h1 {
		padding: 0.5em 1em;
		margin: auto;
		background-color: var(--d-green);
		color: var(--white);
		margin-bottom: 1em;
		border-radius: 2em;
		font-family: var(--chakra);
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-size: 1.8em;
	}

	.content > img {
		object-fit: cover;
		height: 100%;
		width: 70%;
	}

	.content .text-content {
		margin-top: 1em;
		text-align: justify;
		color: var(--white);
		min-height: 100%;
		overflow: auto;
		padding: 2em 2em 2em 4em;
		font-family: var(--raleway);
	}

	.content .text-content::first-letter {
		font-family: var(--chakra);
		font-size: 2em;
		color: var(--l-green);
	}

	.content .text-content::-webkit-scrollbar {
		width: 10px;
	}

	.content .text-content::-webkit-scrollbar-thumb {
		background-color: var(--l-green);
		border-radius: 10px;
	}

	.content .text-content::-webkit-scrollbar-track {
		background-color: transparent;
		border-radius: 10px;
	}
</style>
