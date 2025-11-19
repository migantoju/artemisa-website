<script lang="ts">
	import { scale } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import { t, type Dictionary } from "$lib/i18n";

	const tStore = t;

	let dict: Dictionary | undefined;

	$: dict = $tStore as Dictionary;
	$: products = dict?.products;
</script>

{#if products}
	<section class="products" id="products" aria-labelledby="products-title">
		<header class="products-header">
			<div class="badge-wrapper">
				<span class="eyebrow-badge">{products.title}</span>
			</div>
			<h2 id="products-title">{products.caption}</h2>
		</header>

		<div class="product-grid">
			{#each products.cards as card, index}
				<article
					class="product-card"
					data-status={card.status}
					transition:scale={{
						duration: 320,
						easing: quintOut,
						delay: index * 100,
					}}
				>
					<div class="card-glow"></div>
					<div class="card-content">
						<div class="card-top">
							<span class="status-badge">{card.statusLabel}</span>
							<h3>{card.name}</h3>
							<p class="description">{card.description}</p>
						</div>

						<div class="media">
							<img
								src={card.placeholder}
								alt={card.imageAlt}
								width="600"
								height="400"
								loading="lazy"
							/>
							<div class="media-overlay"></div>
						</div>

						<ul class="highlights">
							{#each card.highlights as highlight}
								<li>{highlight}</li>
							{/each}
						</ul>

						<a class="cta" href={card.href}>
							{card.ctaLabel} <span aria-hidden="true">→</span>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</section>
{/if}

<style>
	.products {
		position: relative;
		width: min(1180px, 92vw);
		margin: 0 auto;
		display: grid;
		gap: clamp(2.5rem, 5vw, 3.5rem);
		padding: clamp(3rem, 5vw, 4rem) 0;
	}

	.products-header {
		display: grid;
		gap: 1rem;
		max-width: 60ch;
	}

	.badge-wrapper {
		display: flex;
	}

	.eyebrow-badge {
		padding: 0.4rem 0.9rem;
		border-radius: 999px;
		background: rgba(112, 0, 255, 0.1);
		border: 1px solid rgba(112, 0, 255, 0.2);
		color: var(--secondary);
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	h2 {
		margin: 0;
		font-size: clamp(2rem, 4vw, 2.8rem);
		line-height: 1.1;
		color: var(--text-main);
	}

	.product-grid {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: clamp(1.5rem, 3vw, 2rem);
		z-index: 1;
	}

	.product-card {
		position: relative;
		border-radius: 24px;
		background: var(--glass-bg);
		border: 1px solid var(--glass-border);
		padding: 2px;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		overflow: hidden;
	}

	.card-content {
		background: rgba(10, 15, 30, 0.6);
		border-radius: 22px;
		padding: clamp(1.5rem, 3vw, 2rem);
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		backdrop-filter: blur(20px);
	}

	.product-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
		border-color: rgba(255, 255, 255, 0.15);
	}

	.product-card[data-status="available"] .status-badge {
		color: var(--primary);
		background: rgba(0, 240, 255, 0.1);
		border: 1px solid rgba(0, 240, 255, 0.2);
	}

	.product-card[data-status="wip"] .status-badge {
		color: var(--secondary);
		background: rgba(112, 0, 255, 0.1);
		border: 1px solid rgba(112, 0, 255, 0.2);
	}

	.card-top {
		display: grid;
		gap: 0.75rem;
	}

	h3 {
		margin: 0;
		font-size: clamp(1.4rem, 2.5vw, 1.6rem);
		color: var(--text-main);
	}

	.description {
		margin: 0;
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-muted);
	}

	.status-badge {
		justify-self: flex-start;
		padding: 0.3rem 0.8rem;
		border-radius: 999px;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.media {
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(0, 0, 0, 0.3);
	}

	.media img {
		width: 100%;
		height: auto;
		display: block;
		transition: transform 0.5s ease;
	}

	.product-card:hover .media img {
		transform: scale(1.05);
	}

	.media-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
		pointer-events: none;
	}

	.highlights {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.65rem;
		font-size: 0.95rem;
		color: var(--text-muted);
	}

	.highlights li {
		position: relative;
		padding-left: 1.2rem;
		line-height: 1.5;
	}

	.highlights li::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0.6rem;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--primary);
		box-shadow: 0 0 8px var(--primary-glow);
	}

	.cta {
		justify-self: flex-start;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 600;
		color: var(--primary);
		margin-top: auto;
		transition: transform 0.2s ease;
	}

	.cta:hover {
		transform: translateX(4px);
	}

	@media (max-width: 640px) {
		.products {
			padding-top: 2.5rem;
			padding-bottom: 2.5rem;
		}

		.card-content {
			padding: 1.5rem;
		}
	}
</style>
