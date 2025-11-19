<script lang="ts">
  import { locale } from '$lib/i18n';

  const localeStore = locale;

  const gradients = [
    { name: 'Low', colors: ['#A8D5A8', '#7FB069'] },
    { name: 'Moderate', colors: ['#F5D982', '#E6B366'] },
    { name: 'High', colors: ['#F2B894', '#E8A87C'] },
    { name: 'Very High', colors: ['#F0A5A5', '#E07A7A'] },
    { name: 'Extreme', colors: ['#C8A8E6', '#A68CC6'] }
  ];

  $: currentLocale = ($localeStore ?? 'es') as 'es' | 'en';
  $: title = currentLocale === 'es' ? 'Niveles UV que entiendes de un vistazo' : 'UV levels you understand at a glance';
  $: subtitle = currentLocale === 'es'
    ? 'Representamos cada nivel UV con gradientes suaves para que puedas identificar riesgos al instante.'
    : 'We display each UV level with soft gradients so you can identify risk at a glance.';
</script>

<section class="uv" aria-labelledby="uv-title">
  <div class="container">
    <div class="heading">
      <p class="eyebrow">UV Insights</p>
      <h2 id="uv-title">{title}</h2>
      <p class="subtitle">{subtitle}</p>
    </div>
    <div class="uv-cards">
      {#each gradients as gradient}
        <article class="uv-card" style={`background-image: linear-gradient(135deg, ${gradient.colors[0]}, ${gradient.colors[1]});`}>
          <span class="uv-label">UV {gradient.name}</span>
          <p>{currentLocale === 'es' ? 'Protección sugerida' : 'Recommended protection'}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .uv {
    background: #f1ede8;
    padding: clamp(3rem, 6vw, 5rem) 0;
  }

  .container {
    width: min(1180px, 92vw);
    margin: 0 auto;
    display: grid;
    gap: 1.5rem;
  }

  .heading {
    text-align: center;
    color: #3d3530;
    max-width: 720px;
    margin: 0 auto;
  }

  .eyebrow {
    margin: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: #6b5f56;
  }

  h2 {
    margin: 0.5rem 0;
    font-size: clamp(1.9rem, 3.5vw, 2.4rem);
  }

  .subtitle {
    margin: 0;
    color: #6b5f56;
    font-size: 1rem;
    line-height: 1.6;
  }

  .uv-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
  }

  .uv-card {
    border-radius: 28px;
    padding: 1.4rem;
    color: #fff;
    min-height: 140px;
    display: grid;
    gap: 0.4rem;
    box-shadow: 0 16px 30px rgba(61, 53, 48, 0.15);
  }

  .uv-label {
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
  }
</style>
