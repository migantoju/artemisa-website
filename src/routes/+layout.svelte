<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import {
		locale,
		setLocale,
		t,
		type Dictionary,
		type Locale,
	} from "$lib/i18n";
	import { page } from "$app/stores";

	const localeStore = locale;
	const tStore = t;
	const pageStore = page;
	const BASE_URL = "https://artemisa.dev";

	let dict: Dictionary | undefined;
	let canonical = BASE_URL;
	let jsonLd: Record<string, unknown> | null = null;

	const localeOptions: { code: Locale; label: string }[] = [
		{ code: "es", label: "ES" },
		{ code: "en", label: "EN" },
	];

	const handleLocaleChange = (code: Locale) => {
		if ($localeStore !== code) {
			setLocale(code);
		}
	};

	$: dict = $tStore as Dictionary;
	$: seoHome = dict?.seo.home;
	$: canonical =
		`${BASE_URL}${$pageStore.url.pathname}`.replace(/\/$/, "") || BASE_URL;
	$: jsonLd = dict
		? {
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Artemisa Development",
				url: BASE_URL,
				description: dict.seo.home.description,
				logo: `${BASE_URL}/favicon.svg`,
				sameAs: [
					"https://twitter.com/artemisa_dev",
					"https://www.linkedin.com/company/artemisa-development",
					"https://instagram.com/artemisa.dev",
				],
				brand: {
					"@type": "Brand",
					name: "Artemisa Development",
				},
			}
		: null;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
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
		<script type="application/ld+json">
{JSON.stringify(jsonLd)}
		</script>
	{/if}
</svelte:head>

<div class="app-shell" data-locale={$localeStore}>
	<div class="skip-link">
		<a href="#main"
			>{$localeStore === "es"
				? "Saltar al contenido"
				: "Skip to content"}</a
		>
	</div>
	<div class="language-switch">
		{#each localeOptions as option}
			<button
				type="button"
				class:active={$localeStore === option.code}
				on:click={() => handleLocaleChange(option.code)}
				aria-label={option.code === "es"
					? "Cambiar a español"
					: "Switch to English"}
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
		color-scheme: dark;
		--bg-depth: #02040a;
		--bg-surface: #0a0f1e;
		--primary: #00f0ff;
		--primary-glow: rgba(0, 240, 255, 0.4);
		--secondary: #7000ff;
		--secondary-glow: rgba(112, 0, 255, 0.4);
		--text-main: #f0f4f8;
		--text-muted: #94a3b8;
		--glass-border: rgba(255, 255, 255, 0.08);
		--glass-bg: rgba(10, 15, 30, 0.6);
		--font-main: "DM Sans", "Inter", system-ui, sans-serif;
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
		font-family: var(--font-main);
		background-color: var(--bg-depth);
		color: var(--text-main);
		min-height: 100%;
		overflow-x: hidden;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		-webkit-font-smoothing: antialiased;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	:global(a:hover) {
		color: var(--primary);
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 0;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	:global(p) {
		margin: 0;
		line-height: 1.6;
		color: var(--text-muted);
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	/* Scrollbar */
	:global(::-webkit-scrollbar) {
		width: 8px;
	}
	:global(::-webkit-scrollbar-track) {
		background: var(--bg-depth);
	}
	:global(::-webkit-scrollbar-thumb) {
		background: #1e293b;
		border-radius: 4px;
	}
	:global(::-webkit-scrollbar-thumb:hover) {
		background: #334155;
	}

	.app-shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 1;
	}

	.skip-link {
		position: absolute;
		top: -40px;
		left: 12px;
		z-index: 2000;
	}

	.skip-link a {
		display: inline-block;
		background: var(--primary);
		color: #000;
		padding: 0.6rem 1rem;
		border-radius: 4px;
		font-weight: 700;
		transform: translateY(-100%);
		transition: transform 0.2s ease;
	}

	.skip-link a:focus {
		transform: translateY(40px);
	}

	.language-switch {
		position: fixed;
		z-index: 900;
		top: 1.5rem;
		right: 1.5rem;
		display: inline-flex;
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		backdrop-filter: blur(12px);
		border-radius: 999px;
		padding: 0.25rem;
		gap: 0.25rem;
	}

	.language-switch button {
		background: transparent;
		color: var(--text-muted);
		border: none;
		border-radius: 999px;
		padding: 0.4rem 0.9rem;
		font-size: 0.85rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.language-switch button:hover {
		color: var(--text-main);
	}

	.language-switch button.active {
		background: rgba(255, 255, 255, 0.1);
		color: var(--text-main);
		box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
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
			background: rgba(10, 15, 30, 0.85);
		}
	}
</style>
