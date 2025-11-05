<script lang="ts">
  import WipPage from '$lib/components/WipPage.svelte';
  import { locale } from '$lib/i18n';

  const localeStore = locale;

  const BASE_URL = 'https://artemisa.dev/privacy';
  const FALLBACK_OG = 'https://placehold.co/1200x630/png?text=Artemisa+Development';

  $: currentLocale = ($localeStore ?? 'es') as 'es' | 'en';
  $: isEs = currentLocale === 'es';
  $: badge = isEs ? 'En actualización' : 'Updating';
  $: title = isEs ? 'Política de privacidad en progreso' : 'Privacy policy in progress';
  $: description = isEs
    ? 'Estamos redactando nuestra política de privacidad con total transparencia. Añadiremos aquí el detalle completo sobre cómo cuidamos tus datos.'
    : 'We are drafting our privacy policy with full transparency. The complete details on how we safeguard your data will be published here soon.';
  $: actionLabel = isEs ? 'Volver al inicio' : 'Back to home';
  $: seoTitle = isEs ? 'Privacidad | Artemisa Development' : 'Privacy | Artemisa Development';
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
