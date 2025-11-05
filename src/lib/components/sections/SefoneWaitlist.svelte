<script lang="ts">
  import { locale } from '$lib/i18n';

  const localeStore = locale;

  $: currentLocale = ($localeStore ?? 'es') as 'es' | 'en';
  $: isEs = currentLocale === 'es';
  $: title = isEs ? 'Recibe prioridad en el lanzamiento de Sefone' : 'Get priority for the Sefone launch';
  $: subtitle = isEs
    ? 'Estamos ultimando la experiencia para iOS y Android. Déjanos tu correo para recibir invitaciones y recordatorios de lanzamiento.'
    : 'We are putting the finishing touches on the iOS and Android experience. Leave your email to receive invites and launch updates.';
  $: placeholderText = isEs ? 'Tu correo electrónico' : 'Your email';
  $: buttonLabel = isEs ? 'Quiero enterarme' : 'Notify me';
  $: note = isEs
    ? 'Enviaremos mensajes solo con novedades relevantes sobre Sefone.'
    : 'We will only send you relevant updates about Sefone.';
</script>

<section id="waitlist" class="waitlist" aria-labelledby="waitlist-title">
  <div class="waitlist-content">
    <p class="eyebrow">{isEs ? 'Lista prioritaria' : 'Priority list'}</p>
    <h2 id="waitlist-title">{title}</h2>
    <p class="subtitle">{subtitle}</p>
    <form class="waitlist-form" method="post" aria-label={title}>
      <label class="sr-only" for="waitlist-email">{placeholderText}</label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        placeholder={placeholderText}
        required
      />
      <button type="submit">{buttonLabel}</button>
    </form>
    <p class="note">{note}</p>
  </div>
</section>

<style>
  .waitlist {
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

  .waitlist-form {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.8rem;
    align-items: center;
  }

  .waitlist-form input {
    padding: 0.85rem 1rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(11, 16, 32, 0.8);
    color: #f5f7ff;
    font-size: 0.95rem;
    transition: border-color 0.2s ease;
  }

  .waitlist-form input:focus {
    outline: none;
    border-color: rgba(101, 251, 210, 0.6);
    box-shadow: 0 0 0 2px rgba(101, 251, 210, 0.2);
  }

  .waitlist-form button {
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

  .waitlist-form button:hover {
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
    .waitlist-form {
      grid-template-columns: 1fr;
    }

    .waitlist-form button {
      width: 100%;
    }
  }
</style>
