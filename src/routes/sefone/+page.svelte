<script lang="ts">
  import SefoneHero from '$lib/components/sefone/SefoneHero.svelte';
  import SefoneHowItWorks from '$lib/components/sefone/SefoneHowItWorks.svelte';
  import SefoneUvInsights from '$lib/components/sefone/SefoneUvInsights.svelte';
  import SefoneRoutineShowcase from '$lib/components/sefone/SefoneRoutineShowcase.svelte';
  import SefoneFAQ from '$lib/components/sefone/SefoneFAQ.svelte';
  import SefoneWaitlist from '$lib/components/sections/SefoneWaitlist.svelte';
  import { t, type Dictionary } from '$lib/i18n';

  const tStore = t;
  const BASE_URL = 'https://artemisa.dev';
  const FALLBACK_OG = 'https://placehold.co/1200x630/png?text=Artemisa+Development';

  let dict: Dictionary | undefined;

  $: dict = $tStore as Dictionary;
  $: seoEntry = dict?.seo.sefone;
  $: canonical = `${BASE_URL}/sefone`;
</script>

<svelte:head>
  <title>{seoEntry?.title ?? 'Sefone | Artemisa Development'}</title>
  <meta name="description" content={seoEntry?.description ?? ''} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={seoEntry?.title ?? 'Sefone | Artemisa Development'} />
  <meta property="og:description" content={seoEntry?.description ?? ''} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={seoEntry?.ogImage ?? FALLBACK_OG} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seoEntry?.title ?? 'Sefone | Artemisa Development'} />
  <meta name="twitter:description" content={seoEntry?.description ?? ''} />
  <meta name="twitter:image" content={seoEntry?.ogImage ?? FALLBACK_OG} />
  <link rel="canonical" href={canonical} />
  <link rel="alternate" hreflang="es" href={canonical} />
  <link rel="alternate" hreflang="en" href={canonical} />
</svelte:head>

<div class="sefone-page">
  <SefoneHero />
  <SefoneHowItWorks />
  <SefoneUvInsights />
  <SefoneRoutineShowcase />
  <SefoneWaitlist />
  <SefoneFAQ />
</div>

<style>
  .sefone-page {
    display: flex;
    flex-direction: column;
    gap: 0;
    background: #fbf8f4;
  }
</style>
