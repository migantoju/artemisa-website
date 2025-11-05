<script lang="ts">
  import { locale, t } from '$lib/i18n';

  const localeStore = locale;
  const tStore = t;

  $: currentLocale = ($localeStore ?? 'es') as 'es' | 'en';
  $: isEs = currentLocale === 'es';
  $: dict = $tStore;

  $: title = isEs
    ? 'Únete a la beta de Minervax'
    : 'Join the Minervax beta';
  $: subtitle = isEs
    ? 'Estamos abriendo nuestra beta cerrada en etapas. Déjanos tu correo y te notificaremos cuando expandamos tu ciudad.'
    : 'We are rolling out our closed beta in waves. Leave your email and we will notify you when we expand to your city.';
  $: placeholderText = isEs ? 'Tu correo electrónico' : 'Your email';
  $: buttonLabel = isEs ? 'Anotarme' : 'Notify me';
</script>

<section id="beta" class="beta" aria-labelledby="beta-title">
  <div class="beta-content">
    <p class="eyebrow">{isEs ? 'Beta cerrada' : 'Closed beta'}</p>
    <h2 id="beta-title">{title}</h2>
    <p class="subtitle">{subtitle}</p>
    <form class="beta-form" method="post" aria-label={title}>
      <label class="sr-only" for="beta-email">{placeholderText}</label>
      <input
        id="beta-email"
        name="email"
        type="email"
        placeholder={placeholderText}
        required
      />
      <button type="submit">{buttonLabel}</button>
    </form>
    <p class="note">
      {isEs
        ? 'Mientras tanto, síguenos en redes para ver el progreso y próximas ciudades.'
        : 'In the meantime, follow us on social media to see progress and upcoming cities.'}
    </p>
  </div>
</section>

<style>
  .beta {
    width: min(900px, 92vw);
    margin: 0 auto;
    padding: clamp(2.6rem, 5vw, 3.4rem) clamp(1.8rem, 4vw, 2.6rem);
    border-radius: 36px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(8, 12, 24, 0.82);
    box-shadow: 0 22px 50px rgba(6, 10, 24, 0.45);
    text-align: center;
    display: grid;
    gap: clamp(1rem, 2.6vw, 1.6rem);
  }

  .eyebrow {
    margin: 0;
    font-size: 0.82rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(184, 198, 255, 0.68);
    font-weight: 700;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.8rem, 3.2vw, 2.2rem);
    color: #ffffff;
  }

  .subtitle {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(214, 225, 255, 0.8);
  }

  .beta-form {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.8rem;
    align-items: center;
  }

  .beta-form input {
    padding: 0.85rem 1rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(11, 16, 32, 0.8);
    color: #f5f7ff;
    font-size: 0.95rem;
    transition: border-color 0.2s ease;
  }

  .beta-form input:focus {
    outline: none;
    border-color: rgba(101, 251, 210, 0.6);
    box-shadow: 0 0 0 2px rgba(101, 251, 210, 0.2);
  }

  .beta-form button {
    padding: 0.9rem 1.8rem;
    border-radius: 999px;
    border: none;
    background: linear-gradient(135deg, #65fbd2, #6a7dff);
    color: #041021;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    box-shadow: 0 18px 32px rgba(101, 251, 210, 0.35);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .beta-form button:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 36px rgba(106, 125, 255, 0.4);
  }

  .note {
    margin: 0;
    font-size: 0.9rem;
    color: rgba(190, 203, 255, 0.7);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 640px) {
    .beta-form {
      grid-template-columns: 1fr;
    }

    .beta-form button {
      width: 100%;
    }
  }
</style>
