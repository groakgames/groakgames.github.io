<script>
	import "$lib/styles/animations.css";
	import { base } from "$app/paths";
</script>

<style lang="postcss">
	div {
		display: flex;
		flex-wrap: wrap;
		place-content: center;
		gap: 1ch;

		> div {
			display: flex;
			flex-wrap: nowrap;
		}
		a {
			display: flex;
			
			place-items: center;
			> img {
				height: 1.5em;
				margin-right: 0.5ch;
			}
			&:hover > img{
				filter: var(--b-filter);
				animation: wiggle 1.5s linear infinite;
			}
		}
	}
</style>

<div class="panel">
	<div>
		<a href="https://youtube.com/@groakgames"><img src="{base}/assets/icons/youtube.svg" alt="">youtube</a>
		<a href="https://twitch.tv/groakgames"><img src="{base}/assets/icons/twitch.svg" alt="">twitch</a>
	</div>
	<a href="https://discord.gg/SGBMkGYJbG"><img src="{base}/assets/icons/discord.svg" alt="">discord</a>
</div>