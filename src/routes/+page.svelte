<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
</script>

<div class="landing">
	<NavBar />
	<Hero />
</div>

<style>
	.landing {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: clamp(3rem, 6vw, 4.5rem);
		padding-bottom: clamp(4rem, 8vw, 6rem);
	}
</style>
