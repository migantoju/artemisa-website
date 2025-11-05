<script lang="ts">
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { t, type Dictionary } from '$lib/i18n';

	const tStore = t;

	let dict: Dictionary | undefined;

	const float = spring(0, {
		stiffness: 0.08,
		damping: 0.2
	});

	onMount(() => {
		let frame: number;
		const animate = () => {
			const time = performance.now() / 1200;
			float.set(Math.sin(time));
			frame = requestAnimationFrame(animate);
		};

		animate();
		return () => cancelAnimationFrame(frame);
	});

	$: dict = $tStore as Dictionary;
	$: sefoneCard = dict?.products.cards.find((card) => card.name === 'Sefone');
	$: minervaxCard = dict?.products.cards.find((card) => card.name === 'Minervax');
	$: hero = dict?.hero;
</script>

{#if dict && hero && sefoneCard && minervaxCard}
	<section class="hero" id="top" aria-labelledby="hero-title">
		<div class="hero-background" aria-hidden="true">
			<div class="glow primary" style={`--offset:${$float * 15}px`}></div>
			<div class="glow secondary"></div>
			<div class="gridlines"></div>
		</div>

		<div class="hero-content">
			<div class="copy">
				<p class="eyebrow">{hero.eyebrow}</p>
				<h1 id="hero-title">{hero.title}</h1>
				<p class="subtitle">{hero.subtitle}</p>

				<div class="actions">
					<a href={hero.primaryHref} class="action primary">{hero.primaryCta}</a>
					<a href={hero.secondaryHref} class="action secondary">{hero.secondaryCta}</a>
				</div>

				<div class="product-tags" aria-hidden="true">
					<span>{hero.sefoneTagline}</span>
					<span>{hero.minervaxTagline}</span>
				</div>
			</div>

			<div class="showcase" aria-label="Featured products">
				<article class="card available">
					<div class="card-header">
						<span class="badge">{hero.availableBadge}</span>
						<h2>{sefoneCard.name}</h2>
						<p>{hero.sefoneTagline}</p>
					</div>
					<img
						src={sefoneCard.placeholder}
						alt={sefoneCard.imageAlt}
						width="600"
						height="400"
						loading="lazy"
					/>
					<ul>
						{#each sefoneCard.highlights as item}
							<li>{item}</li>
						{/each}
					</ul>
					<a class="card-link" href={sefoneCard.href}>
						{sefoneCard.ctaLabel}
					</a>
				</article>

				<article class="card wip">
					<div class="card-header">
						<span class="badge">{hero.wipBadge}</span>
						<h2>{minervaxCard.name}</h2>
						<p>{hero.minervaxTagline}</p>
					</div>
					<img
						src={minervaxCard.placeholder}
						alt={minervaxCard.imageAlt}
						width="600"
						height="400"
						loading="lazy"
					/>
					<ul>
						{#each minervaxCard.highlights as item}
							<li>{item}</li>
						{/each}
					</ul>
					<a class="card-link" href={minervaxCard.href}>
						{minervaxCard.ctaLabel}
					</a>
				</article>
			</div>
		</div>
	</section>
{/if}

<style>
	.hero {
		position: relative;
		padding: clamp(5rem, 8vw, 8rem) 0 clamp(4rem, 6vw, 6rem);
		overflow: hidden;
	}

	.hero-background {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.glow {
		position: absolute;
		width: 520px;
		height: 520px;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.6;
	}

	.glow.primary {
		top: -180px;
		right: -160px;
		background: radial-gradient(circle, rgba(84, 104, 255, 0.45), transparent 65%);
		transform: translateY(var(--offset));
		transition: transform 0.4s ease;
	}

	.glow.secondary {
		bottom: -220px;
		left: -160px;
		background: radial-gradient(circle, rgba(60, 210, 255, 0.42), transparent 70%);
	}

	.gridlines {
		position: absolute;
		inset: 0;
		background: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
		background-size: 80px 80px;
		mask-image: radial-gradient(circle at center, rgba(255, 255, 255, 0.9), transparent 70%);
		opacity: 0.4;
	}

	.hero-content {
		position: relative;
		width: min(1180px, 92vw);
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: clamp(1.5rem, 3vw, 3rem);
		align-items: center;
	}

	.copy {
		grid-column: span 6;
		display: flex;
		flex-direction: column;
		gap: 1.4rem;
	}

	.eyebrow {
		font-size: 0.95rem;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: rgba(184, 198, 255, 0.7);
		font-weight: 600;
	}

	h1 {
		font-size: clamp(2.6rem, 5vw, 3.75rem);
		line-height: 1.05;
		margin: 0;
		background: linear-gradient(135deg, #ffffff 0%, rgba(178, 199, 255, 0.85) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.subtitle {
		font-size: clamp(1.1rem, 2vw, 1.3rem);
		max-width: 32ch;
		color: rgba(224, 231, 255, 0.8);
		margin: 0;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.action {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.85rem 1.6rem;
		border-radius: 999px;
		font-weight: 600;
		font-size: 0.98rem;
		transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
	}

	.action.primary {
		background: linear-gradient(135deg, #5464ff 0%, #32d9ff 100%);
		color: #040611;
		box-shadow: 0 18px 28px rgba(70, 110, 255, 0.35);
	}

	.action.primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 24px 32px rgba(86, 140, 255, 0.4);
	}

	.action.secondary {
		background: rgba(26, 36, 64, 0.6);
		color: rgba(240, 243, 255, 0.85);
		border: 1px solid rgba(255, 255, 255, 0.12);
	}

	.action.secondary:hover {
		transform: translateY(-2px);
		background: rgba(34, 48, 90, 0.75);
	}

	.product-tags {
		display: inline-flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		font-size: 0.9rem;
		color: rgba(190, 203, 255, 0.65);
	}

	.product-tags span {
		padding: 0.4rem 0.9rem;
		border-radius: 999px;
		background: rgba(32, 44, 86, 0.45);
		border: 1px solid rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(12px);
	}

	.showcase {
		grid-column: span 6;
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: 1.5rem;
	}

	.card {
		position: relative;
		grid-column: span 6;
		background: rgba(8, 12, 24, 0.72);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 28px;
		padding: 1.8rem;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		overflow: hidden;
		box-shadow: 0 24px 48px rgba(5, 7, 15, 0.55);
		transform-style: preserve-3d;
		transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
	}

	.card.available {
		transform: translateY(-20px) rotate3d(1, -1, 0, 6deg);
	}

	.card.wip {
		transform: translateY(20px) rotate3d(1, 1, 0, 6deg);
	}

	.card:hover {
		transform: translateY(-6px);
		border-color: rgba(101, 251, 210, 0.4);
		box-shadow: 0 28px 52px rgba(40, 62, 120, 0.6);
	}

	.card-header {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.card-header h2 {
		margin: 0;
		font-size: 1.6rem;
		color: #ffffff;
	}

	.card-header p {
		margin: 0;
		font-size: 1rem;
		color: rgba(220, 227, 255, 0.7);
	}

	.badge {
		align-self: flex-start;
		padding: 0.35rem 0.8rem;
		border-radius: 999px;
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-weight: 700;
		background: rgba(90, 208, 255, 0.18);
		color: rgba(230, 240, 255, 0.8);
		border: 1px solid rgba(90, 208, 255, 0.35);
	}

	.card.available .badge {
		background: rgba(101, 251, 210, 0.2);
		border-color: rgba(101, 251, 210, 0.4);
		color: rgba(245, 255, 253, 0.85);
	}

	.card img {
		width: 100%;
		height: auto;
		border-radius: 18px;
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	.card ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.65rem;
		font-size: 0.95rem;
		color: rgba(214, 225, 255, 0.75);
	}

	.card ul li {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.card ul li::before {
		content: '';
		width: 8px;
		height: 8px;
		border-radius: 2px;
		background: linear-gradient(135deg, #65fbd2, #6a7dff);
	}

	.card-link {
		align-self: flex-start;
		margin-top: auto;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-weight: 600;
		color: #65fbd2;
	}

	.card-link::after {
		content: '↗';
		font-size: 0.9rem;
	}

	@media (max-width: 1024px) {
		.hero-content {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}

		.copy,
		.showcase {
			grid-column: auto;
		}

		.copy {
			text-align: center;
			align-items: center;
		}

		.subtitle {
			max-width: 48ch;
		}

		.product-tags {
			justify-content: center;
		}

		.showcase {
			grid-template-columns: 1fr;
		}

		.card.available,
		.card.wip {
			transform: none;
		}
	}

	@media (max-width: 640px) {
		.hero {
			padding-top: 4.5rem;
			padding-bottom: 3rem;
		}

		.actions {
			width: 100%;
		}

		.action {
			flex: 1 1 auto;
			text-align: center;
		}

		.card {
			padding: 1.4rem;
		}
	}
</style>
