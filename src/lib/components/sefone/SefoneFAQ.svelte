<script lang="ts">
  import { locale, t, type Dictionary } from '$lib/i18n';

  const localeStore = locale;
  const tStore = t;

  let dict: Dictionary | undefined;
  let openIndex: number | null = 0;

  const toggle = (index: number) => {
    openIndex = openIndex === index ? null : index;
  };

  $: dict = $tStore as Dictionary;
  $: currentLocale = ($localeStore ?? 'es') as 'es' | 'en';
  $: faq = dict?.projectPages.sefone.faq;
</script>

{#if faq}
  <section class="faq" aria-labelledby="sefone-faq-title">
    <div class="container">
      <div class="heading">
        <p class="eyebrow">FAQ</p>
        <h2 id="sefone-faq-title">{faq.title}</h2>
        <p class="subtitle">{faq.caption}</p>
      </div>
      <div class="accordion" role="list">
        {#each faq.items as item, index}
          <article class="accordion-item" role="listitem">
            <button
              type="button"
              class:open={openIndex === index}
              on:click={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <svg
                class:rotated={openIndex === index}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="#3D3530"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            {#if openIndex === index}
              <div class="panel">
                <p>{item.answer}</p>
              </div>
            {/if}
          </article>
        {/each}
      </div>
    </div>
  </section>
{/if}

<style>
  .faq {
    background: #f0e9e2;
    padding: clamp(3rem, 6vw, 5rem) 0;
  }

  .container {
    width: min(900px, 90vw);
    margin: 0 auto;
    display: grid;
    gap: 1.5rem;
  }

  .heading {
    text-align: center;
    color: #3d3530;
  }

  .eyebrow {
    margin: 0;
    font-size: 0.8rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #6b5f56;
  }

  h2 {
    margin: 0.5rem 0;
    font-size: clamp(1.8rem, 3vw, 2.2rem);
  }

  .subtitle {
    margin: 0;
    color: #6b5f56;
  }

  .accordion {
    display: grid;
    gap: 1rem;
  }

  .accordion-item {
    border-radius: 28px;
    border: 1px solid #e2d6cb;
    background: #fff;
    box-shadow: 0 18px 32px rgba(61, 53, 48, 0.08);
  }

  button {
    all: unset;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.1rem 1.4rem;
    font-weight: 600;
    color: #3d3530;
    cursor: pointer;
  }

  button svg {
    transition: transform 0.2s ease;
  }

  .rotated {
    transform: rotate(180deg);
  }

  .panel {
    padding: 0 1.4rem 1.2rem;
    color: #6b5f56;
  }
</style>
