<script lang="ts">
    import { onMount } from "svelte";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null;
    let width: number;
    let height: number;
    let particles: Particle[] = [];
    let animationFrame: number;

    const mouse = { x: -1000, y: -1000 };
    const PARTICLE_COUNT = 60;
    const CONNECTION_DISTANCE = 140;
    const MOUSE_DISTANCE = 200;

    class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        color: string;

        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            // Cyan/Purple mix
            this.color =
                Math.random() > 0.5
                    ? "rgba(0, 240, 255, 0.5)"
                    : "rgba(112, 0, 255, 0.5)";
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse interaction
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < MOUSE_DISTANCE) {
                const angle = Math.atan2(dy, dx);
                const force = (MOUSE_DISTANCE - distance) / MOUSE_DISTANCE;
                const push = force * 0.5;

                this.vx -= Math.cos(angle) * push;
                this.vy -= Math.sin(angle) * push;
            }

            // Friction
            this.vx *= 0.99;
            this.vy *= 0.99;
        }

        draw() {
            if (!ctx) return;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        resize();
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }
        animate();
    }

    function resize() {
        if (!canvas) return;
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        // Update and draw particles
        particles.forEach((p) => {
            p.update();
            p.draw();
        });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONNECTION_DISTANCE) {
                    const opacity = 1 - dist / CONNECTION_DISTANCE;
                    ctx.strokeStyle = `rgba(100, 150, 255, ${opacity * 0.15})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Mouse connections
        particles.forEach((p) => {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < MOUSE_DISTANCE && ctx) {
                const opacity = 1 - dist / MOUSE_DISTANCE;
                ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.3})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            }
        });

        animationFrame = requestAnimationFrame(animate);
    }

    function handleMouseMove(e: MouseEvent) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    onMount(() => {
        ctx = canvas.getContext("2d");
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        init();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    });
</script>

<canvas bind:this={canvas} class="interactive-bg" aria-hidden="true"></canvas>

<style>
    .interactive-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        pointer-events: none;
        background: radial-gradient(circle at 50% 0%, #0f172a 0%, #02040a 100%);
    }
</style>
