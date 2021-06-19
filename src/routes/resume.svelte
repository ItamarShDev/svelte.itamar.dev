<script context="module" lang="ts">
	import { base } from '$app/paths';
	export async function load({ fetch }) {
		const { jobs } = await fetch(`${base}/resume.json`).then((
			/** @type {{ json: () => any; }} */ r
		) => r.json());
		return {
			props: { jobs }
		};
	}
</script>

<script lang="ts">
	import ResumeItem from '$src/components/resume/ResumeItem.svelte';
	import type { JobsEntity } from '$src/resume';

	export let jobs: JobsEntity[];
	const jobItems: JobsEntity[] = jobs.reverse();
</script>

<svelte:head>
	<title>Resume</title>
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<main>
	<dl>
		{#each jobItems as job}
			<ResumeItem {job} />{/each}
	</dl>
</main>
