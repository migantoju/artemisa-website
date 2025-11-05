<script lang="ts">
	import { t, type Dictionary } from '$lib/i18n';

	const tStore = t;

	let dict: Dictionary | undefined;

	$: dict = $tStore as Dictionary;
	$: cta = dict?.cta;
</script>

{#if cta}
	<section class="cta" id="updates" aria-labelledby="cta-title">
		<div class="canvas" aria-hidden="true">
			<div class="beam"></div>
			<div class="pulse"></div>
		</div>
		<div class="content">
			<header>
				<h2 id="cta-title">{cta.title}</h2>
				<p>{cta.subtitle}</p>
			</header>
			<div class="actions">
				<a class="primary" href="mailto:hola@artemisa.dev?subject=Quiero%20unirme%20a%20las%20novedades">
					{cta.button}
				</a>
				<img
					class="placeholder"
					src={cta.placeholder}
					alt="Newsletter signup placeholder"
					width="800"
					height="400"
					loading="lazy"
				/>
			</div>
		</div>
	</section>
{/if}

<style>
	.cta {
		position: relative;
		width: min(1100px, 90vw);
		margin: 0 auto;
		padding: clamp(3rem, 6vw, 4.5rem) clamp(1.6rem, 4vw, 3rem);
		border-radius: 40px;
		border: 1px solid rgba(255, 255, 255, 0.07);
		background: linear-gradient(140deg, rgba(10, 16, 32, 0.94), rgba(14, 22, 46, 0.84));
		box-shadow: 0 24px 60px rgba(6, 10, 26, 0.5);
		overflow: hidden;
	}

	.canvas {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.beam {
		position: absolute;
		top: -30%;
		left: -10%;
		width: 140%;
		height: 120%;
		background: radial-gradient(circle at 20% 20%, rgba(101, 251, 210, 0.35), transparent 60%);
		filter: blur(120px);
		opacity: 0.5;
	}

	.pulse {
		position: absolute;
		bottom: -40%;
		right: -10%;
		width: 120%;
		height: 120%;
		background: radial-gradient(circle at 60% 40%, rgba(98, 123, 255, 0.4), transparent 60%);
		filter: blur(140px);
		opacity: 0.45;
	}

	.content {
		position: relative;
		display: grid;
		gap: clamp(1.5rem, 3vw, 2.5rem);
		z-index: 1;
	}

	header {
		display: grid;
		gap: 0.8rem;
		max-width: 60ch;
		color: rgba(240, 244, 255, 0.95);
	}

	h2 {
		margin: 0;
		font-size: clamp(2rem, 4vw, 2.5rem);
		line-height: 1.2;
	}

	header p {
		margin: 0;
		font-size: 1rem;
		line-height: 1.7;
		color: rgba(214, 225, 255, 0.8);
	}

	.actions {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: clamp(1.2rem, 3vw, 2rem);
		align-items: center;
	}

	.primary {
		grid-column: span 4;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: 0.9rem 1.8rem;
		border-radius: 999px;
		font-size: 1rem;
		font-weight: 600;
		background: linear-gradient(135deg, #65fbd2 0%, #6a7dff 100%);
		color: #041021;
		box-shadow: 0 18px 32px rgba(101, 251, 210, 0.35);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.primary:hover {
		transform: translateY(-3px);
		box-shadow: 0 24px 40px rgba(106, 125, 255, 0.45);
	}

	.placeholder {
		grid-column: span 8;
		width: 100%;
		border-radius: 28px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 16px 32px rgba(6, 10, 24, 0.35);
	}

	@media (max-width: 900px) {
		.actions {
			grid-template-columns: 1fr;
		}

		.primary,
		.placeholder {
			grid-column: auto;
		}

		.primary {
			width: 100%;
		}
	}

	@media (max-width: 640px) {
		.cta {
			padding: 2.6rem 1.6rem;
			border-radius: 32px;
		}
	}
</style>
