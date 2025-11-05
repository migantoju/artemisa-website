<script lang="ts">
  export let badge = 'En construcción';
  export let title: string;
  export let description: string;
  export let actionLabel: string;
  export let actionHref = '/';
</script>

<section class="wip" aria-live="polite">
  <span class="badge">{badge}</span>
  <h1>{title}</h1>
  <p>{description}</p>
  <a class="action" href={actionHref}>{actionLabel}</a>
</section>

<style>
  .wip {
    width: min(720px, 90vw);
    margin: clamp(4rem, 8vw, 6rem) auto;
    padding: clamp(2.4rem, 6vw, 3.4rem) clamp(1.8rem, 5vw, 3rem);
    border-radius: 36px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(8, 12, 24, 0.8);
    backdrop-filter: blur(18px);
    box-shadow: 0 22px 50px rgba(6, 10, 24, 0.45);
    display: grid;
    gap: clamp(1rem, 3vw, 1.6rem);
    text-align: center;
    color: rgba(224, 231, 255, 0.9);
  }

  .badge {
    justify-self: center;
    padding: 0.45rem 1.1rem;
    border-radius: 999px;
    background: rgba(101, 251, 210, 0.18);
    border: 1px solid rgba(101, 251, 210, 0.35);
    color: rgba(240, 244, 255, 0.85);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
  }

  h1 {
    margin: 0;
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    color: #ffffff;
  }

  p {
    margin: 0;
    font-size: clamp(1rem, 2vw, 1.15rem);
    line-height: 1.7;
    color: rgba(214, 225, 255, 0.82);
  }

  .action {
    justify-self: center;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.85rem 1.8rem;
    border-radius: 999px;
    font-weight: 600;
    background: linear-gradient(135deg, #65fbd2, #6a7dff);
    color: #041021;
    box-shadow: 0 18px 30px rgba(101, 251, 210, 0.35);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .action:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 34px rgba(106, 125, 255, 0.4);
  }

  @media (max-width: 640px) {
    .wip {
      margin: clamp(3rem, 14vw, 4.5rem) auto;
      border-radius: 28px;
    }
  }
</style>
