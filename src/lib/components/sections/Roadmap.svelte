<script lang="ts">
	import { t, type Dictionary } from '$lib/i18n';
	import { quadOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const tStore = t;

	let dict: Dictionary | undefined;

	$: dict = $tStore as Dictionary;
	$: roadmap = dict?.roadmap;
</script>

{#if roadmap}
	<section class="roadmap" id="roadmap" aria-labelledby="roadmap-title">
		<div class="backdrop" aria-hidden="true"></div>
		<div class="backdrop secondary" aria-hidden="true"></div>

		<header class="roadmap-header">
			<p class="eyebrow">{roadmap.title}</p>
			<h2 id="roadmap-title">{roadmap.caption}</h2>
			<div class="legend" aria-label="Roadmap legend">
				<span class="legend-chip sefone">Sefone</span>
				<span class="legend-chip minervax">Minervax</span>
			</div>
		</header>

		<div class="timeline" role="list">
			{#each roadmap.items as item, index}
				<article
					class="milestone"
					data-product={item.product}
					role="listitem"
					transition:fly={{ y: 32, duration: 420, easing: quadOut, delay: index * 90 }}
				>
					<div class="marker">
						<span></span>
					</div>
					<div class="content">
						<p class="quarter">{item.quarter}</p>
						<h3>{item.title}</h3>
						<p class="description">{item.description}</p>
					</div>
				</article>
			{/each}
		</div>
	</section>
{/if}

<style>
	.roadmap {
		position: relative;
		width: min(1100px, 92vw);
		margin: 0 auto;
		padding: clamp(3rem, 6vw, 5rem) clamp(1.6rem, 4vw, 3rem);
		border-radius: 36px;
		border: 1px solid rgba(255, 255, 255, 0.07);
		background: rgba(8, 12, 24, 0.78);
		backdrop-filter: blur(18px);
		box-shadow: 0 24px 64px rgba(6, 10, 24, 0.48);
		display: grid;
		gap: clamp(2rem, 4vw, 3rem);
		overflow: hidden;
	}

	.backdrop {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: radial-gradient(circle at 30% -10%, rgba(96, 123, 255, 0.3), transparent 60%);
		opacity: 0.8;
	}

	.backdrop.secondary {
		background: radial-gradient(circle at 80% 110%, rgba(49, 210, 255, 0.2), transparent 60%);
		mix-blend-mode: lighten;
	}

	.roadmap-header {
		position: relative;
		display: grid;
		gap: 1rem;
		max-width: 62ch;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.9rem;
		letter-spacing: 0.32em;
		text-transform: uppercase;
		font-weight: 700;
		color: rgba(184, 198, 255, 0.7);
	}

	h2 {
		margin: 0;
		font-size: clamp(1.9rem, 3.6vw, 2.3rem);
		line-height: 1.35;
		color: rgba(240, 244, 255, 0.95);
	}

	.legend {
		display: inline-flex;
		gap: 0.6rem;
		align-items: center;
	}

	.legend-chip {
		padding: 0.4rem 0.9rem;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 600;
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		color: rgba(240, 244, 255, 0.85);
		background: rgba(20, 28, 48, 0.7);
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	.legend-chip::before {
		content: '';
		width: 9px;
		height: 9px;
		border-radius: 50%;
	}

	.legend-chip.sefone::before {
		background: linear-gradient(135deg, #65fbd2, #9cffe3);
	}

	.legend-chip.minervax::before {
		background: linear-gradient(135deg, #6a7dff, #9eb0ff);
	}

	.timeline {
		position: relative;
		display: grid;
		gap: 1.8rem;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: clamp(0.8rem, 4vw, 1.6rem);
		top: 0;
		bottom: 0;
		width: 2px;
		background: linear-gradient(180deg, rgba(101, 251, 210, 0.4), rgba(98, 123, 255, 0.15));
	}

	.milestone {
		position: relative;
		display: grid;
		grid-template-columns: clamp(40px, 6vw, 56px) 1fr;
		gap: clamp(1rem, 3vw, 2.2rem);
		padding: clamp(1.2rem, 2.5vw, 1.8rem);
		border-radius: 26px;
		border: 1px solid rgba(255, 255, 255, 0.06);
		background: rgba(12, 16, 32, 0.72);
		backdrop-filter: blur(14px);
		box-shadow: 0 18px 36px rgba(6, 10, 24, 0.45);
	}

	.milestone[data-product='sefone'] {
		border-color: rgba(101, 251, 210, 0.35);
	}

	.milestone[data-product='minervax'] {
		border-color: rgba(106, 125, 255, 0.35);
	}

	.milestone[data-product='all'] {
		border-color: rgba(240, 244, 255, 0.2);
	}

	.marker {
		position: relative;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding-top: 0.2rem;
	}

	.marker span {
		display: block;
		width: clamp(14px, 3vw, 18px);
		height: clamp(14px, 3vw, 18px);
		border-radius: 50%;
		background: linear-gradient(135deg, #65fbd2, #6a7dff);
		box-shadow: 0 0 18px rgba(101, 251, 210, 0.5);
	}

	.milestone[data-product='minervax'] .marker span {
		background: linear-gradient(135deg, #6a7dff, #9eb0ff);
		box-shadow: 0 0 18px rgba(106, 125, 255, 0.5);
	}

	.milestone[data-product='all'] .marker span {
		background: linear-gradient(135deg, #f0f4ff, #9eb0ff);
		box-shadow: 0 0 18px rgba(240, 244, 255, 0.45);
	}

	.content {
		display: grid;
		gap: 0.5rem;
	}

	.quarter {
		margin: 0;
		font-size: 0.9rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(184, 198, 255, 0.75);
	}

	h3 {
		margin: 0;
		font-size: clamp(1.25rem, 2.6vw, 1.5rem);
		color: #ffffff;
		line-height: 1.35;
	}

	.description {
		margin: 0;
		font-size: 0.97rem;
		line-height: 1.6;
		color: rgba(218, 226, 255, 0.78);
	}

	@media (max-width: 720px) {
		.roadmap {
			padding: 2.6rem 1.4rem;
			border-radius: 28px;
		}

		.timeline::before {
			left: 14px;
		}

		.milestone {
			grid-template-columns: auto 1fr;
			padding: 1.2rem;
		}

		.marker span {
			width: 14px;
			height: 14px;
		}
	}
</style>
