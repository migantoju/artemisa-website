<script lang="ts">
  import WipPage from '$lib/components/WipPage.svelte';
  import { locale, t, type Dictionary } from '$lib/i18n';

  const localeStore = locale;
  const tStore = t;

  const BASE_URL = 'https://artemisa.dev/blog/minervax-empathy';
  const FALLBACK_OG = 'https://placehold.co/1200x630/png?text=Artemisa+Development';

  let dict: Dictionary | undefined;
  let currentLocale: 'es' | 'en' = 'es';
  let isEs = true;
  let postTitle = 'Minervax';
  let postDescription = '';

  $: dict = $tStore as Dictionary;
  $: currentLocale = ($localeStore ?? 'es') as 'es' | 'en';
  $: isEs = currentLocale === 'es';
  $: post = dict?.blog.posts.find((entry) => entry.href.endsWith('/minervax-empathy'));
  $: postTitle = post?.title ?? (isEs ? 'Empatía como eje de Minervax' : 'Empathy at the core of Minervax');
  $: postDescription = post?.description ??
    (isEs
      ? 'Muy pronto contaremos cómo la empatía guía las decisiones de producto en Minervax.'
      : 'We will soon share how empathy drives product decisions in Minervax.');

  $: badge = isEs ? 'Próximamente' : 'Coming soon';
  $: title = postTitle;
  $: description = isEs
    ? 'Estamos afinando esta publicación sobre Minervax. Recibe la actualización antes que nadie suscribiéndote a nuestras novedades.'
    : 'We are polishing this Minervax update. Subscribe to get the article as soon as it launches.';
  $: actionLabel = isEs ? 'Volver al blog' : 'Back to blog';
  $: seoTitle = `${postTitle} | Artemisa Development`;
  $: seoDescription = postDescription;
</script>

<svelte:head>
  <title>{seoTitle}</title>
  <meta name="description" content={seoDescription} />
  <meta property="og:type" content="article" />
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

<WipPage {badge} {title} {description} {actionLabel} actionHref="/blog" />
