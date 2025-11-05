<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { locale, t, type Dictionary, type Locale } from '$lib/i18n';

	const localeStore = locale;
	const tStore = t;

	let menuOpen = false;
	let dict: Dictionary | undefined;
	let links: { id: string; href: string; label: string }[] = [];
	let ctaLabel = '';
	let currentLocale: Locale = 'es';
	let menuButtonLabel = 'Abrir menú de navegación';

	const menuLabels: Record<Locale, { open: string; close: string }> = {
		es: {
			open: 'Abrir menú de navegación',
			close: 'Cerrar menú de navegación'
		},
		en: {
			open: 'Open navigation menu',
			close: 'Close navigation menu'
		}
	};

	const handleLinkClick = () => {
		menuOpen = false;
	};

	$: dict = $tStore as Dictionary;
	$: links =
		dict === undefined
			? []
			: [
					{ id: 'home', href: '#top', label: dict.nav.home },
					{ id: 'products', href: '#products', label: dict.nav.products },
					{ id: 'roadmap', href: '#roadmap', label: dict.nav.roadmap },
					{ id: 'blog', href: '#blog', label: dict.nav.blog },
					{ id: 'faq', href: '#faq', label: dict.nav.faq },
					{ id: 'contact', href: '#contact', label: dict.nav.contact }
				];
	$: ctaLabel = dict?.cta.button ?? '';

	$: currentLocale = ($localeStore as Locale) ?? 'es';
	$: menuButtonLabel = menuOpen
		? menuLabels[currentLocale].close
		: menuLabels[currentLocale].open;
</script>

<nav class="nav" aria-label="Primary">
	<a class="logo" href="/">
		<span aria-hidden="true" class="wordmark">Artemisa</span>
		<span aria-hidden="true" class="spark">•</span>
		<span aria-hidden="true" class="wordmark">Dev</span>
		<span class="sr-only">Artemisa Development</span>
	</a>

	<div class="nav-items desktop">
		{#each links as link}
			<a href={link.href} class="nav-link">{link.label}</a>
		{/each}
	</div>

	<a class="cta desktop" href="#updates">{ctaLabel}</a>

	<button
		type="button"
		class="menu-toggle"
		on:click={() => (menuOpen = !menuOpen)}
		aria-expanded={menuOpen}
		aria-controls="mobile-nav"
		aria-label={menuButtonLabel}
	>
		<span class:open={menuOpen}></span>
		<span class:open={menuOpen}></span>
		<span class:open={menuOpen}></span>
	</button>

	{#if menuOpen}
		<button
			type="button"
			class="backdrop"
			on:click={handleLinkClick}
			aria-label={menuLabels[currentLocale].close}
			transition:fade
		></button>
	{/if}

	{#if menuOpen}
		<div
			id="mobile-nav"
			class="mobile-menu"
			role="dialog"
			aria-modal="true"
			transition:fly={{ y: -16, duration: 180 }}
		>
			<div class="mobile-inner">
				{#each links as link}
					<a href={link.href} class="nav-link" on:click={handleLinkClick}>
						{link.label}
					</a>
				{/each}
				<a class="cta" href="#updates" on:click={handleLinkClick}>
					{ctaLabel}
				</a>
			</div>
		</div>
	{/if}
</nav>

<style>
	.nav {
		position: sticky;
		top: 0.75rem;
		z-index: 800;
		margin: 0 auto;
		width: min(92%, 1120px);
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		padding: 0.85rem 1.3rem;
		border-radius: 999px;
		background: rgba(8, 12, 24, 0.68);
		backdrop-filter: blur(18px);
		border: 1px solid rgba(255, 255, 255, 0.06);
		box-shadow: 0 18px 40px rgba(6, 10, 22, 0.45);
		gap: 1rem;
	}

	.logo {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 1.1rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #f8fbff;
	}

	.wordmark {
		background: linear-gradient(135deg, #f8fbff 0%, rgba(180, 194, 255, 0.85) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.spark {
		font-size: 0.9rem;
		color: #65fbd2;
		transform: translateY(-1px);
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
		white-space: nowrap;
	}

	.nav-items {
		display: flex;
		gap: 1.2rem;
		align-items: center;
		justify-content: center;
	}

	.nav-link {
		position: relative;
		font-size: 0.95rem;
		font-weight: 500;
		color: rgba(240, 243, 255, 0.82);
		padding: 0.4rem 0.6rem;
		transition: color 0.2s ease;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		left: 50%;
		bottom: -0.3rem;
		width: 0;
		height: 2px;
		background: linear-gradient(135deg, #65fbd2, #6a7dff);
		border-radius: 999px;
		transition: width 0.2s ease, left 0.2s ease;
	}

	.nav-link:hover {
		color: #ffffff;
	}

	.nav-link:hover::after {
		width: 100%;
		left: 0;
	}

	.cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.55rem 1.2rem;
		border-radius: 999px;
		font-weight: 600;
		font-size: 0.95rem;
		background: linear-gradient(135deg, #5669ff 0%, #36d1ff 100%);
		color: #05070f;
		box-shadow: 0 12px 24px rgba(54, 105, 255, 0.35);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 14px 28px rgba(86, 130, 255, 0.45);
	}

	.desktop {
		display: flex;
	}

	.menu-toggle {
		display: none;
		position: relative;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(12, 16, 32, 0.7);
		backdrop-filter: blur(12px);
		cursor: pointer;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}

	.menu-toggle span {
		display: block;
		width: 18px;
		height: 2px;
		background: rgba(248, 251, 255, 0.8);
		border-radius: 1px;
		transition: transform 0.2s ease, opacity 0.2s ease;
	}

	.menu-toggle span:nth-child(1).open {
		transform: translateY(5px) rotate(45deg);
	}

	.menu-toggle span:nth-child(2).open {
		opacity: 0;
	}

	.menu-toggle span:nth-child(3).open {
		transform: translateY(-5px) rotate(-45deg);
	}

	.backdrop {
		appearance: none;
		border: none;
		position: fixed;
		inset: 0;
		background: rgba(5, 7, 15, 0.65);
		backdrop-filter: blur(6px);
		z-index: 750;
		cursor: pointer;
	}

	.mobile-menu {
		position: fixed;
		top: 1rem;
		right: 1rem;
		left: 1rem;
		background: rgba(8, 12, 24, 0.95);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 24px;
		box-shadow: 0 22px 50px rgba(4, 6, 16, 0.6);
		padding: 1.4rem;
		z-index: 900;
	}

	.mobile-inner {
		display: grid;
		gap: 0.9rem;
	}

	.mobile-inner .nav-link {
		font-size: 1.05rem;
		padding: 0.45rem 0.6rem;
	}

	.mobile-inner .cta {
		margin-top: 0.5rem;
	}

	@media (max-width: 900px) {
		.nav {
			grid-template-columns: auto auto;
			gap: 0.75rem;
		}

		.nav-items.desktop,
		.cta.desktop {
			display: none;
		}

		.menu-toggle {
			display: inline-flex;
			justify-self: end;
		}

		.logo {
			font-size: 1rem;
		}
	}

	@media (max-width: 520px) {
		.nav {
			width: min(94%, 480px);
			padding: 0.75rem 1rem;
			top: 0.5rem;
		}
	}
</style>
