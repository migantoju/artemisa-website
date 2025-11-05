<script lang="ts">
  import WipPage from '$lib/components/WipPage.svelte';
  import { locale } from '$lib/i18n';

  const localeStore = locale;

  const BASE_URL = 'https://artemisa.dev/terms';
  const FALLBACK_OG = 'https://placehold.co/1200x630/png?text=Artemisa+Development';

  $: currentLocale = ($localeStore ?? 'es') as 'es' | 'en';
  $: isEs = currentLocale === 'es';
  $: badge = isEs ? 'En actualización' : 'Updating';
  $: title = isEs ? 'Términos de uso en progreso' : 'Terms of use in progress';
  $: description = isEs
    ? 'Estamos preparando nuestros términos de uso para que tengas claridad absoluta sobre nuestras aplicaciones y servicios.'
    : 'We are preparing our terms of use to give you full clarity on our apps and services.';
  $: actionLabel = isEs ? 'Volver al inicio' : 'Back to home';
  $: seoTitle = isEs ? 'Términos | Artemisa Development' : 'Terms | Artemisa Development';
  $: seoDescription = description;
</script>

<svelte:head>
  <title>{seoTitle}</title>
  <meta name="description" content={seoDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={seoTitle} />
  <meta property="og:description" content={seoDescription} />
  <meta property="og:url" content={BASE_URL} />
  <meta property="og:image" content={FALLBACK_OG} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seoTitle} />
  <meta name="twitter:description" content={seoDescription} />
  <meta name="twitter:image" content={FALLBACK_OG} />
  <link rel="canonical" href={BASE_URL} />
  <link rel="alternate" hreflang="es" href={BASE_URL} />
  <link rel="alternate" hreflang="en" href={BASE_URL} />
</svelte:head>

<WipPage {badge} {title} {description} {actionLabel} actionHref="/" />
