<script lang="ts">
	import { t, type Dictionary } from '$lib/i18n';
	import { fade } from 'svelte/transition';

	const tStore = t;

	let dict: Dictionary | undefined;

	$: dict = $tStore as Dictionary;
	$: team = dict?.team;
</script>

{#if team}
	<section class="team" id="team" aria-labelledby="team-title">
		<div class="glow-left" aria-hidden="true"></div>
		<div class="glow-right" aria-hidden="true"></div>

		<header class="team-header">
			<p class="eyebrow">{team.title}</p>
			<h2 id="team-title">{team.caption}</h2>
		</header>

		<div class="profile" transition:fade={{ duration: 280 }}>
			<div class="portrait">
				<img
					src={team.founder.placeholder}
					alt={team.founder.imageAlt}
					width="400"
					height="400"
					loading="lazy"
				/>
				<div class="halo" aria-hidden="true"></div>
			</div>
			<div class="bio">
				<h3>{team.founder.name}</h3>
				<p class="role">{team.founder.role}</p>
				<p class="description">{team.founder.bio}</p>
				<p class="future">{team.future}</p>
			</div>
		</div>
	</section>
{/if}

<style>
	.team {
		position: relative;
		width: min(1100px, 90vw);
		margin: 0 auto;
		display: grid;
		gap: clamp(2rem, 4vw, 3rem);
		padding: clamp(3rem, 6vw, 4.5rem) clamp(1.6rem, 4vw, 3rem);
		border-radius: 40px;
		border: 1px solid rgba(255, 255, 255, 0.06);
		background: rgba(8, 12, 24, 0.78);
		backdrop-filter: blur(18px);
		box-shadow: 0 22px 56px rgba(6, 10, 26, 0.5);
		overflow: hidden;
	}

	.glow-left,
	.glow-right {
		position: absolute;
		width: clamp(240px, 45vw, 360px);
		height: clamp(240px, 45vw, 360px);
		border-radius: 50%;
		filter: blur(140px);
		opacity: 0.45;
		pointer-events: none;
	}

	.glow-left {
		top: -120px;
		left: -140px;
		background: radial-gradient(circle, rgba(98, 123, 255, 0.45), transparent 65%);
	}

	.glow-right {
		bottom: -140px;
		right: -120px;
		background: radial-gradient(circle, rgba(101, 251, 210, 0.35), transparent 65%);
	}

	.team-header {
		position: relative;
		display: grid;
		gap: 0.8rem;
		max-width: 54ch;
		z-index: 1;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.9rem;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		font-weight: 700;
		color: rgba(184, 198, 255, 0.68);
	}

	h2 {
		margin: 0;
		font-size: clamp(1.9rem, 3.6vw, 2.4rem);
		line-height: 1.3;
		color: rgba(240, 244, 255, 0.94);
	}

	.profile {
		position: relative;
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: clamp(1.6rem, 3vw, 2.6rem);
		z-index: 1;
		align-items: center;
	}

	.portrait {
		position: relative;
		grid-column: span 4;
		aspect-ratio: 1 / 1;
		border-radius: 32px;
		overflow: hidden;
		display: grid;
		place-items: center;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(12, 16, 32, 0.85);
	}

	.portrait img {
		width: 85%;
		height: auto;
		object-fit: cover;
		border-radius: 24px;
		filter: saturate(0.9);
	}

	.halo {
		position: absolute;
		inset: 16%;
		border-radius: 30px;
		border: 1px solid rgba(101, 251, 210, 0.35);
		box-shadow: 0 0 32px rgba(101, 251, 210, 0.25);
		pointer-events: none;
	}

	.bio {
		grid-column: span 8;
		display: grid;
		gap: 0.75rem;
		color: rgba(220, 228, 255, 0.85);
	}

	.bio h3 {
		margin: 0;
		font-size: clamp(1.6rem, 3vw, 2rem);
		color: #ffffff;
	}

	.role {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		color: rgba(144, 217, 255, 0.9);
		text-transform: uppercase;
		letter-spacing: 0.25em;
	}

	.description {
		margin: 0;
		font-size: 1rem;
		line-height: 1.75;
	}

	.future {
		margin: 0;
		font-size: 0.95rem;
		color: rgba(190, 203, 255, 0.7);
	}

	@media (max-width: 860px) {
		.profile {
			grid-template-columns: 1fr;
		}

		.portrait,
		.bio {
			grid-column: auto;
		}

		.portrait {
			justify-self: center;
			width: min(280px, 80%);
		}

		.bio {
			text-align: center;
		}

		.role {
			justify-self: center;
		}
	}

	@media (max-width: 640px) {
		.team {
			padding: 2.6rem 1.5rem;
			border-radius: 32px;
		}
	}
</style>
