<script lang="ts">
	import { t, type Dictionary } from '$lib/i18n';

	const tStore = t;

	let dict: Dictionary | undefined;

	$: dict = $tStore as Dictionary;
	$: footer = dict?.footer;
</script>

{#if footer}
	<footer class="footer">
		<div class="inner">
			<div class="brand">
				<a href="/" class="logo">
					<span>Artemisa</span>
					<span class="dot">•</span>
					<span>Dev</span>
				</a>
				<p>{footer.tagline}</p>
			</div>
			<nav class="links" aria-label="Footer navigation">
				<a href="/privacy">{footer.links.privacy}</a>
				<a href="/terms">{footer.links.terms}</a>
			</nav>
			<div class="social">
				<span>{footer.social}</span>
				<div>
					<a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
					<a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
					<a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
				</div>
			</div>
		</div>
		<p class="rights">{footer.rights.replace('{year}', new Date().getFullYear().toString())}</p>
	</footer>
{/if}

<style>
	.footer {
		padding: clamp(2.4rem, 5vw, 3rem) clamp(1.6rem, 4vw, 3rem);
		border-top: 1px solid rgba(255, 255, 255, 0.06);
		background: rgba(5, 7, 15, 0.75);
		backdrop-filter: blur(14px);
		color: rgba(214, 225, 255, 0.75);
	}

	.inner {
		width: min(1100px, 92vw);
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: clamp(1.5rem, 3vw, 2.4rem);
		align-items: start;
	}

	.brand {
		display: grid;
		gap: 0.6rem;
	}

	.logo {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 1.05rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #f5f7ff;
	}

	.logo span:first-child,
	.logo span:last-child {
		background: linear-gradient(135deg, #f5f7ff, rgba(184, 198, 255, 0.85));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
	}

	.dot {
		color: #65fbd2;
		font-size: 1rem;
		transform: translateY(-1px);
	}

	.brand p {
		margin: 0;
		font-size: 0.92rem;
		line-height: 1.6;
		max-width: 32ch;
	}

	.links,
	.social {
		display: grid;
		gap: 0.4rem;
	}

	.links a,
	.social a {
		color: rgba(214, 225, 255, 0.75);
		font-size: 0.95rem;
	}

	.links a:hover,
	.social a:hover {
		color: #65fbd2;
	}

	.social span {
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: rgba(184, 198, 255, 0.68);
	}

	.social div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.rights {
		width: min(1100px, 92vw);
		margin: clamp(1.8rem, 3vw, 2.4rem) auto 0;
		text-align: center;
		font-size: 0.85rem;
		color: rgba(160, 176, 214, 0.6);
	}

	@media (max-width: 640px) {
		.inner {
			grid-template-columns: 1fr;
		}

		.brand p {
			max-width: none;
		}
	}
</style>
