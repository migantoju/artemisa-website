<script lang="ts">
import ProjectPage from '$lib/components/projects/ProjectPage.svelte';
import { t, type Dictionary } from '$lib/i18n';

const tStore = t;
const BASE_URL = 'https://artemisa.dev';
const FALLBACK_OG = 'https://placehold.co/1200x630/png?text=Artemisa+Development';

let dict: Dictionary | undefined;
let hero:
	| Dictionary['projectPages']['minervax']['hero']
	| undefined;
let seoEntry: Dictionary['seo']['minervax'] | undefined;
let productJsonLd: Record<string, unknown> | null = null;
const canonical = `${BASE_URL}/minervax`;

$: dict = $tStore as Dictionary;
$: hero = dict?.projectPages.minervax.hero;
$: seoEntry = dict?.seo.minervax;
	$: productJsonLd = seoEntry
	? {
			'@context': 'https://schema.org',
			'@type': 'SoftwareApplication',
			name: seoEntry.title,
			applicationCategory: 'SafetyApplication',
			operatingSystem: 'iOS, Android',
			description: seoEntry.description,
			image: seoEntry?.ogImage ?? FALLBACK_OG,
			url: canonical,
			creator: {
				'@type': 'Organization',
				name: 'Artemisa Development',
				url: BASE_URL
			}
		}
	: null;
</script>

<svelte:head>
	<title>{seoEntry?.title ?? 'Minervax | Artemisa Development'}</title>
	<meta name="description" content={seoEntry?.description ?? hero?.subtitle ?? ''} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={seoEntry?.title ?? 'Minervax | Artemisa Development'} />
	<meta property="og:description" content={seoEntry?.description ?? hero?.subtitle ?? ''} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={seoEntry?.ogImage ?? FALLBACK_OG} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seoEntry?.title ?? 'Minervax | Artemisa Development'} />
	<meta
		name="twitter:description"
		content={seoEntry?.description ?? hero?.subtitle ?? ''}
	/>
	<meta name="twitter:image" content={seoEntry?.ogImage ?? FALLBACK_OG} />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="es" href={canonical} />
	<link rel="alternate" hreflang="en" href={canonical} />
	{#if productJsonLd}
		<script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
	{/if}
</svelte:head>

<ProjectPage project="minervax" />
