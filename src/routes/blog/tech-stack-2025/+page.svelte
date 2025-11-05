<script lang="ts">
  import WipPage from '$lib/components/WipPage.svelte';
  import { locale, t, type Dictionary } from '$lib/i18n';

  const localeStore = locale;
  const tStore = t;

  const BASE_URL = 'https://artemisa.dev/blog/tech-stack-2025';
  const FALLBACK_OG = 'https://placehold.co/1200x630/png?text=Artemisa+Development';

  let dict: Dictionary | undefined;
  let currentLocale: 'es' | 'en' = 'es';
  let isEs = true;
  let postTitle = 'Stack tecnológico 2025';
  let postDescription = '';

  $: dict = $tStore as Dictionary;
  $: currentLocale = ($localeStore ?? 'es') as 'es' | 'en';
  $: isEs = currentLocale === 'es';
  $: post = dict?.blog.posts.find((entry) => entry.href.endsWith('/tech-stack-2025'));
  $: postTitle = post?.title ?? (isEs ? 'Nuestro stack tecnológico 2025' : 'Our 2025 tech stack');
  $: postDescription = post?.description ??
    (isEs
      ? 'Compartiremos pronto cómo construimos y desplegamos con velocidad sin perder calidad.'
      : 'We will soon share how we ship fast without losing quality.');

  $: badge = isEs ? 'Próximamente' : 'Coming soon';
  $: title = postTitle;
  $: description = isEs
    ? 'Esta publicación sobre nuestro stack tecnológico está en proceso. Suscríbete para recibirla apenas salga.'
    : 'This article about our tech stack is in the works. Subscribe to get it as soon as it launches.';
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
