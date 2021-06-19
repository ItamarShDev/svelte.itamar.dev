<script lang="ts">
	import type { JobsEntity, Duration, Company } from '../../resume';
	export let job: JobsEntity;
	const duration: Duration = job.duration;
	const company: Company = job.company;

	let description = job.description;
	function toggleElaborateMode(isElaborated: boolean) {
		description = isElaborated ? job.elaborated_description : job.description;
	}
</script>

<dt>{duration.from}-{duration.to}</dt>
<dd>
	<details>
		<summary>{job.title} @<a href={company.website}>{company.name}</a></summary>
		<div>
			<p
				on:mouseenter={() => toggleElaborateMode(true)}
				on:mouseleave={() => toggleElaborateMode(false)}
			>
				{description}
			</p>
			<div>{job.tags}</div>
		</div>
	</details>
</dd>
