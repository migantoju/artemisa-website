<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { locale, setLocale, t, type Dictionary, type Locale } from '$lib/i18n';
	import { page } from '$app/stores';

	const localeStore = locale;
const tStore = t;
const pageStore = page;
const BASE_URL = 'https://artemisa.dev';

let dict: Dictionary | undefined;
let canonical = BASE_URL;
let jsonLd: Record<string, unknown> | null = null;

	const localeOptions: { code: Locale; label: string }[] = [
		{ code: 'es', label: 'ES' },
		{ code: 'en', label: 'EN' }
	];

	const handleLocaleChange = (code: Locale) => {
		if ($localeStore !== code) {
			setLocale(code);
		}
	};

	$: dict = $tStore as Dictionary;
	$: seoHome = dict?.seo.home;
	$: canonical = `${BASE_URL}${$pageStore.url.pathname}`.replace(/\/$/, '') || BASE_URL;
	$: jsonLd = dict
		? {
				'@context': 'https://schema.org',
				'@type': 'Organization',
				name: 'Artemisa Development',
				url: BASE_URL,
				description: dict.seo.home.description,
				logo: `${BASE_URL}/favicon.svg`,
				sameAs: [
					'https://twitter.com/artemisa_dev',
					'https://www.linkedin.com/company/artemisa-development',
					'https://instagram.com/artemisa.dev'
				],
				brand: {
					'@type': 'Brand',
					name: 'Artemisa Development'
				}
			}
		: null;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
		rel="stylesheet"
	/>
	<link rel="icon" href={favicon} />
	{#if seoHome}
		<title>{seoHome.title}</title>
		<meta name="description" content={seoHome.description} />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={seoHome.title} />
		<meta property="og:description" content={seoHome.description} />
		<meta property="og:url" content={canonical} />
		<meta property="og:image" content={seoHome.ogImage} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={seoHome.title} />
		<meta name="twitter:description" content={seoHome.description} />
		<meta name="twitter:image" content={seoHome.ogImage} />
		<link rel="canonical" href={canonical} />
		<link rel="alternate" hreflang="es" href={canonical} />
		<link rel="alternate" hreflang="en" href={canonical} />
	{/if}
	{#if jsonLd}
		<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
	{/if}
</svelte:head>

<div class="app-shell" data-locale={$localeStore}>
	<div class="skip-link">
		<a href="#main">{$localeStore === 'es' ? 'Saltar al contenido' : 'Skip to content'}</a>
	</div>
	<div class="language-switch">
		{#each localeOptions as option}
			<button
				type="button"
				class:active={$localeStore === option.code}
				on:click={() => handleLocaleChange(option.code)}
				aria-label={option.code === 'es' ? 'Cambiar a español' : 'Switch to English'}
			>
				{option.label}
			</button>
		{/each}
	</div>
	<main id="main" class="page-surface">
		<slot />
	</main>
</div>

<style>
	:global(:root) {
		color-scheme: dark light;
	}

	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		font-family:
			'DM Sans',
			'Inter',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			sans-serif;
		background-color: #05070f;
		color: #f8fbff;
		min-height: 100%;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	.app-shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background: radial-gradient(120% 120% at 50% 0%, rgba(108, 121, 255, 0.16), transparent),
			radial-gradient(100% 120% at 0% 100%, rgba(24, 209, 198, 0.14), transparent),
			linear-gradient(180deg, #05070f 0%, #0d1125 100%);
	}

	.skip-link {
		position: absolute;
		top: -40px;
		left: 12px;
		z-index: 1000;
	}

	.skip-link a {
		display: inline-block;
		background: rgba(12, 20, 40, 0.9);
		color: #f8fbff;
		padding: 0.6rem 1rem;
		border-radius: 999px;
		font-size: 0.875rem;
		font-weight: 600;
		box-shadow: 0 8px 20px rgba(5, 7, 15, 0.35);
		transform: translateY(-8px);
		transition: transform 0.2s ease, opacity 0.2s ease;
		opacity: 0;
	}

	.skip-link a:focus {
		transform: translateY(0);
		opacity: 1;
	}

	.language-switch {
		position: fixed;
		z-index: 900;
		top: 1.5rem;
		right: 1.5rem;
		display: inline-flex;
		background: rgba(12, 16, 32, 0.72);
		border: 1px solid rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(12px);
		border-radius: 999px;
		padding: 0.25rem;
		box-shadow: 0 12px 24px rgba(5, 7, 15, 0.4);
		gap: 0.25rem;
	}

	.language-switch button {
		background: transparent;
		color: rgba(248, 251, 255, 0.72);
		border: none;
		border-radius: 999px;
		padding: 0.4rem 0.9rem;
		font-size: 0.85rem;
		font-weight: 600;
		cursor: pointer;
		transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
	}

	.language-switch button:hover {
		color: #ffffff;
	}

	.language-switch button.active {
		background: linear-gradient(135deg, #5066ff 0%, #32d9ff 100%);
		color: #05070f;
		box-shadow: 0 8px 16px rgba(50, 105, 255, 0.36);
		transform: translateY(-1px);
	}

	.page-surface {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 640px) {
		.language-switch {
			top: auto;
			right: 50%;
			transform: translateX(50%);
			bottom: 1.5rem;
		}

		.language-switch button {
			padding: 0.4rem 0.75rem;
			font-size: 0.8rem;
		}
	}
</style>
