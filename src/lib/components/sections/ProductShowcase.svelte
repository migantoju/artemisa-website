<script lang="ts">
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { t, type Dictionary } from '$lib/i18n';

	const tStore = t;

	let dict: Dictionary | undefined;

	$: dict = $tStore as Dictionary;
	$: products = dict?.products;
</script>

{#if products}
	<section class="products" id="products" aria-labelledby="products-title">
		<div class="aurora aurora-one" aria-hidden="true"></div>
		<div class="aurora aurora-two" aria-hidden="true"></div>

		<header class="products-header">
			<p class="eyebrow">{products.title}</p>
			<h2 id="products-title">{products.caption}</h2>
		</header>

		<div class="product-grid">
			{#each products.cards as card, index}
				<article
					class="product-card"
					data-status={card.status}
					transition:scale={{ duration: 320, easing: quintOut, delay: index * 100 }}
				>
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
						<div class="media-glow" aria-hidden="true"></div>
					</div>

					<ul class="highlights">
						{#each card.highlights as highlight}
							<li>{highlight}</li>
						{/each}
					</ul>

					<a class="cta" href={card.href}>{card.ctaLabel}</a>
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

	.aurora {
		position: absolute;
		filter: blur(100px);
		border-radius: 50%;
		pointer-events: none;
		opacity: 0.55;
	}

	.aurora-one {
		top: -240px;
		right: -160px;
		width: 420px;
		height: 420px;
		background: radial-gradient(circle, rgba(103, 251, 214, 0.4), transparent 65%);
	}

	.aurora-two {
		bottom: 0;
		left: -220px;
		width: 360px;
		height: 360px;
		background: radial-gradient(circle, rgba(82, 110, 255, 0.42), transparent 65%);
	}

	.products-header {
		display: grid;
		gap: 0.85rem;
		max-width: 60ch;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.88rem;
		letter-spacing: 0.32em;
		text-transform: uppercase;
		font-weight: 700;
		color: rgba(184, 198, 255, 0.68);
	}

	h2 {
		margin: 0;
		font-size: clamp(1.9rem, 4vw, 2.4rem);
		line-height: 1.25;
		color: rgba(240, 244, 255, 0.92);
	}

	.product-grid {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: clamp(1.8rem, 4vw, 2.4rem);
		z-index: 1;
	}

	.product-card {
		position: relative;
		display: grid;
		gap: 1.5rem;
		padding: clamp(1.8rem, 3vw, 2.4rem);
		border-radius: 32px;
		border: 1px solid rgba(255, 255, 255, 0.07);
		background: linear-gradient(
				165deg,
				rgba(10, 16, 32, 0.92) 0%,
				rgba(8, 12, 26, 0.9) 45%,
				rgba(12, 18, 36, 0.8) 100%
			)
			0 0 / 100% 100%;
		backdrop-filter: blur(22px);
		box-shadow: 0 24px 60px rgba(6, 10, 24, 0.5);
		overflow: hidden;
		transform: translateZ(0);
		transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
	}

	.product-card::before {
		content: '';
		position: absolute;
		inset: -1px;
		border-radius: 32px;
		background: linear-gradient(135deg, rgba(101, 251, 210, 0.35), rgba(100, 126, 255, 0.35));
		opacity: 0;
		transition: opacity 0.35s ease;
		z-index: -1;
	}

	.product-card:hover {
		transform: translateY(-10px);
		box-shadow: 0 26px 70px rgba(26, 48, 90, 0.6);
	}

	.product-card:hover::before {
		opacity: 0.6;
	}

	.product-card[data-status='available'] .status-badge {
		color: rgba(15, 32, 22, 0.95);
		background: linear-gradient(135deg, #65fbd2 0%, #a5fee5 100%);
	}

	.product-card[data-status='wip'] .status-badge {
		color: rgba(14, 26, 35, 0.92);
		background: linear-gradient(135deg, #5a8bff 0%, #99b9ff 100%);
	}

	.card-top {
		display: grid;
		gap: 0.75rem;
	}

	h3 {
		margin: 0;
		font-size: clamp(1.4rem, 2.5vw, 1.8rem);
		color: #ffffff;
	}

	.description {
		margin: 0;
		font-size: 0.98rem;
		line-height: 1.6;
		color: rgba(220, 228, 255, 0.78);
	}

	.status-badge {
		justify-self: flex-start;
		padding: 0.4rem 0.9rem;
		border-radius: 999px;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		box-shadow: 0 8px 18px rgba(90, 120, 255, 0.35);
	}

	.media {
		position: relative;
		border-radius: 24px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(10, 14, 28, 0.9);
	}

	.media img {
		width: 100%;
		height: auto;
		display: block;
	}

	.media-glow {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.2), transparent 55%);
		mix-blend-mode: screen;
		opacity: 0.6;
	}

	.highlights {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.65rem;
		font-size: 0.95rem;
		color: rgba(214, 225, 255, 0.75);
	}

	.highlights li {
		position: relative;
		padding-left: 1.4rem;
		line-height: 1.5;
	}

	.highlights li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.55rem;
		width: 10px;
		height: 10px;
		border-radius: 999px;
		background: linear-gradient(135deg, #65fbd2, #6a7dff);
		box-shadow: 0 0 12px rgba(101, 251, 210, 0.4);
	}

	.cta {
		justify-self: flex-start;
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		font-weight: 600;
		color: #65fbd2;
		padding: 0.6rem 1.1rem 0.6rem 0.2rem;
		border-radius: 999px;
		transition: color 0.2s ease, transform 0.2s ease;
	}

	.cta::after {
		content: '↗';
		font-size: 0.92rem;
	}

	.cta:hover {
		color: #8bffdf;
		transform: translateX(4px);
	}

	@media (max-width: 960px) {
		.product-card {
			padding: 1.9rem;
		}
	}

	@media (max-width: 640px) {
		.products {
			padding-top: 2.5rem;
			padding-bottom: 2.5rem;
		}

		.product-card {
			padding: 1.6rem;
		}
	}
</style>
