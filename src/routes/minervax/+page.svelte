<script lang="ts">
	import ProjectPage from '$lib/components/projects/ProjectPage.svelte';
	import { t, type Dictionary } from '$lib/i18n';

	const tStore = t;

	let dict: Dictionary | undefined;
	let hero:
		| Dictionary['projectPages']['minervax']['hero']
		| undefined;

	$: dict = $tStore as Dictionary;
	$: hero = dict?.projectPages.minervax.hero;
</script>

<svelte:head>
	<title>{hero?.eyebrow ?? 'Minervax'} | Artemisa Development</title>
	<meta name="description" content={hero?.subtitle ?? ''} />
</svelte:head>

<ProjectPage project="minervax" />
