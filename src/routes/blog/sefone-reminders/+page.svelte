<script lang="ts">
  import WipPage from '$lib/components/WipPage.svelte';
  import { locale, t, type Dictionary } from '$lib/i18n';

  const localeStore = locale;
  const tStore = t;

const BASE_URL = 'https://artemisa.dev/blog/sefone-reminders';
const FALLBACK_OG = 'https://placehold.co/1200x630/png?text=Artemisa+Development';

let dict: Dictionary | undefined;
let postTitle = 'Sefone';
let postDescription = '';
let currentLocale: 'es' | 'en' = 'es';
let isEs = true;

  $: dict = $tStore as Dictionary;
  $: post = dict?.blog.posts.find((entry) => entry.href.endsWith('/sefone-reminders'));
  $: postTitle = post?.title ?? (isEs ? 'Sefone en el día a día' : 'Sefone in everyday life');
  $: postDescription = post?.description ??
    (isEs
      ? 'Muy pronto compartiremos cómo diseñamos recordatorios que respetan tu rutina.'
      : 'We will soon share how we design reminders that respect your routine.');

  $: currentLocale = ($localeStore ?? 'es') as 'es' | 'en';
  $: isEs = currentLocale === 'es';
  $: badge = isEs ? 'Próximamente' : 'Coming soon';
  $: title = postTitle;
  $: description = isEs
    ? 'Estamos ultimando detalles de esta nota. Suscríbete a las novedades para recibirla en cuanto la publiquemos.'
    : 'We are polishing this post. Subscribe to our updates to get it as soon as it goes live.';
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
