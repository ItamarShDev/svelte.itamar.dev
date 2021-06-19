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
	export let post;
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>

<h1 class="title">{post.metadata.title}</h1>
{@html post.content}

<style>
	h1.title {
		margin-bottom: 0;
	}
</style>
