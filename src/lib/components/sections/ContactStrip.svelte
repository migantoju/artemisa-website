<script lang="ts">
	import { t, type Dictionary } from '$lib/i18n';

	const tStore = t;

	let dict: Dictionary | undefined;

	$: dict = $tStore as Dictionary;
	$: contact = dict?.contact;
</script>

{#if contact}
	<section class="contact" id="contact" aria-labelledby="contact-title">
		<div class="container">
			<header>
				<p class="eyebrow">{contact.title}</p>
				<h2 id="contact-title">{contact.description}</h2>
			</header>

			<div class="channels">
				<div class="channel-card">
					<span class="label">{contact.emailLabel}</span>
					<a href={`mailto:${contact.emailValue}`} class="value">{contact.emailValue}</a>
				</div>
				<div class="channel-card">
					<span class="label">{contact.socialLabel}</span>
					<div class="value socials">
						<a href="https://twitter.com" rel="noreferrer" target="_blank">Twitter</a>
						<a href="https://www.linkedin.com" rel="noreferrer" target="_blank">LinkedIn</a>
						<a href="https://instagram.com" rel="noreferrer" target="_blank">Instagram</a>
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}

<style>
	.contact {
		padding: clamp(3rem, 6vw, 4.5rem) 0;
	}

	.container {
		width: min(1100px, 92vw);
		margin: 0 auto;
		display: grid;
		gap: clamp(2rem, 4vw, 3rem);
		border-radius: 32px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(8, 12, 24, 0.82);
		backdrop-filter: blur(18px);
		box-shadow: 0 22px 54px rgba(6, 10, 26, 0.5);
		padding: clamp(2.6rem, 5vw, 3.4rem) clamp(1.8rem, 4vw, 3rem);
	}

	header {
		display: grid;
		gap: 0.75rem;
		max-width: 52ch;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.88rem;
		letter-spacing: 0.32em;
		text-transform: uppercase;
		font-weight: 700;
		color: rgba(184, 198, 255, 0.7);
	}

	h2 {
		margin: 0;
		font-size: clamp(1.8rem, 3.4vw, 2.3rem);
		line-height: 1.35;
		color: rgba(240, 244, 255, 0.95);
	}

	.channels {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: clamp(1.2rem, 3vw, 1.8rem);
	}

	.channel-card {
		display: grid;
		gap: 0.4rem;
		padding: 1.6rem;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(12, 16, 32, 0.72);
		box-shadow: 0 12px 28px rgba(6, 10, 24, 0.35);
	}

	.label {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		font-weight: 600;
		color: rgba(184, 198, 255, 0.7);
	}

	.value {
		font-size: 1.05rem;
		font-weight: 600;
		color: #65fbd2;
	}

	.value:hover {
		color: #8cffdf;
	}

	.socials {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.socials a {
		color: rgba(220, 230, 255, 0.85);
		font-weight: 500;
	}

	.socials a:hover {
		color: #65fbd2;
	}

	@media (max-width: 640px) {
		.container {
			padding: 2.4rem 1.6rem;
		}
	}
</style>
