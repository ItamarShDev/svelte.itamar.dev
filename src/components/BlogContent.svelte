<script>
	export let postContent;
</script>

<div>
	{@html postContent}
</div>

<style>
	div :global(p) {
		filter: brightness(150%);
		margin: 0 0 0 0;
	}
	div :global(h1) {
		font-family: 'Codystar', Arial, Helvetica, sans-serif;
	}
	div :global(h2) {
		font-size: 2em;
		margin-block-end: 0.3em;
	}
	div :global(h3) {
		font-size: 1.8em;
	}
	div :global(h4) {
		font-size: 1.5em;
	}
	div :global(h2),
	div :global(h3),
	div :global(h4) {
		margin-block-end: 0.3em;
		font-family: 'Alegreya Sans SC', sans-serif;
	}
	div :global(h1),
	div :global(h2),
	div :global(h3),
	div :global(h4) {
		scroll-margin-top: 7.5rem;
	}
	div :global(h1) :global(a),
	div :global(h2) :global(a),
	div :global(h4) :global(a),
	div :global(h3) :global(a) {
		filter: brightness(225%);
		font-weight: 300;
		text-decoration: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}
	div :global(code) {
		background-color: var(--inputs);
		font-size: 0.75em;
		padding: 3px;
	}
	div :global(article) {
		color: var(--paragraph);
		font-weight: 300;
		font-size: 1em;
		letter-spacing: 0.5px;
		font-family: 'Quicksand', sans-serif;
	}
	div :global(article) > :global(p) {
		line-height: 2em;
	}

	div :global(article) > :global(pre) {
		font-size: 0.8em;
		padding: 1em;
		overflow-y: auto;
		overflow-x: auto;
		border-left: 3px var(--decorations) solid;
		font-family: 'Fira Code', monospace;
	}

	div :global(article) :global(blockquote::before) {
		content: '„';
		position: absolute;
		font-size: 10em;
		left: 0;
		top: 0;
		color: grey;
		line-height: 0;
	}
	div :global(article) :global(blockquote) {
		position: relative;
		font-family: 'Helvetica', serif;
		padding: 2.5em 1em 1em 5em;
		margin: 0;
		font-style: italic;
		font-size: 0.8em;
		font-weight: 100;
		line-height: 1.4em;
	}
	div :global(blockquote) :global(p) {
		margin: 0;
	}
	div :global(article) :global(ul) {
		font-family: 'Roboto', sans-serif;
		font-size: 0.7em;
		list-style-type: square;
	}
	div :global(ul) :global(li) {
		margin: 0.8em auto;
	}
	@media only screen and (max-width: 968px) {
		div :global(h1.post-title),
		div :global(article) > :global(:not(pre, iframe)) {
			max-width: 80vw;
			margin-inline: auto;
		}
		div :global(article) :global(blockquote::before) {
			line-height: 0.5em;
		}
	}
	@media only screen and (max-width: 640px) {
		div :global(article) :global(pre) {
			font-size: 1em;
			line-height: 2em;
			padding: 0.5em;
		}
	}
</style>
