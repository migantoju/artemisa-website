<script lang="ts">
  import { locale } from '$lib/i18n';

  const localeStore = locale;

  const steps = {
    es: [
      {
        title: 'Registra tus protectores',
        body: 'Escanea o agrega manualmente tus protectores solares para que Sefone conozca su FPS y textura.'
      },
      {
        title: 'Clima y UV en tiempo real',
        body: 'Detectamos tu ubicación y obtenemos el índice UV y las condiciones para calcular la siguiente aplicación.'
      },
      {
        title: 'Recordatorios inteligentes',
        body: 'Te avisamos cuando toca reaplicar, ajustando la frecuencia según tu tipo de piel y actividades.'
      }
    ],
    en: [
      {
        title: 'Log your sunscreens',
        body: 'Scan or manually add your sunscreens so Sefone knows their SPF, filters, and texture.'
      },
      {
        title: 'Real-time weather and UV',
        body: 'We detect your location, fetch UV index and weather, and calculate when you should reapply.'
      },
      {
        title: 'Smart reminders',
        body: 'We notify you at the right moment, adapting frequency to your skin type and activities.'
      }
    ]
  } as const;

  $: currentLocale = ($localeStore ?? 'es') as 'es' | 'en';
  $: copy = steps[currentLocale];
</script>

<section id={currentLocale === 'es' ? 'como-funciona' : 'how-it-works'} class="how" aria-labelledby="how-title">
  <div class="container">
    <div class="heading">
      <p class="eyebrow">{currentLocale === 'es' ? 'Cómo funciona' : 'How it works'}</p>
      <h2 id="how-title">
        {currentLocale === 'es'
          ? 'Un flujo sencillo: registrar, medir y recordar.'
          : 'A simple flow: log, measure, and remind.'}
      </h2>
    </div>
    <div class="steps">
      {#each copy as step, index}
        <article class="step-card">
          <span class="step-index">{String(index + 1).padStart(2, '0')}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .how {
    background: #f0e9e2;
    padding: clamp(3rem, 6vw, 5rem) 0;
  }

  .container {
    width: min(1180px, 92vw);
    margin: 0 auto;
    display: grid;
    gap: 2rem;
  }

  .heading {
    text-align: center;
    color: #3d3530;
  }

  .eyebrow {
    margin: 0;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: #6b5f56;
  }

  h2 {
    margin: 0.5rem 0 0;
    font-size: clamp(1.9rem, 3.6vw, 2.4rem);
    color: #3d3530;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.4rem;
  }

  .step-card {
    padding: 1.8rem;
    border-radius: 28px;
    background: #fff;
    border: 1px solid #e2d6cb;
    box-shadow: 0 18px 32px rgba(61, 53, 48, 0.08);
    display: grid;
    gap: 0.6rem;
    color: #3d3530;
  }

  .step-index {
    font-size: 0.85rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #a3958a;
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: #6b5f56;
    line-height: 1.6;
  }
</style>
