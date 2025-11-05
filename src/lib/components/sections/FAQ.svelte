<script lang="ts">
	import { t, type Dictionary } from '$lib/i18n';

	const tStore = t;

	let dict: Dictionary | undefined;
	let openIndex: number | null = 0;

	const toggle = (index: number) => {
		openIndex = openIndex === index ? null : index;
	};

	$: dict = $tStore as Dictionary;
	$: faq = dict?.faq;
</script>

{#if faq}
	<section class="faq" id="faq" aria-labelledby="faq-title">
		<div class="surface">
			<header class="faq-header">
				<p class="eyebrow">{faq.title}</p>
				<h2 id="faq-title">{faq.caption}</h2>
			</header>

			<div class="accordion" role="list">
				{#each faq.items as item, index}
					<article class="accordion-item" role="listitem">
						<button
							type="button"
							class:open={openIndex === index}
							on:click={() => toggle(index)}
							aria-expanded={openIndex === index}
							aria-controls={`faq-panel-${index}`}
							id={`faq-trigger-${index}`}
						>
							<span class="marker" aria-hidden="true"></span>
							<span class="question">{item.question}</span>
							<span class="chevron" aria-hidden="true" data-open={openIndex === index}>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path
										d="M4 6l4 4 4-4"
										stroke="currentColor"
										stroke-width="1.6"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
						</button>
						{#if openIndex === index}
							<div
								class="panel"
								id={`faq-panel-${index}`}
								role="region"
								aria-labelledby={`faq-trigger-${index}`}
							>
								<p>{item.answer}</p>
							</div>
						{/if}
					</article>
				{/each}
			</div>
		</div>
	</section>
{/if}

<style>
	.faq {
		width: min(1100px, 92vw);
		margin: 0 auto;
		padding: clamp(3rem, 6vw, 4.5rem) 0;
	}

	.surface {
		position: relative;
		border-radius: 36px;
		padding: clamp(2.6rem, 5vw, 3.5rem) clamp(1.8rem, 4vw, 3rem);
		border: 1px solid rgba(255, 255, 255, 0.06);
		background: rgba(8, 12, 24, 0.78);
		backdrop-filter: blur(18px);
		box-shadow: 0 20px 48px rgba(6, 10, 24, 0.45);
		overflow: hidden;
	}

	.surface::before {
		content: '';
		position: absolute;
		top: -40%;
		right: -20%;
		width: 340px;
		height: 340px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(101, 251, 210, 0.35), transparent 65%);
		filter: blur(120px);
		opacity: 0.5;
		pointer-events: none;
	}

	.faq-header {
		position: relative;
		display: grid;
		gap: 0.8rem;
		margin-bottom: clamp(1.6rem, 3vw, 2.4rem);
	}

	.eyebrow {
		margin: 0;
		font-size: 0.9rem;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		font-weight: 700;
		color: rgba(184, 198, 255, 0.7);
	}

	h2 {
		margin: 0;
		font-size: clamp(1.7rem, 3vw, 2.2rem);
		line-height: 1.35;
		color: rgba(240, 244, 255, 0.94);
	}

	.accordion {
		position: relative;
		display: grid;
		gap: 1rem;
	}

	.accordion-item {
		border-radius: 22px;
		border: 1px solid rgba(255, 255, 255, 0.05);
		background: rgba(12, 16, 32, 0.72);
		box-shadow: 0 12px 28px rgba(6, 10, 24, 0.35);
		overflow: hidden;
	}

	button {
		all: unset;
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		width: 100%;
		font-weight: 600;
		font-size: 1rem;
		padding: 1.1rem clamp(1.2rem, 3vw, 1.6rem);
		cursor: pointer;
		color: rgba(240, 244, 255, 0.9);
		gap: 1rem;
	}

	button:hover {
		color: #ffffff;
	}

	.marker {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: linear-gradient(135deg, #65fbd2, #6a7dff);
		box-shadow: 0 0 18px rgba(101, 251, 210, 0.4);
	}

	.question {
		text-align: left;
	}

	button.open {
		background: rgba(22, 30, 54, 0.7);
	}

	.chevron {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.35rem;
		border-radius: 999px;
		color: rgba(184, 198, 255, 0.8);
		transition: transform 0.25s ease, color 0.25s ease, background 0.25s ease;
	}

	.chevron[data-open='true'] {
		transform: rotate(180deg);
		color: #65fbd2;
		background: rgba(101, 251, 210, 0.1);
	}

	.panel {
		padding: 0 1.6rem 1.4rem;
		color: rgba(214, 225, 255, 0.78);
		font-size: 0.97rem;
		line-height: 1.65;
	}

	.panel p {
		margin: 0;
	}

	@media (max-width: 640px) {
		.surface {
			padding: 2.2rem 1.4rem;
			border-radius: 28px;
		}

		button {
			font-size: 0.95rem;
		}
	}
</style>
