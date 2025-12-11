<script lang="ts">
  import { locale } from '$lib/i18n';

  const localeStore = locale;

  const heroCopy = {
    es: {
      eyebrow: 'Sefone App',
      title: 'Protección solar inteligente para cada tipo de piel.',
      subtitle:
        'Da de alta tus protectores, sigue tus aplicaciones y recibe recordatorios basados en tu clima real y tu rutina diaria.',
      primaryCta: 'Unirme a la lista',
      secondaryCta: 'Ver cómo funciona',
      primaryHref: '#waitlist',
      secondaryHref: '#como-funciona',
      stats: [
        { label: 'Recordatorios diarios', value: '+120' },
        { label: 'Protectores registrados', value: '250+' },
        { label: 'Alertas enviadas', value: '3.5K' }
      ]
    },
    en: {
      eyebrow: 'Sefone App',
      title: 'Smart sun-care routines for every skin type.',
      subtitle:
        "Register your sunscreens, track each application, and get reminders based on real weather and your daily rhythm.",
      primaryCta: 'Join the waitlist',
      secondaryCta: 'See how it works',
      primaryHref: '#waitlist',
      secondaryHref: '#how-it-works',
      stats: [
        { label: 'Daily reminders', value: '+120' },
        { label: 'Sunscreens logged', value: '250+' },
        { label: 'Alerts delivered', value: '3.5K' }
      ]
    }
  } as const;

  $: currentLocale = ($localeStore ?? 'es') as 'es' | 'en';
  $: copy = heroCopy[currentLocale];
</script>

<section class="sefone-hero" aria-labelledby="sefone-hero-title">
  <div class="hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">{copy.eyebrow}</p>
      <h1 id="sefone-hero-title">{copy.title}</h1>
      <p class="subtitle">{copy.subtitle}</p>
      <div class="hero-actions">
        <a class="primary" href={copy.primaryHref}>{copy.primaryCta}</a>
        <a class="secondary" href={copy.secondaryHref}>{copy.secondaryCta}</a>
      </div>
      <div class="stats">
        {#each copy.stats as stat}
          <div class="stat-card">
            <span class="value">{stat.value}</span>
            <span class="label">{stat.label}</span>
          </div>
        {/each}
      </div>
    </div>
    <div class="hero-media" aria-hidden="true">
      <div class="device">
        <img
          src="https://placehold.co/420x780/png?text=Sefone+Preview"
          alt="Sefone mobile preview"
          width="420"
          height="780"
          loading="lazy"
        />
        <div class="glow coral"></div>
        <div class="glow mint"></div>
      </div>
      <div class="card-overlay">
        <div>
          <p class="card-title">UV Index</p>
          <p class="card-value">3 · Moderate</p>
        </div>
        <div class="chip">14:30 next reapply</div>
      </div>
    </div>
  </div>
</section>

<style>
  :global(:root) {
    --coral-primary: #e67e5b;
    --coral-hover: #d4633f;
    --coral-light: #f5e6e0;
    --mint-green: #85c7a3;
    --mint-green-light: #e8f4ed;
    --beige-bg: #fbf8f4;
    --beige-surface: #fefcfa;
    --text-primary: #3d3530;
    --text-secondary: #6b5f56;
  }

  .sefone-hero {
    background: linear-gradient(135deg, #fbf8f4 0%, #f0e9e2 100%);
    padding: clamp(3rem, 6vw, 5rem) 0;
  }

  .hero-grid {
    width: min(1180px, 92vw);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: clamp(1.5rem, 3.5vw, 3rem);
    align-items: center;
  }

  .hero-copy {
    grid-column: span 6;
    display: grid;
    gap: 1rem;
    color: var(--text-primary);
  }

  .eyebrow {
    font-size: 0.85rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--text-secondary);
    margin: 0;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    line-height: 1.2;
    color: var(--text-primary);
  }

  .subtitle {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-secondary);
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .primary,
  .secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.85rem 1.6rem;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.95rem;
  }

  .primary {
    background: var(--coral-primary);
    color: #fff;
    box-shadow: 0 14px 30px rgba(230, 126, 91, 0.35);
  }

  .primary:hover {
    background: var(--coral-hover);
  }

  .secondary {
    border: 1px solid #d4c7bc;
    color: var(--text-primary);
    background: var(--beige-surface);
  }

  .secondary:hover {
    border-color: var(--coral-primary);
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .stat-card {
    flex: 1 1 120px;
    min-width: 120px;
    padding: 1rem 1.2rem;
    border-radius: 20px;
    background: #fff;
    border: 1px solid #eadfd4;
    box-shadow: 0 12px 24px rgba(61, 53, 48, 0.08);
  }

  .value {
    display: block;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .label {
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .hero-media {
    grid-column: span 6;
    position: relative;
    display: grid;
    justify-items: center;
  }

  .device {
    position: relative;
    width: 420px;
    height: 780px;
    border-radius: 32px;
    background: var(--beige-surface);
    border: 1px solid rgba(61, 53, 48, 0.1);
    box-shadow: 0 30px 60px rgba(61, 53, 48, 0.25);
    overflow: hidden;
  }

  .device img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-overlay {
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    padding: 1rem 1.4rem;
    border-radius: 20px;
    background: rgba(254, 252, 250, 0.92);
    box-shadow: 0 16px 30px rgba(58, 43, 38, 0.18);
    border: 1px solid #eadfd4;
    display: grid;
    gap: 0.4rem;
  }

  .card-title {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .card-value {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .chip {
    justify-self: start;
    padding: 0.3rem 0.8rem;
    border-radius: 999px;
    background: var(--mint-green-light);
    color: #2a3b30;
    font-weight: 600;
    font-size: 0.85rem;
  }

  .glow {
    position: absolute;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.6;
  }

  .glow.coral {
    top: -40px;
    left: -60px;
    background: rgba(230, 126, 91, 0.6);
  }

  .glow.mint {
    bottom: -40px;
    right: -80px;
    background: rgba(133, 199, 163, 0.6);
  }

  @media (max-width: 1024px) {
    .hero-copy,
    .hero-media {
      grid-column: span 12;
    }

    .hero-media {
      order: -1;
    }

    .device {
      width: min(360px, 80vw);
      height: 620px;
    }
  }

  @media (max-width: 640px) {
    .hero-actions {
      flex-direction: column;
    }

    .stats {
      flex-direction: column;
    }

    .card-overlay {
      position: static;
      margin-top: 1rem;
    }
  }
</style>
