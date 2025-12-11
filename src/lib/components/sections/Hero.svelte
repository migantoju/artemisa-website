<script lang="ts">
	import { onMount } from "svelte";
	import { t, type Dictionary } from "$lib/i18n";

	const tStore = t;
	let dict: Dictionary | undefined;

	$: dict = $tStore as Dictionary;
	$: sefoneCard = dict?.products.cards.find((card) => card.name === "Sefone");
	$: minervaxCard = dict?.products.cards.find(
		(card) => card.name === "Minervax",
	);
	$: hero = dict?.hero;

	let cardsContainer: HTMLElement;

	function handleMouseMove(e: MouseEvent) {
		if (!cardsContainer) return;
		const cards = cardsContainer.querySelectorAll(".card");

		cards.forEach((card) => {
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			const rotateX = ((y - centerY) / centerY) * -5;
			const rotateY = ((x - centerX) / centerX) * 5;

			(card as HTMLElement).style.transform =
				`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
		});
	}

	function handleMouseLeave() {
		if (!cardsContainer) return;
		const cards = cardsContainer.querySelectorAll(".card");
		cards.forEach((card) => {
			(card as HTMLElement).style.transform =
				`perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
		});
	}
</script>

{#if dict && hero && sefoneCard && minervaxCard}
	<section class="hero" id="top" aria-labelledby="hero-title">
		<div class="hero-content">
			<div class="copy">
				<div class="badge-wrapper">
					<span class="eyebrow-badge">{hero.eyebrow}</span>
				</div>
				<h1 id="hero-title">
					<span class="gradient-text">{hero.title}</span>
				</h1>
				<p class="subtitle">{hero.subtitle}</p>

				<div class="actions">
					<a href={hero.primaryHref} class="action primary">
						<span>{hero.primaryCta}</span>
						<div class="shine" aria-hidden="true"></div>
					</a>
					<a href={hero.secondaryHref} class="action secondary"
						>{hero.secondaryCta}</a
					>
				</div>

				<div class="stats">
					<div class="stat-item">
						<span class="stat-value">2+</span>
						<span class="stat-label">Products</span>
					</div>
					<div class="divider"></div>
					<div class="stat-item">
						<span class="stat-value">100%</span>
						<span class="stat-label">Innovation</span>
					</div>
				</div>
			</div>

			<div
				class="showcase"
				bind:this={cardsContainer}
				on:mousemove={handleMouseMove}
				on:mouseleave={handleMouseLeave}
				role="region"
				aria-label="Featured products"
			>
				<article class="card available">
					<div class="card-glow"></div>
					<div class="card-content">
						<div class="card-header">
							<span class="status available"
								>{hero.availableBadge}</span
							>
							<h2>{sefoneCard.name}</h2>
						</div>
						<p class="card-desc">{hero.sefoneTagline}</p>
						<div class="card-image">
							<img
								src={sefoneCard.placeholder}
								alt={sefoneCard.imageAlt}
								loading="lazy"
							/>
						</div>
						<a class="card-link" href={sefoneCard.href}>
							{sefoneCard.ctaLabel}
							<span aria-hidden="true">→</span>
						</a>
					</div>
				</article>

				<article class="card wip">
					<div class="card-glow"></div>
					<div class="card-content">
						<div class="card-header">
							<span class="status wip">{hero.wipBadge}</span>
							<h2>{minervaxCard.name}</h2>
						</div>
						<p class="card-desc">{hero.minervaxTagline}</p>
						<div class="card-image">
							<img
								src={minervaxCard.placeholder}
								alt={minervaxCard.imageAlt}
								loading="lazy"
							/>
						</div>
						<a class="card-link" href={minervaxCard.href}>
							{minervaxCard.ctaLabel}
							<span aria-hidden="true">→</span>
						</a>
					</div>
				</article>
			</div>
		</div>
	</section>
{/if}

<style>
	.hero {
		position: relative;
		padding: clamp(6rem, 12vw, 8rem) 0 clamp(4rem, 8vw, 6rem);
		overflow: visible;
	}

	.hero-content {
		width: min(1280px, 92vw);
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(2rem, 5vw, 4rem);
		align-items: center;
	}

	.copy {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		position: relative;
		z-index: 2;
	}

	.badge-wrapper {
		display: flex;
	}

	.eyebrow-badge {
		padding: 0.5rem 1rem;
		border-radius: 999px;
		background: rgba(0, 240, 255, 0.1);
		border: 1px solid rgba(0, 240, 255, 0.2);
		color: var(--primary);
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		box-shadow: 0 0 20px rgba(0, 240, 255, 0.15);
	}

	h1 {
		font-size: clamp(3rem, 6vw, 4.5rem);
		font-weight: 800;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.gradient-text {
		background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: clamp(1.1rem, 2vw, 1.25rem);
		color: var(--text-muted);
		max-width: 45ch;
		line-height: 1.7;
	}

	.actions {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	.action {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.9rem 2rem;
		border-radius: 12px;
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.3s ease;
		overflow: hidden;
	}

	.action.primary {
		background: var(--primary);
		color: #000;
		box-shadow: 0 0 30px rgba(0, 240, 255, 0.3);
	}

	.action.primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 0 40px rgba(0, 240, 255, 0.5);
	}

	.shine {
		position: absolute;
		top: 0;
		left: -100%;
		width: 50%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.5),
			transparent
		);
		transform: skewX(-20deg);
		transition: 0.5s;
	}

	.action.primary:hover .shine {
		left: 150%;
		transition: 0.5s;
	}

	.action.secondary {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: var(--text-main);
		backdrop-filter: blur(10px);
	}

	.action.secondary:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: var(--text-main);
	}

	.stats {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-top: 1rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.stat-item {
		display: flex;
		flex-direction: column;
	}

	.stat-value {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-main);
	}

	.stat-label {
		font-size: 0.85rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.divider {
		width: 1px;
		height: 40px;
		background: rgba(255, 255, 255, 0.1);
	}

	.showcase {
		display: grid;
		gap: 2rem;
		perspective: 1000px;
	}

	.card {
		position: relative;
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		border-radius: 24px;
		padding: 2px; /* For border gradient effect if needed */
		transition: transform 0.1s ease-out;
		transform-style: preserve-3d;
	}

	.card-content {
		background: rgba(10, 15, 30, 0.6);
		border-radius: 22px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		backdrop-filter: blur(20px);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.card-header h2 {
		font-size: 1.25rem;
		color: var(--text-main);
	}

	.status {
		font-size: 0.7rem;
		font-weight: 700;
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.status.available {
		background: rgba(0, 240, 255, 0.15);
		color: var(--primary);
		border: 1px solid rgba(0, 240, 255, 0.3);
	}

	.status.wip {
		background: rgba(112, 0, 255, 0.15);
		color: var(--secondary);
		border: 1px solid rgba(112, 0, 255, 0.3);
	}

	.card-desc {
		font-size: 0.9rem;
		color: var(--text-muted);
	}

	.card-image {
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.card-image img {
		width: 100%;
		height: auto;
		display: block;
		transition: transform 0.5s ease;
	}

	.card:hover .card-image img {
		transform: scale(1.05);
	}

	.card-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text-main);
		margin-top: auto;
	}

	.card-link:hover {
		color: var(--primary);
	}

	@media (max-width: 1024px) {
		.hero-content {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.copy {
			align-items: center;
		}

		.actions {
			justify-content: center;
		}

		.stats {
			justify-content: center;
		}

		.showcase {
			max-width: 600px;
			margin: 0 auto;
		}
	}
</style>
