<svelte:head>
	<title>Welcome</title>
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<article>
	<section class="image">
		<img src="./images/me.png" alt="" />
	</section>
	<section class="about-me">itamar sharify</section>
	<section class="links">
		<a href="blog">Blog</a>
		<a href="resume">Resume</a>
	</section>
	<section class="stats">these are my stats</section>
</article>

<style>
	article {
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 2fr 3fr;
		grid-template-areas: 'image about-me' 'image links' 'image stats';
	}

	.image {
		grid-area: image;
		display: block;
		overflow: hidden;
	}

	.image img {
		object-fit: cover;
		height: 100%;
	}
	.about-me {
		grid-area: about-me;
		display: block;
	}
	.links {
		grid-area: links;
	}

	.stats {
		grid-area: stats;
	}

	@media only screen and (max-width: 968px) {
		article {
			grid-template-areas: 'image about-me' 'image links' 'stats stats';
		}
	}

	@media only screen and (max-width: 512px) {
		article {
			grid-template-areas: 'image about-me' 'links links' 'stats stats';
		}
	}
</style>
