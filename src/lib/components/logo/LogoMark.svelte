<script lang="ts">
  export let variant: 'full' | 'compact' = 'full';
  export let href = '/';
</script>

<a class={`logo logo--${variant}`} href={href} aria-label="Artemisa Development">
  {#if variant === 'full'}
    <span aria-hidden="true" class="wordmark">Artemisa</span>
    <span aria-hidden="true" class="spark">•</span>
    <span aria-hidden="true" class="wordmark">Dev</span>
  {:else}
    <span aria-hidden="true" class="compact">ADev</span>
  {/if}
</a>

<style>
  .logo {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #f8fbff;
  }

  .logo--compact {
    font-size: 1rem;
    padding: 0.15rem 0.55rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(8, 12, 24, 0.65);
    box-shadow: 0 10px 22px rgba(6, 10, 24, 0.4);
  }

  .wordmark {
    background: linear-gradient(135deg, #f8fbff 0%, rgba(180, 194, 255, 0.85) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .spark {
    font-size: 0.9rem;
    color: #65fbd2;
    transform: translateY(-1px);
  }

  .compact {
    background: linear-gradient(135deg, #f8fbff 0%, rgba(180, 194, 255, 0.85) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
</style>
