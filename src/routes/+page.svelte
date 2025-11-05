<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Mission from '$lib/components/sections/Mission.svelte';
	import ProductShowcase from '$lib/components/sections/ProductShowcase.svelte';
	import Roadmap from '$lib/components/sections/Roadmap.svelte';
	import BlogHighlights from '$lib/components/sections/BlogHighlights.svelte';
	import FAQ from '$lib/components/sections/FAQ.svelte';
	import TeamSpotlight from '$lib/components/sections/TeamSpotlight.svelte';
	import CallToAction from '$lib/components/sections/CallToAction.svelte';
	import ContactStrip from '$lib/components/sections/ContactStrip.svelte';
	import FooterBar from '$lib/components/FooterBar.svelte';
</script>

<div class="landing">
	<NavBar />
	<Hero />
	<Mission />
	<ProductShowcase />
	<Roadmap />
	<BlogHighlights />
	<FAQ />
	<TeamSpotlight />
	<CallToAction />
	<ContactStrip />
</div>

<FooterBar />

<style>
	.landing {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: clamp(3rem, 6vw, 4.5rem);
		padding-bottom: clamp(2rem, 5vw, 4rem);
	}
</style>
