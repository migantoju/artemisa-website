<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Mission from '$lib/components/sections/Mission.svelte';
	import ProductShowcase from '$lib/components/sections/ProductShowcase.svelte';
	import Roadmap from '$lib/components/sections/Roadmap.svelte';
	import BlogHighlights from '$lib/components/sections/BlogHighlights.svelte';
</script>

<div class="landing">
	<NavBar />
	<Hero />
	<Mission />
	<ProductShowcase />
	<Roadmap />
	<BlogHighlights />
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
