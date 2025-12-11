<script lang="ts">
  import LogoMark from '$lib/components/logo/LogoMark.svelte';
</script>

<section class="logo-showcase" aria-labelledby="logo-title">
  <div class="canvas">
    <div>
      <p class="eyebrow">Principal</p>
      <LogoMark variant="full" href="#" />
    </div>
    <div>
      <p class="eyebrow">Compacto</p>
      <LogoMark variant="compact" href="#" />
    </div>
  </div>
</section>

<style>
  .logo-showcase {
    display: grid;
    place-items: center;
    min-height: 60vh;
    background: radial-gradient(circle at top, rgba(108, 121, 255, 0.16), transparent 60%),
      #05070f;
  }

  .canvas {
    display: grid;
    gap: 1.5rem;
    padding: 2.5rem;
    background: rgba(8, 12, 24, 0.72);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .eyebrow {
    margin: 0 0 0.6rem 0;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(184, 198, 255, 0.65);
    font-size: 0.75rem;
  }
</style>
