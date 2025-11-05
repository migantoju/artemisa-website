<script lang="ts">
	import { t, type Dictionary } from '$lib/i18n';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const tStore = t;

	let dict: Dictionary | undefined;

	$: dict = $tStore as Dictionary;
	$: mission = dict?.mission;
</script>

{#if mission}
	<section class="mission" id="mission" aria-labelledby="mission-title">
		<div class="bg-gradient" aria-hidden="true"></div>
		<div class="orb orb-one" aria-hidden="true"></div>
		<div class="orb orb-two" aria-hidden="true"></div>

		<header class="mission-header">
			<p class="eyebrow">{mission.title}</p>
			<h2 id="mission-title">{mission.description}</h2>
		</header>

		<div class="values">
			{#each mission.values as value, index}
				<article
					class="value-card"
					transition:fly={{ y: 24, duration: 420, easing: quintOut, delay: index * 80 }}
				>
					<div class="crescent" aria-hidden="true">
						<span></span>
					</div>
					<h3>{value.title}</h3>
					<p>{value.description}</p>
				</article>
			{/each}
		</div>
	</section>
{/if}

<style>
	.mission {
		position: relative;
		width: min(1100px, 92vw);
		margin: 0 auto;
		padding: clamp(3.5rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem);
		border-radius: 36px;
		border: 1px solid rgba(255, 255, 255, 0.06);
		background: rgba(8, 12, 24, 0.7);
		backdrop-filter: blur(24px);
		box-shadow: 0 24px 60px rgba(6, 10, 24, 0.55);
		overflow: hidden;
		display: grid;
		gap: clamp(2rem, 4vw, 3rem);
	}

	.bg-gradient {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			135deg,
			rgba(77, 101, 255, 0.25) 0%,
			rgba(50, 217, 255, 0.12) 40%,
			transparent 75%
		);
		opacity: 0.8;
		pointer-events: none;
	}

	.orb {
		position: absolute;
		width: 280px;
		height: 280px;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.45;
		pointer-events: none;
	}

	.orb-one {
		top: -120px;
		left: -80px;
		background: radial-gradient(circle, rgba(101, 251, 210, 0.55), transparent 65%);
	}

	.orb-two {
		bottom: -120px;
		right: -60px;
		background: radial-gradient(circle, rgba(98, 123, 255, 0.4), transparent 65%);
	}

	.mission-header {
		position: relative;
		display: grid;
		gap: 0.75rem;
		max-width: 56ch;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.85rem;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		font-weight: 700;
		color: rgba(182, 196, 255, 0.65);
	}

	h2 {
		margin: 0;
		font-size: clamp(1.7rem, 3vw, 2.2rem);
		line-height: 1.3;
		color: rgba(242, 246, 255, 0.92);
	}

	.values {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: clamp(1.2rem, 3vw, 1.8rem);
	}

	.value-card {
		position: relative;
		padding: 1.8rem;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: linear-gradient(
				160deg,
				rgba(18, 26, 48, 0.9) 0%,
				rgba(11, 17, 36, 0.8) 60%,
				rgba(18, 26, 48, 0.65) 100%
			)
			0 0 / 100% 100%;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 12px 28px rgba(6, 10, 24, 0.4);
		display: grid;
		gap: 1rem;
		min-height: 240px;
		transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
	}

	.value-card:hover {
		transform: translateY(-6px);
		border-color: rgba(101, 251, 210, 0.35);
		box-shadow: 0 18px 32px rgba(30, 48, 90, 0.5);
	}

	.crescent {
		position: relative;
		width: 48px;
		height: 48px;
		border-radius: 18px;
		background: linear-gradient(135deg, rgba(101, 251, 210, 0.35), rgba(98, 123, 255, 0.5));
		display: grid;
		place-items: center;
	}

	.crescent span {
		display: block;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: rgba(8, 12, 24, 0.92);
		box-shadow: -8px 2px 16px rgba(101, 251, 210, 0.35);
	}

	h3 {
		margin: 0;
		font-size: 1.2rem;
		color: #f5f7ff;
	}

	p {
		margin: 0;
		font-size: 0.98rem;
		color: rgba(220, 228, 255, 0.78);
		line-height: 1.6;
	}

	@media (max-width: 720px) {
		.mission {
			padding: 3rem 1.6rem;
			border-radius: 28px;
		}

		.values {
			grid-template-columns: 1fr;
		}

		.value-card {
			min-height: auto;
		}
	}
</style>
