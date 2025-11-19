<script lang="ts">
  import { locale } from '$lib/i18n';

  const localeStore = locale;

  $: currentLocale = ($localeStore ?? 'es') as 'es' | 'en';
  $: title = currentLocale === 'es' ? 'Rutinas personalizadas para ti y tu familia' : 'Personal routines for you and your family';
  $: subtitle = currentLocale === 'es'
    ? 'Configura diferentes perfiles, horarios y contextos (trabajo, playa, deporte) y deja que Sefone ajuste las alertas.'
    : 'Set different profiles, schedules, and contexts (work, beach, workouts) and let Sefone adjust the alerts.';

  const cards = {
    es: [
      {
        title: 'Rutina urbana',
        time: '08:00 · 12:20 · 16:00',
        description: 'Para quienes trabajan en exteriores con FPS 50 mineral.',
        image: 'https://placehold.co/480x320/png?text=Urban+Routine'
      },
      {
        title: 'Modo niños',
        time: '09:30 · 13:00 · 15:30',
        description: 'Alertas compartidas con cuidadores y notas de hidratación.',
        image: 'https://placehold.co/480x320/png?text=Kids+Routine'
      }
    ],
    en: [
      {
        title: 'Urban routine',
        time: '08:00 · 12:20 · 16:00',
        description: 'For outdoor workers with SPF 50 mineral filters.',
        image: 'https://placehold.co/480x320/png?text=Urban+Routine'
      },
      {
        title: 'Kids mode',
        time: '09:30 · 13:00 · 15:30',
        description: 'Shared alerts with caregivers plus hydration notes.',
        image: 'https://placehold.co/480x320/png?text=Kids+Routine'
      }
    ]
  } as const;

  $: cardCopy = cards[currentLocale];
</script>

<section class="routine" aria-labelledby="routine-title">
  <div class="container">
    <div class="heading">
      <p class="eyebrow">{currentLocale === 'es' ? 'Rutinas' : 'Routines'}</p>
      <h2 id="routine-title">{title}</h2>
      <p class="subtitle">{subtitle}</p>
    </div>
    <div class="cards">
      {#each cardCopy as card}
        <article class="routine-card">
          <img src={card.image} alt={card.title} width="480" height="320" loading="lazy" />
          <div class="card-body">
            <span class="time">{card.time}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .routine {
    background: #fefcfa;
    padding: clamp(3rem, 6vw, 5rem) 0;
  }

  .container {
    width: min(1180px, 92vw);
    margin: 0 auto;
    display: grid;
    gap: 1.8rem;
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
    margin: 0.5rem 0;
    font-size: clamp(1.9rem, 3.5vw, 2.4rem);
  }

  .subtitle {
    margin: 0;
    color: #6b5f56;
    font-size: 1rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .routine-card {
    border-radius: 32px;
    border: 1px solid #eadfd4;
    background: #fff;
    box-shadow: 0 20px 36px rgba(61, 53, 48, 0.12);
    overflow: hidden;
    display: grid;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  .card-body {
    padding: 1.4rem 1.8rem 1.8rem;
    display: grid;
    gap: 0.4rem;
  }

  .time {
    font-size: 0.9rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #a3958a;
  }

  h3 {
    margin: 0;
    font-size: 1.3rem;
  }

  p {
    margin: 0;
    color: #6b5f56;
    line-height: 1.6;
  }
</style>
