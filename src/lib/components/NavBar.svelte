<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import { locale, t, type Dictionary, type Locale } from "$lib/i18n";
	import LogoMark from "$lib/components/logo/LogoMark.svelte";

	const localeStore = locale;
	const tStore = t;

	let menuOpen = false;
	let dict: Dictionary | undefined;
	let links: { id: string; href: string; label: string }[] = [];
	let ctaLabel = "";
	let currentLocale: Locale = "es";
	let menuButtonLabel = "Abrir menú de navegación";
	let statusLabel = "";

	const menuLabels: Record<Locale, { open: string; close: string }> = {
		es: {
			open: "Abrir menú de navegación",
			close: "Cerrar menú de navegación",
		},
		en: {
			open: "Open navigation menu",
			close: "Close navigation menu",
		},
	};

	const handleLinkClick = () => {
		menuOpen = false;
	};

	$: dict = $tStore as Dictionary;
	$: links =
		dict === undefined
			? []
			: [
					{ id: "home", href: "#top", label: dict.nav.home },
					{
						id: "products",
						href: "#products",
						label: dict.nav.products,
					},
					{
						id: "roadmap",
						href: "#roadmap",
						label: dict.nav.roadmap,
					},
					{ id: "blog", href: "#blog", label: dict.nav.blog },
					{ id: "faq", href: "#faq", label: dict.nav.faq },
					{
						id: "contact",
						href: "#contact",
						label: dict.nav.contact,
					},
				];
	$: ctaLabel = dict?.cta.button ?? "";
	$: statusLabel =
		currentLocale === "es"
			? "Sitio en construcción — contenido en evolución"
			: "Site in progress — evolving content";

	$: currentLocale = ($localeStore as Locale) ?? "es";
	$: menuButtonLabel = menuOpen
		? menuLabels[currentLocale].close
		: menuLabels[currentLocale].open;
</script>

<div class="nav-wrapper">
	<div class="status-banner" role="note" aria-live="polite">
		<span class="pulse" aria-hidden="true"></span>
		<span class="status-text">{statusLabel}</span>
	</div>
	<nav class="nav" aria-label="Primary">
		<LogoMark href="/" variant="full" />

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
						<a
							href={link.href}
							class="nav-link"
							on:click={handleLinkClick}
						>
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
</div>

<style>
	.nav-wrapper {
		position: sticky;
		z-index: 820;
		top: 0.5rem;
		display: grid;
		gap: 0.5rem;
		width: min(92%, 1120px);
		margin: 0 auto;
	}

	.status-banner {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.55rem 1rem;
		border-radius: 999px;
		background: var(--glass-bg);
		backdrop-filter: blur(14px);
		border: 1px solid var(--glass-border);
		box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
		color: var(--text-muted);
		font-size: 0.85rem;
		font-weight: 500;
	}

	.pulse {
		display: inline-flex;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--primary);
		position: relative;
		box-shadow: 0 0 8px var(--primary-glow);
	}

	.pulse::after {
		content: "";
		position: absolute;
		inset: -4px;
		border-radius: 50%;
		border: 1px solid var(--primary);
		opacity: 0.5;
		animation: ping 1.6s ease-out infinite;
	}

	@keyframes ping {
		0% {
			transform: scale(0.6);
			opacity: 0.9;
		}
		100% {
			transform: scale(1.6);
			opacity: 0;
		}
	}

	.status-text {
		letter-spacing: 0.02em;
	}

	.nav {
		position: sticky;
		top: 0;
		z-index: 800;
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		padding: 0.75rem 1.25rem;
		border-radius: 999px;
		background: rgba(10, 15, 30, 0.75);
		backdrop-filter: blur(20px);
		border: 1px solid var(--glass-border);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
		gap: 1rem;
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
		color: var(--text-muted);
		padding: 0.4rem 0.6rem;
		transition: color 0.2s ease;
	}

	.nav-link::after {
		content: "";
		position: absolute;
		left: 50%;
		bottom: -0.3rem;
		width: 0;
		height: 2px;
		background: var(--primary);
		border-radius: 999px;
		transition:
			width 0.2s ease,
			left 0.2s ease;
		box-shadow: 0 0 8px var(--primary-glow);
	}

	.nav-link:hover {
		color: var(--text-main);
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
		background: var(--primary);
		color: #000;
		box-shadow: 0 0 15px var(--primary-glow);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 0 25px var(--primary-glow);
	}

	.desktop {
		display: flex;
	}

	.menu-toggle {
		display: none;
		position: relative;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid var(--glass-border);
		background: rgba(255, 255, 255, 0.05);
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
		background: var(--text-main);
		border-radius: 1px;
		transition:
			transform 0.2s ease,
			opacity 0.2s ease;
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
		background: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(8px);
		z-index: 750;
		cursor: pointer;
	}

	.mobile-menu {
		position: fixed;
		top: 1rem;
		right: 1rem;
		left: 1rem;
		background: var(--bg-surface);
		border: 1px solid var(--glass-border);
		border-radius: 24px;
		box-shadow: 0 22px 50px rgba(0, 0, 0, 0.8);
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
		.nav-wrapper {
			width: min(94%, 520px);
			gap: 0.45rem;
		}

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
	}

	@media (max-width: 520px) {
		.nav-wrapper {
			top: 0.35rem;
		}

		.nav {
			width: 100%;
			padding: 0.75rem 1rem;
		}
	}
</style>
