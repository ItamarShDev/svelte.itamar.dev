<script context="module">
	export async function load({ page, fetch }) {
		const slug = page.params.slug;
		const post = await fetch(`${slug}.json`).then((r) => r.json());
		return {
			props: { post }
		};
	}
</script>

<script>
	import BlogContent from '$src/components/BlogContent.svelte';

	export let post;
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>
<div id="blog-post">
	<div class="blog-wrapper" id="blog-footer">
		<h1 class="title">{post.metadata.title}</h1>
		<div class="blog-wrapper"><BlogContent postContent={post.content} /></div>
	</div>
</div>

<style>
	#blog-post {
		display: flex;
		justify-content: center;
		font-size: 20px;
		width: inherit;
	}
	.blog-wrapper {
		width: max-content;
		max-width: 80%;
		padding: 3rem;
	}
	h1.title {
		padding-bottom: 1em;
		color: var(--headerText);
		font-weight: 200;
	}
	@media only screen and (max-width: 640px) {
		#blog-post {
			font-size: 16px;
			display: block;
		}
		.blog-wrapper {
			max-width: 100%;
			margin: 0 auto;
		}
	}
</style>
