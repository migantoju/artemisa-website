<script lang="ts">
    import { t, type Dictionary } from '$lib/i18n';
    import MinervaxBeta from '$lib/components/sections/MinervaxBeta.svelte';

    export let project: 'sefone' | 'minervax';

    const tStore = t;

    let dict: Dictionary | undefined;
    let data: Dictionary['projectPages'][typeof project] | undefined;

    $: dict = $tStore as Dictionary;
    $: data = dict?.projectPages[project];
</script>

{#if data}
	<div class="project-page">
		<section class="hero">
			<div class="glow primary" aria-hidden="true"></div>
			<div class="glow secondary" aria-hidden="true"></div>

			<div class="hero-body">
				<div class="hero-copy">
					<p class="eyebrow">{data.hero.eyebrow}</p>
					<h1>{data.hero.title}</h1>
					<p class="subtitle">{data.hero.subtitle}</p>
					<div class="badges">
						<span class="status">{data.hero.statusBadge}</span>
					</div>
					<div class="hero-actions">
						<a class="primary" href={data.hero.primaryHref}>{data.hero.primaryCta}</a>
						<a class="secondary" href={data.hero.secondaryHref}>{data.hero.secondaryCta}</a>
					</div>
				</div>
				<div class="hero-media">
					<img
						src={data.hero.imagePlaceholder}
						alt={data.hero.imageAlt}
						width="900"
						height="600"
						loading="lazy"
					/>
				</div>
			</div>
		</section>

		<section class="overview">
			<div class="overview-content">
				<p class="eyebrow">{data.overview.title}</p>
				<h2>{data.overview.body}</h2>
				<ul>
					{#each data.overview.bullets as bullet}
						<li>{bullet}</li>
					{/each}
				</ul>
			</div>
			<div class="overview-media">
				<img
					src={data.overview.placeholder}
					alt={data.overview.placeholderAlt}
					width="600"
					height="400"
					loading="lazy"
				/>
			</div>
		</section>

		<section class="features">
			<header>
				<p class="eyebrow">{data.features.title}</p>
				<h2>{data.features.caption}</h2>
			</header>
			<div class="feature-grid">
				{#each data.features.items as item}
					<article>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</article>
				{/each}
			</div>
		</section>

		<section class="project-roadmap" id="roadmap">
			<header>
				<p class="eyebrow">{data.roadmap.title}</p>
				<h2>{data.roadmap.caption}</h2>
			</header>
			<div class="timeline">
				{#each data.roadmap.items as item}
					<div class="milestone">
						<p class="quarter">{item.quarter}</p>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="project-faq">
			<header>
				<p class="eyebrow">{data.faq.title}</p>
				<h2>{data.faq.caption}</h2>
			</header>
			<div class="faq-grid">
				{#each data.faq.items as item}
					<article>
						<h3>{item.question}</h3>
						<p>{item.answer}</p>
					</article>
				{/each}
			</div>
		</section>

        <section class="cta">
            <div class="cta-inner">
                <h2>{data.cta.title}</h2>
                <p>{data.cta.subtitle}</p>
                <a class="primary" href={data.cta.href}>{data.cta.button}</a>
            </div>
        </section>

        {#if project === 'minervax'}
            <MinervaxBeta />
        {/if}
    </div>
{/if}

<style>
	.project-page {
		display: flex;
		flex-direction: column;
		gap: clamp(3rem, 6vw, 4.5rem);
		padding: clamp(4rem, 8vw, 6rem) 0 clamp(3rem, 6vw, 5rem);
	}

	.eyebrow {
		margin: 0;
		font-size: 0.88rem;
		letter-spacing: 0.32em;
		text-transform: uppercase;
		font-weight: 700;
		color: rgba(184, 198, 255, 0.7);
	}

	.hero {
		position: relative;
		width: min(1140px, 92vw);
		margin: 0 auto;
		padding: clamp(3rem, 6vw, 4.5rem);
		border-radius: 40px;
		border: 1px solid rgba(255, 255, 255, 0.07);
		background: rgba(8, 12, 24, 0.8);
		backdrop-filter: blur(18px);
		box-shadow: 0 26px 60px rgba(6, 10, 24, 0.55);
		overflow: hidden;
	}

	.glow {
		position: absolute;
		width: 420px;
		height: 420px;
		border-radius: 50%;
		filter: blur(140px);
		opacity: 0.5;
		pointer-events: none;
	}

	.primary {
		top: -160px;
		left: -120px;
		background: radial-gradient(circle, rgba(98, 123, 255, 0.45), transparent 65%);
	}

	.secondary {
		bottom: -180px;
		right: -120px;
		background: radial-gradient(circle, rgba(101, 251, 210, 0.35), transparent 65%);
	}

	.hero-body {
		position: relative;
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: clamp(1.6rem, 4vw, 3rem);
		align-items: center;
		z-index: 1;
	}

	.hero-copy {
		grid-column: span 6;
		display: grid;
		gap: 1rem;
		color: rgba(224, 231, 255, 0.88);
	}

	h1 {
		margin: 0;
		font-size: clamp(2.4rem, 4.8vw, 3.6rem);
		line-height: 1.2;
		color: #ffffff;
	}

	.subtitle {
		margin: 0;
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.badges {
		display: inline-flex;
	}

	.status {
		padding: 0.4rem 0.9rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.15);
		background: rgba(20, 28, 52, 0.6);
		font-size: 0.8rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-weight: 600;
		color: rgba(240, 244, 255, 0.85);
	}

	.hero-actions {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}

	a.primary,
	a.secondary,
	.hero-actions .primary,
	.hero-actions .secondary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.85rem 1.6rem;
		border-radius: 999px;
		font-weight: 600;
		font-size: 0.98rem;
	}

	a.primary,
	.hero-actions .primary {
		background: linear-gradient(135deg, #65fbd2, #6a7dff);
		color: #041021;
		box-shadow: 0 18px 30px rgba(101, 251, 210, 0.35);
	}

	a.secondary,
	.hero-actions .secondary {
		background: rgba(18, 26, 48, 0.7);
		color: rgba(240, 244, 255, 0.85);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.hero-media {
		grid-column: span 6;
		border-radius: 32px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(12, 16, 36, 0.75);
		overflow: hidden;
		box-shadow: 0 18px 36px rgba(6, 10, 24, 0.4);
	}

	.hero-media img {
		width: 100%;
		height: auto;
		display: block;
	}

	.overview {
		width: min(1100px, 92vw);
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: clamp(1.8rem, 4vw, 3rem);
		align-items: center;
	}

	.overview-content {
		grid-column: span 6;
		display: grid;
		gap: 0.9rem;
		color: rgba(224, 231, 255, 0.88);
	}

	.overview-content h2 {
		margin: 0;
		font-size: clamp(1.6rem, 3vw, 2rem);
		line-height: 1.5;
	}

	.overview-content ul {
		margin: 0;
		padding-left: 1.2rem;
		display: grid;
		gap: 0.5rem;
		font-size: 1rem;
		line-height: 1.6;
		color: rgba(214, 225, 255, 0.75);
	}

	.overview-media {
		grid-column: span 6;
		border-radius: 32px;
		background: rgba(12, 16, 32, 0.72);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 16px 34px rgba(6, 10, 24, 0.38);
		padding: 1.5rem;
	}

	.overview-media img {
		width: 100%;
		height: auto;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	.features {
		width: min(1100px, 92vw);
		margin: 0 auto;
		display: grid;
		gap: clamp(1.6rem, 3vw, 2.4rem);
	}

	.features header h2 {
		margin: 0;
		font-size: clamp(1.6rem, 3vw, 2rem);
		color: rgba(240, 244, 255, 0.94);
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: clamp(1.2rem, 3vw, 1.8rem);
	}

	.feature-grid article {
		display: grid;
		gap: 0.6rem;
		padding: 1.6rem;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(12, 16, 32, 0.72);
		box-shadow: 0 14px 30px rgba(6, 10, 24, 0.32);
		color: rgba(220, 228, 255, 0.82);
	}

	.feature-grid h3 {
		margin: 0;
		font-size: 1.2rem;
		color: #ffffff;
	}

	.project-roadmap {
		width: min(1100px, 92vw);
		margin: 0 auto;
		display: grid;
		gap: clamp(1.6rem, 3vw, 2.4rem);
	}

	.timeline {
		display: grid;
		gap: 1rem;
	}

	.milestone {
		padding: 1.6rem;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(12, 16, 32, 0.72);
		box-shadow: 0 14px 30px rgba(6, 10, 24, 0.32);
		color: rgba(224, 231, 255, 0.85);
	}

	.quarter {
		margin: 0 0 0.4rem 0;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: rgba(184, 198, 255, 0.68);
		font-weight: 600;
	}

	.milestone h3 {
		margin: 0 0 0.4rem 0;
		font-size: 1.2rem;
		color: #ffffff;
	}

	.project-faq {
		width: min(1100px, 92vw);
		margin: 0 auto;
		display: grid;
		gap: clamp(1.6rem, 3vw, 2.4rem);
	}

	.project-faq header h2 {
		margin: 0;
		font-size: clamp(1.6rem, 3vw, 2rem);
		color: rgba(240, 244, 255, 0.92);
	}

	.faq-grid {
		display: grid;
		gap: 1.2rem;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	}

	.faq-grid article {
		padding: 1.6rem;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(12, 16, 32, 0.72);
		box-shadow: 0 12px 28px rgba(6, 10, 24, 0.3);
		color: rgba(220, 228, 255, 0.82);
		display: grid;
		gap: 0.6rem;
	}

	.faq-grid h3 {
		margin: 0;
		font-size: 1.1rem;
		color: #ffffff;
	}

	.cta {
		width: min(900px, 86vw);
		margin: 0 auto;
	}

	.cta-inner {
		padding: 2.4rem clamp(1.6rem, 4vw, 2.6rem);
		border-radius: 36px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: linear-gradient(140deg, rgba(10, 16, 32, 0.92), rgba(12, 22, 46, 0.84));
		box-shadow: 0 24px 56px rgba(6, 10, 24, 0.45);
		display: grid;
		gap: 1.1rem;
		text-align: center;
		color: rgba(224, 231, 255, 0.9);
	}

	.cta-inner h2 {
		margin: 0;
		font-size: clamp(1.6rem, 3vw, 2rem);
		color: #ffffff;
	}

	.cta-inner p {
		margin: 0;
		font-size: 1rem;
		line-height: 1.6;
	}

	.cta-inner .primary {
		justify-self: center;
		padding: 0.85rem 1.8rem;
	}

	@media (max-width: 900px) {
		.hero-body,
		.overview {
			grid-template-columns: 1fr;
		}

		.hero-copy,
		.hero-media,
		.overview-content,
		.overview-media {
			grid-column: auto;
		}

		.hero-media,
		.overview-media {
			order: -1;
		}
	}

	@media (max-width: 640px) {
		.hero,
		.cta-inner {
			border-radius: 28px;
		}

		.hero-actions {
			width: 100%;
		}

		.hero-actions .primary,
		.hero-actions .secondary {
			flex: 1 1 auto;
		}
	}
</style>
