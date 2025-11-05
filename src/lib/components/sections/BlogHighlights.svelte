<script lang="ts">
	import { t, type Dictionary } from '$lib/i18n';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const tStore = t;

	let dict: Dictionary | undefined;

	$: dict = $tStore as Dictionary;
	$: blog = dict?.blog;
</script>

{#if blog}
	<section class="blog" id="blog" aria-labelledby="blog-title">
		<div class="glow glow-one" aria-hidden="true"></div>
		<div class="glow glow-two" aria-hidden="true"></div>

		<div class="blog-header">
			<div class="heading">
				<p class="eyebrow">{blog.title}</p>
				<h2 id="blog-title">{blog.caption}</h2>
			</div>
			<a class="view-all" href="/blog">
				{blog.viewAll}
				<span aria-hidden="true">↗</span>
			</a>
		</div>

		<div class="posts">
			{#each blog.posts as post, index}
				<article
					class="post"
					transition:fly={{ y: 30, duration: 360, easing: cubicOut, delay: index * 80 }}
				>
					<div class="meta">
						<span class="date">{post.date}</span>
					</div>
					<h3>{post.title}</h3>
					<p>{post.description}</p>
					<a class="post-link" href={post.href}>
						{blog.viewAll}
						<span aria-hidden="true">↗</span>
					</a>
				</article>
			{/each}
		</div>
	</section>
{/if}

<style>
	.blog {
		position: relative;
		width: min(1180px, 92vw);
		margin: 0 auto;
		display: grid;
		gap: clamp(2rem, 4vw, 3rem);
		padding: clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 4vw, 3rem);
		border-radius: 40px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.07);
		background: rgba(8, 12, 24, 0.74);
		box-shadow: 0 18px 48px rgba(6, 10, 26, 0.45);
	}

	.glow {
		position: absolute;
		width: clamp(260px, 40vw, 360px);
		height: clamp(260px, 40vw, 360px);
		border-radius: 50%;
		filter: blur(140px);
		opacity: 0.5;
		pointer-events: none;
	}

	.glow-one {
		top: 0;
		left: 0;
		transform: translate(-45%, -55%);
		background: radial-gradient(circle, rgba(98, 123, 255, 0.45), transparent 65%);
	}

	.glow-two {
		bottom: 0;
		right: 0;
		transform: translate(35%, 45%);
		background: radial-gradient(circle, rgba(101, 251, 210, 0.35), transparent 65%);
	}

	.blog-header {
		position: relative;
		z-index: 1;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-end;
		gap: 1rem;
	}

	.heading {
		display: grid;
		gap: 0.8rem;
		max-width: 58ch;
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
		font-size: clamp(1.9rem, 3.6vw, 2.4rem);
		line-height: 1.3;
		color: rgba(240, 244, 255, 0.94);
	}

	.view-all {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.6rem 1.2rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: rgba(16, 24, 46, 0.6);
		font-weight: 600;
		color: rgba(220, 230, 255, 0.86);
		transition: transform 0.2s ease, background 0.2s ease;
	}

	.view-all:hover {
		transform: translateY(-2px);
		background: rgba(24, 34, 60, 0.75);
	}

	.posts {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: clamp(1.5rem, 3vw, 2.1rem);
		z-index: 1;
	}

	.post {
		display: grid;
		gap: 0.85rem;
		padding: clamp(1.6rem, 3vw, 2rem);
		border-radius: 28px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: linear-gradient(
				160deg,
				rgba(12, 16, 32, 0.86) 0%,
				rgba(10, 14, 26, 0.82) 55%,
				rgba(12, 18, 34, 0.76) 100%
			)
			0 0 / 100% 100%;
		box-shadow: 0 18px 40px rgba(6, 10, 24, 0.42);
		transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
		min-height: 240px;
	}

	.post:hover {
		transform: translateY(-6px);
		box-shadow: 0 24px 44px rgba(24, 40, 70, 0.5);
		border-color: rgba(101, 251, 210, 0.3);
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		color: rgba(184, 198, 255, 0.7);
		font-size: 0.85rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-weight: 600;
	}

	h3 {
		margin: 0;
		font-size: clamp(1.2rem, 2.6vw, 1.5rem);
		color: #ffffff;
		line-height: 1.4;
	}

	p {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
		color: rgba(218, 226, 255, 0.78);
	}

	.post-link {
		margin-top: auto;
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		font-weight: 600;
		color: rgba(144, 217, 255, 0.9);
	}

	.post-link span {
		transition: transform 0.2s ease;
	}

	.post-link:hover span {
		transform: translateX(4px) translateY(-1px);
	}

	@media (max-width: 720px) {
		.blog {
			padding-top: 2.4rem;
			padding-bottom: 2.4rem;
		}

		.post {
			min-height: auto;
		}

		.blog-header {
			align-items: flex-start;
		}
	}
</style>
