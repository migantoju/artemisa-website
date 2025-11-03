<script>
    const year = new Date().getFullYear();
</script>

<main>
    <div class="loader" />
    <h1>En construcción 🚧</h1>
    <p>Estamos trabajando para traerte algo increíble.<br />Vuelve pronto.</p>
    <footer>© {year} Artemisa Development Team</footer>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #0f172a, #1e293b);
        color: #e2e8f0;
        font-family:
            "Inter",
            system-ui,
            -apple-system,
            sans-serif;
        text-align: center;
        padding: 2rem;
    }

    h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #f8fafc;
    }

    p {
        font-size: 1.25rem;
        opacity: 0.8;
        margin-bottom: 2rem;
    }

    .loader {
        width: 48px;
        height: 48px;
        border: 4px solid rgba(255, 255, 255, 0.2);
        border-top-color: #38bdf8;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    footer {
        position: absolute;
        bottom: 1rem;
        font-size: 0.875rem;
        opacity: 0.6;
    }
</style>
