<script>
	import "$lib/styles/style.css"
	import { page } from '$app/stores';
	import Socials from '$lib/components/Socials.svelte';
</script>

<style lang="postcss">
	#full-page {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 2ch);
		margin: 1ch;

		> header {
			overflow: auto;
			text-align: center;
			margin-bottom: 1.25ch;

			& h1 a {
				color: var(--fg-color);
			}

			nav > a {
				padding-left: 2%;
				padding-right: 2%;
				& + a {
					border-left: solid var(--fg-color) 1px;
				}
			}
		}

		> #mid-page {
			display: grid;
			grid-template-columns: 1fr 60% 1fr;
			gap: 1ch;
			
			@media screen and (max-width: 700px){
				display: flex;
				flex-direction: column;
			}

			> main {
				grid-column: 2;
				position: relative;
				flex-shrink: 0;
				padding: 0.5ch;
			}

			> .side-bar {
				text-align: center;
				display: flex;
				flex-direction: column; 
				gap: 0.5ch;
				padding: 0.5ch;
				nav {
					display: flex;
					flex-direction: column;
				}
			}
		}

		> footer {
			display: flex;
			margin-top: auto;
			.copyright-notice {
				width: 100%;
				align-self: flex-end;
				text-align: right;
				font-size: x-small;
			}
		}
	}
</style>

<svelte:head>
	<title>{$page.data.title}</title>
	<meta name="description" content={$page.data.description}/>
	<meta property="og:title" content={$page.data.title} />
	<meta property="og:description" content={$page.data.description}/>
  <link rel="icon" href={$page.data.icon} />
</svelte:head>
<div id="full-page">
	<header>
		<h1><a href="{$page.data.header.link}">{$page.data.header.title}</a></h1>
		<nav>
			{#each $page.data.header.navigation as navElement}
				<a href="{navElement.link}">{navElement.name}</a>
			{/each}
		</nav>
	</header>
	<div id="mid-page">
		<div class="side-bar">
			<Socials/>
			<div class="panel hide-on-small">
				<nav>
					<a href="/">Groak Games</a>
					<hr width=80%/>
					Projects
					<a href="/virtual-strings">VirtualStrings</a>
				</nav>
			</div>
		</div>
		<main>
			<slot/>
		</main>
		<div class="side-bar"></div>
	</div>
	<footer>
		<p class="copyright-notice">Copyright © 2024 Groak Games LLC</p>
	</footer>
</div>