import { browser } from "$app/environment";
import { derived, writable } from "svelte/store";

export type Locale = "en" | "es";

type ProductKey = "sefone" | "minervax";

interface ValueItem {
  title: string;
  description: string;
}

interface Milestone {
  quarter: string;
  title: string;
  description: string;
  product: ProductKey | "all";
}

interface BlogPost {
  title: string;
  description: string;
  href: string;
  date: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ProductCard {
  name: string;
  status: "available" | "wip";
  statusLabel: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  href: string;
  placeholder: string;
  imageAlt: string;
}

interface ProjectPageDefinition {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    statusBadge: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
    imagePlaceholder: string;
    imageAlt: string;
  };
  overview: {
    title: string;
    body: string;
    bullets: string[];
    placeholder: string;
    placeholderAlt: string;
  };
  features: {
    title: string;
    caption: string;
    items: ValueItem[];
  };
  roadmap: {
    title: string;
    caption: string;
    items: Milestone[];
  };
  faq: {
    title: string;
    caption: string;
    items: FaqItem[];
  };
	cta: {
		title: string;
		subtitle: string;
		button: string;
		href: string;
	};
}

interface SeoEntry {
	title: string;
	description: string;
	ogImage: string;
}

export interface Dictionary {
	nav: {
		home: string;
		roadmap: string;
		blog: string;
    faq: string;
    contact: string;
    products: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
    sefoneTagline: string;
    minervaxTagline: string;
    availableBadge: string;
    wipBadge: string;
  };
  mission: {
    title: string;
    description: string;
    values: ValueItem[];
  };
  products: {
    title: string;
    caption: string;
    cards: ProductCard[];
  };
  roadmap: {
    title: string;
    caption: string;
    items: Milestone[];
  };
  blog: {
    title: string;
    caption: string;
    posts: BlogPost[];
    viewAll: string;
  };
  faq: {
    title: string;
    caption: string;
    items: FaqItem[];
  };
  team: {
    title: string;
    caption: string;
    founder: {
      name: string;
      role: string;
      bio: string;
      placeholder: string;
      imageAlt: string;
    };
    future: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    placeholder: string;
  };
  contact: {
    title: string;
    description: string;
    emailLabel: string;
    emailValue: string;
    socialLabel: string;
  };
	footer: {
		tagline: string;
		rights: string;
		links: {
			privacy: string;
			terms: string;
		};
		social: string;
	};
	seo: {
		home: SeoEntry;
		sefone: SeoEntry;
		minervax: SeoEntry;
	};
	projectPages: Record<ProductKey, ProjectPageDefinition>;
}

const dictionary: Record<Locale, Dictionary> = {
  es: {
    nav: {
      home: "Inicio",
      roadmap: "Ruta",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contacto",
      products: "Productos",
      language: "Idioma",
    },
    hero: {
      eyebrow: "Artemisa Development",
      title: "Creamos herramientas digitales para la vida diaria.",
      subtitle:
        "Artemisa Development diseña, construye y mantiene productos propios pensados para el bienestar y la seguridad de las personas.",
      primaryCta: "Explorar Sefone",
      primaryHref: "/sefone",
      secondaryCta: "Conoce Minervax",
      secondaryHref: "/minervax",
      sefoneTagline: "Protección solar inteligente para cada día.",
      minervaxTagline: "Seguridad ciudadana colaborativa y en tiempo real.",
      availableBadge: "Disponible ahora",
      wipBadge: "En desarrollo",
    },
    mission: {
      title: "Nuestra misión",
      description:
        "Impulsamos productos que unen bienestar, seguridad y tecnología accesible para las personas.",
      values: [
        {
          title: "Diseño humano",
          description:
            "Creamos experiencias empáticas centradas en las necesidades reales.",
        },
        {
          title: "Tecnología práctica",
          description:
            "Cada funcionalidad existe para resolver un problema concreto del día a día.",
        },
        {
          title: "Experiencias inclusivas",
          description:
            "Construimos con diversidad en mente para que nadie se quede fuera.",
        },
      ],
    },
    products: {
      title: "Nuestros productos",
      caption:
        "Dos aplicaciones con una visión compartida: cuidar y proteger a las personas.",
      cards: [
        {
          name: "Sefone",
          status: "available",
          statusLabel: "Disponible",
          description:
            "Una app que acompaña tu cuidado solar con recomendaciones personalizadas y recordatorios inteligentes.",
          highlights: [
            "Índices UV locales y pronósticos por hora",
            "Recordatorios automáticos para reaplicar protector",
            "Perfiles familiares con rutinas compartidas",
          ],
          ctaLabel: "Ir a Sefone",
          href: "/sefone",
          placeholder: "https://placehold.co/600x400/png?text=Sefone",
          imageAlt: "Vista previa de la interfaz de Sefone",
        },
        {
          name: "Minervax",
          status: "wip",
          statusLabel: "En desarrollo",
          description:
            "Plataforma ciudadana para sentirte seguro, compartir alertas confiables y actuar en comunidad.",
          highlights: [
            "Alertas verificadas por vecindarios y autoridades",
            "Mapas dinámicos con zonas de seguridad",
            "Protocolos de respuesta rápida y seguimiento",
          ],
          ctaLabel: "Ver progreso",
          href: "/minervax",
          placeholder: "https://placehold.co/600x400/png?text=Minervax",
          imageAlt: "Vista previa de la interfaz de Minervax",
        },
      ],
    },
    roadmap: {
      title: "Roadmap 2025",
      caption:
        "Hitos que nos guían para lanzar y evolucionar nuestras experiencias.",
      items: [
        {
          quarter: "Q1 2025",
          title: "Lanzamiento de Sefone en iOS y Android",
          description:
            "Experiencia completa con rutinas solares y alertas hiperlocales.",
          product: "sefone",
        },
        {
          quarter: "Q2 2025",
          title: "Beta cerrada de Minervax",
          description:
            "Inicio de la red colaborativa con comunidades piloto en la Ciudad de México.",
          product: "minervax",
        },
        {
          quarter: "Q3 2025",
          title: "Reportes UV comunitarios",
          description:
            "Usuarios de Sefone envían observaciones que enriquecen los datos meteorológicos.",
          product: "sefone",
        },
        {
          quarter: "Q4 2025",
          title: "Alertas colaborativas y widgets de Minervax",
          description:
            "Acceso rápido a alertas críticas desde la pantalla principal y dispositivos wearables.",
          product: "minervax",
        },
      ],
    },
    blog: {
      title: "Blog y notas del equipo",
      caption: "Historias, aprendizajes y avances detrás de cada lanzamiento.",
      viewAll: "Ver todas las notas",
      posts: [
        {
          title: "Cómo diseñamos recordatorios que no interrumpen tu día",
          description:
            "Compartimos el proceso de investigación con familias que usan Sefone en distintas rutinas.",
          href: "/blog/sefone-reminders",
          date: "14 Ene 2025",
        },
        {
          title: "Seguridad ciudadana con empatía como eje",
          description:
            "Principios que guían las decisiones de producto de Minervax para crear confianza y colaboración.",
          href: "/blog/minervax-empathy",
          date: "08 Ene 2025",
        },
        {
          title:
            "Nuestro stack tecnológico para lanzar rápido sin perder calidad",
          description:
            "Detrás de escena: SvelteKit, infra en Cloudflare y prácticas que nos permiten iterar con foco.",
          href: "/blog/tech-stack-2025",
          date: "20 Dic 2024",
        },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      caption: "Resolvemos las dudas más comunes sobre Artemisa Development.",
      items: [
        {
          question: "¿Por qué no aceptan proyectos externos?",
          answer:
            "Concentrar el talento en nuestros productos garantiza calidad, visión a largo plazo y soporte cercano.",
        },
        {
          question: "¿Cómo puedo acceder antes a Minervax?",
          answer:
            "Únete a la lista de espera y recibirás invitaciones cuando abramos nuevas ciudades para prueba.",
        },
        {
          question: "¿Sefone funciona sin conexión?",
          answer:
            "Puedes consultar tus rutinas guardadas offline. Los datos UV y recomendaciones se sincronizan al reconectar.",
        },
        {
          question: "¿Tienen planes para más plataformas?",
          answer:
            "Sí, exploramos integraciones con wearables y asistentes de voz para expandir la experiencia.",
        },
      ],
    },
    team: {
      title: "Conoce al equipo",
      caption: "Liderado por personas curiosas que crean con propósito.",
      founder: {
        name: "Miguel Toledano",
        role: "Founder",
        bio: "Ingeniero de software especializado en backend, amante de los animales y los videojuegos. Diseña productos funcionales, accesibles y confiables que combinan bienestar, seguridad y tecnología humana.",
        placeholder: "https://placehold.co/400x400/png?text=Miguel",
        imageAlt: "Retrato de Miguel Toledano",
      },
      future: "Pronto se sumará más talento multidisciplinario.",
    },
    cta: {
      title: "Únete a nuestra lista de novedades",
      subtitle:
        "Recibe lanzamientos, betas cerradas y aprendizajes directamente en tu correo.",
      button: "Quiero enterarme",
      placeholder: "https://placehold.co/800x400/png?text=Newsletter",
    },
    contact: {
      title: "Conversemos",
      description: "¿Preguntas, ideas o alianzas? Escríbenos y conversemos.",
      emailLabel: "Correo",
      emailValue: "hola@artemisa.dev",
      socialLabel: "Síguenos",
    },
    footer: {
      tagline: "Creando productos propios para un futuro más seguro y humano.",
      rights: "© {year} Artemisa Development. Todos los derechos reservados.",
      links: {
        privacy: "Privacidad",
        terms: "Términos",
      },
      social: "Redes",
    },
    seo: {
      home: {
        title: "Artemisa Development | Apps propias de bienestar y seguridad",
        description:
          "Creamos Sefone y Minervax, aplicaciones con tecnología accesible y confiable enfocadas en bienestar y seguridad ciudadana.",
        ogImage: "https://placehold.co/1200x630/png?text=Artemisa+Development",
      },
      sefone: {
        title: "Sefone | Protección solar inteligente para cada día",
        description:
          "Sefone ofrece rutinas solares personalizadas, recordatorios inteligentes y datos UV hiperlocales para toda tu familia.",
        ogImage: "https://placehold.co/1200x630/png?text=Sefone",
      },
      minervax: {
        title: "Minervax | Seguridad ciudadana colaborativa en tiempo real",
        description:
          "Minervax conecta alertas verificadas, mapas vivos y protocolos guiados para cuidar a tu comunidad con confianza.",
        ogImage: "https://placehold.co/1200x630/png?text=Minervax",
      },
    },
    projectPages: {
      sefone: {
        hero: {
          eyebrow: "Sefone",
          title: "Protección solar inteligente a tu ritmo.",
          subtitle:
            "Recomendaciones basadas en ciencia, recordatorios oportunos y rutinas que se adaptan a ti y tu familia.",
          statusBadge: "Disponible ahora",
          primaryCta: "Unirme a la comunidad",
          primaryHref: "#waitlist",
          secondaryCta: "Ver roadmap",
          secondaryHref: "#roadmap",
          imagePlaceholder:
            "https://placehold.co/900x600/png?text=Sefone+Preview",
          imageAlt: "Mockup de la app Sefone en un teléfono",
        },
        overview: {
          title: "Tu aliado diario ante la radiación UV",
          body: "Sefone combina datos meteorológicos, sensores locales y hábitos personales para ayudarte a cuidar tu piel sin fricción.",
          bullets: [
            "Planes personalizados creados con dermatólogos aliados.",
            "Alertas contextuales según tu ubicación y tipo de piel.",
            "Seguimiento familiar con reportes compartidos.",
          ],
          placeholder:
            "https://placehold.co/600x400/png?text=Routines+Dashboard",
          placeholderAlt: "Ilustración del panel de rutinas de Sefone",
        },
        features: {
          title: "Características clave",
          caption: "Pensadas para hábitos reales y agendas ocupadas.",
          items: [
            {
              title: "Recordatorios inteligentes",
              description:
                "Notificaciones que respetan tus momentos importantes y reaccionan a cambios en el clima.",
            },
            {
              title: "Modo familia",
              description:
                "Configura perfiles para cada integrante y comparte avances con cuidadores o especialistas.",
            },
            {
              title: "Insights accionables",
              description:
                "Resúmenes semanales con recomendaciones prácticas y tendencias de protección.",
            },
          ],
        },
        roadmap: {
          title: "Roadmap Sefone",
          caption: "Así seguimos ampliando el impacto de la experiencia.",
          items: [
            {
              quarter: "Q1 2025",
              title: "Lanzamiento público",
              description:
                "Disponibilidad en iOS y Android con rutinas solares completas.",
              product: "sefone",
            },
            {
              quarter: "Q3 2025",
              title: "Reportes UV comunitarios",
              description:
                "Usuarios comparten observaciones que enriquecen los datos oficiales.",
              product: "sefone",
            },
            {
              quarter: "Q4 2025",
              title: "Integraciones con wearables",
              description:
                "Compatibilidad con Apple Watch y dispositivos Wear OS.",
              product: "sefone",
            },
          ],
        },
        faq: {
          title: "Preguntas sobre Sefone",
          caption: "Todo lo que necesitas saber antes de comenzar.",
          items: [
            {
              question: "¿Tiene costo?",
              answer:
                "Sefone se lanzará con un plan gratuito y opciones premium para funciones avanzadas.",
            },
            {
              question: "¿Quién valida las recomendaciones?",
              answer:
                "Trabajamos con especialistas en dermatología y ciencia de datos para mantener modelos actualizados.",
            },
            {
              question: "¿En qué países estará disponible?",
              answer:
                "Empezamos en México y ampliamos gradualmente a Latinoamérica durante 2025.",
            },
          ],
        },
        cta: {
          title: "Recibe acceso prioritario y novedades de Sefone",
          subtitle:
            "Sé de las primeras personas en descubrir nuevas funciones y eventos de la comunidad.",
          button: "Anotarme en la lista",
          href: "#waitlist",
        },
      },
      minervax: {
        hero: {
          eyebrow: "Minervax",
          title: "Seguridad ciudadana colaborativa y en tiempo real.",
          subtitle:
            "Alertas confiables, mapas vivos y protocolos compartidos para cuidar a tu comunidad.",
          statusBadge: "En desarrollo",
          primaryCta: "Unirme a la beta",
          primaryHref: "#beta",
          secondaryCta: "Leer el manifiesto",
          secondaryHref: "#mission",
          imagePlaceholder:
            "https://placehold.co/900x600/png?text=Minervax+Preview",
          imageAlt: "Mockup de Minervax con mapa y alertas",
        },
        overview: {
          title: "Información verificada cuando más importa",
          body: "Minervax conecta reportes ciudadanos con fuentes oficiales para ofrecer un panorama confiable y accionable.",
          bullets: [
            "Alertas categorizadas por nivel de riesgo y cercanía.",
            "Canales de comunicación con vecindarios y autoridades.",
            "Recursos educativos para actuar con seguridad.",
          ],
          placeholder: "https://placehold.co/600x400/png?text=Community+Safety",
          placeholderAlt:
            "Ilustración de personas colaborando en seguridad ciudadana",
        },
        features: {
          title: "Lo que hace única a Minervax",
          caption: "Diseñada para crear confianza y respuesta colaborativa.",
          items: [
            {
              title: "Alertas verificadas",
              description:
                "Panel de verificación comunitaria que valida reportes antes de escalar una alarma.",
            },
            {
              title: "Protocolos guiados",
              description:
                "Instrucciones paso a paso para actuar en situaciones de emergencia.",
            },
            {
              title: "Redes locales",
              description:
                "Crea células de confianza con tus contactos y vecindario para compartir información relevante.",
            },
          ],
        },
        roadmap: {
          title: "Roadmap Minervax",
          caption: "Construyendo junto con comunidades piloto.",
          items: [
            {
              quarter: "Q2 2025",
              title: "Beta cerrada CDMX",
              description:
                "Lanzamiento con vecindarios seleccionados y grupos de respuesta rápida.",
              product: "minervax",
            },
            {
              quarter: "Q3 2025",
              title: "Mapa colaborativo nacional",
              description:
                "Expansión a nuevas ciudades con mejores filtros y capas de información.",
              product: "minervax",
            },
            {
              quarter: "Q4 2025",
              title: "Integraciones con instituciones",
              description:
                "Enlaces directos con líneas de auxilio y autoridades locales.",
              product: "minervax",
            },
          ],
        },
        faq: {
          title: "Preguntas sobre Minervax",
          caption: "Descubre cómo funcionará la beta y qué esperar.",
          items: [
            {
              question: "¿Quién puede participar en la beta?",
              answer:
                "Priorizamos a comunidades organizadas y aliadas que puedan colaborar activamente con reportes.",
            },
            {
              question: "¿Cómo se maneja la privacidad?",
              answer:
                "Los datos personales se cifran y los reportes se anonimizarán antes de compartirse públicamente.",
            },
            {
              question: "¿La app será gratuita?",
              answer:
                "Sí, la versión base será gratuita. Servicios premium para organizaciones llegarán después del lanzamiento público.",
            },
          ],
        },
        cta: {
          title: "Únete a la beta y co-crea la primera versión de Minervax",
          subtitle: "Recibe invitaciones, encuestas y sesiones de co-diseño.",
          button: "Anotarme",
          href: "#beta",
        },
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      roadmap: "Roadmap",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contact",
      products: "Products",
      language: "Language",
    },
    hero: {
      eyebrow: "Artemisa Development",
      title: "We craft everyday tools that make life easier.",
      subtitle:
        "Artemisa Development designs, builds, and maintains our own products focused on wellness and safety for everyone.",
      primaryCta: "Explore Sefone",
      primaryHref: "/sefone",
      secondaryCta: "Discover Minervax",
      secondaryHref: "/minervax",
      sefoneTagline: "Smart sun care for every day.",
      minervaxTagline: "Collaborative civic safety in real time.",
      availableBadge: "Available now",
      wipBadge: "Work in progress",
    },
    mission: {
      title: "Our mission",
      description:
        "We launch products that blend wellness, safety, and accessible technology for daily life.",
      values: [
        {
          title: "Human-centered design",
          description:
            "Every experience starts with empathy and real-life needs.",
        },
        {
          title: "Practical technology",
          description: "Features exist to solve concrete, everyday problems.",
        },
        {
          title: "Inclusive experiences",
          description: "We build with diversity in mind so nobody is left out.",
        },
      ],
    },
    products: {
      title: "Our products",
      caption:
        "Two applications, one shared vision: care for and protect people.",
      cards: [
        {
          name: "Sefone",
          status: "available",
          statusLabel: "Available",
          description:
            "A daily sun-care companion delivering tailored recommendations and smart reminders.",
          highlights: [
            "Local UV index forecasts by the hour",
            "Automatic reminders to reapply sunscreen",
            "Family profiles with shared routines",
          ],
          ctaLabel: "Go to Sefone",
          href: "/sefone",
          placeholder: "https://placehold.co/600x400/png?text=Sefone",
          imageAlt: "Preview of the Sefone interface",
        },
        {
          name: "Minervax",
          status: "wip",
          statusLabel: "In progress",
          description:
            "A civic safety platform that keeps you informed, shares trusted alerts, and fosters community action.",
          highlights: [
            "Verified alerts from neighbors and authorities",
            "Dynamic maps with safe areas and incident layers",
            "Guided response protocols and follow-up",
          ],
          ctaLabel: "View progress",
          href: "/minervax",
          placeholder: "https://placehold.co/600x400/png?text=Minervax",
          imageAlt: "Preview of the Minervax interface",
        },
      ],
    },
    roadmap: {
      title: "2025 Roadmap",
      caption: "Milestones guiding how we launch and evolve each experience.",
      items: [
        {
          quarter: "Q1 2025",
          title: "Sefone launch on iOS and Android",
          description:
            "Full experience with solar routines and hyperlocal alerts.",
          product: "sefone",
        },
        {
          quarter: "Q2 2025",
          title: "Minervax closed beta",
          description:
            "Community-driven pilot programs kicking off in Mexico City.",
          product: "minervax",
        },
        {
          quarter: "Q3 2025",
          title: "Community UV reporting",
          description:
            "Sefone members contribute observations that enrich official data.",
          product: "sefone",
        },
        {
          quarter: "Q4 2025",
          title: "Collaborative alerts and widgets",
          description:
            "Quick access to critical alerts on home screens and wearables.",
          product: "minervax",
        },
      ],
    },
    blog: {
      title: "Team journal",
      caption: "Stories, lessons, and progress behind each release.",
      viewAll: "View all posts",
      posts: [
        {
          title: "Designing reminders that respect your day",
          description:
            "A look into our research with families using Sefone across different routines.",
          href: "/blog/sefone-reminders",
          date: "14 Jan 2025",
        },
        {
          title: "Empathy as a core pillar for civic safety",
          description:
            "Guiding principles behind Minervax product decisions to foster trust and collaboration.",
          href: "/blog/minervax-empathy",
          date: "08 Jan 2025",
        },
        {
          title: "Our tech stack to ship fast without losing quality",
          description:
            "Behind the scenes: SvelteKit, Cloudflare infrastructure, and practices that keep us focused.",
          href: "/blog/tech-stack-2025",
          date: "20 Dec 2024",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      caption:
        "Answers to the most common questions about Artemisa Development.",
      items: [
        {
          question: "Why don’t you take external projects?",
          answer:
            "Focusing all talent on our own products keeps quality high, the vision aligned, and support personal.",
        },
        {
          question: "How can I access Minervax early?",
          answer:
            "Join the waitlist to receive invitations as we open new pilot cities.",
        },
        {
          question: "Does Sefone work offline?",
          answer:
            "You can review saved routines offline. UV data and recommendations sync once you reconnect.",
        },
        {
          question: "Are more platforms coming?",
          answer:
            "Yes, we are exploring wearable integrations and voice assistants to expand the experience.",
        },
      ],
    },
    team: {
      title: "Meet the team",
      caption: "Led by curious people building with purpose.",
      founder: {
        name: "Miguel Toledano",
        role: "Founder",
        bio: "Backend-focused software engineer, animal lover, and gamer. Crafts functional, accessible, and trustworthy technology that blends wellness, safety, and a human touch.",
        placeholder: "https://placehold.co/400x400/png?text=Miguel",
        imageAlt: "Portrait of Miguel Toledano",
      },
      future: "More multidisciplinary talent joining soon.",
    },
    cta: {
      title: "Join our updates list",
      subtitle:
        "Get launches, closed betas, and lessons straight to your inbox.",
      button: "Keep me posted",
      placeholder: "https://placehold.co/800x400/png?text=Newsletter",
    },
    contact: {
      title: "Let’s connect",
      description:
        "Questions, ideas, or partnerships? Reach out and let’s talk.",
      emailLabel: "Email",
      emailValue: "hola@artemisa.dev",
      socialLabel: "Follow us",
    },
    footer: {
      tagline: "Building our own products for a safer, more human future.",
      rights: "© {year} Artemisa Development. All rights reserved.",
      links: {
        privacy: "Privacy",
        terms: "Terms",
      },
      social: "Social",
    },
    seo: {
      home: {
        title: "Artemisa Development | Purpose-built wellness and safety apps",
        description:
          "We build Sefone and Minervax: our own accessible, trustworthy products focused on everyday wellness and civic safety.",
        ogImage: "https://placehold.co/1200x630/png?text=Artemisa+Development",
      },
      sefone: {
        title: "Sefone | Smart sun care tailored to your day",
        description:
          "Sefone delivers personalized solar routines, smart reminders, and hyperlocal UV insights for you and your family.",
        ogImage: "https://placehold.co/1200x630/png?text=Sefone",
      },
      minervax: {
        title: "Minervax | Collaborative civic safety in real time",
        description:
          "Minervax connects verified alerts, living maps, and guided protocols so communities can stay safe together.",
        ogImage: "https://placehold.co/1200x630/png?text=Minervax",
      },
    },
    projectPages: {
      sefone: {
        hero: {
          eyebrow: "Sefone",
          title: "Smart sun care tailored to your rhythm.",
          subtitle:
            "Science-backed recommendations, timely reminders, and routines that adapt to you and your family.",
          statusBadge: "Available now",
          primaryCta: "Join the community",
          primaryHref: "#waitlist",
          secondaryCta: "View roadmap",
          secondaryHref: "#roadmap",
          imagePlaceholder:
            "https://placehold.co/900x600/png?text=Sefone+Preview",
          imageAlt: "Mockup of Sefone on a phone",
        },
        overview: {
          title: "Your daily ally against UV exposure",
          body: "Sefone blends weather data, local sensors, and personal habits to help you protect your skin without friction.",
          bullets: [
            "Personal plans created with partner dermatologists.",
            "Contextual alerts based on location and skin type.",
            "Family tracking with shared reports.",
          ],
          placeholder:
            "https://placehold.co/600x400/png?text=Routines+Dashboard",
          placeholderAlt: "Illustration of the Sefone routines dashboard",
        },
        features: {
          title: "Key features",
          caption: "Designed for real habits and busy schedules.",
          items: [
            {
              title: "Smart reminders",
              description:
                "Notifications that respect your important moments and react to weather changes.",
            },
            {
              title: "Family mode",
              description:
                "Configure profiles for each member and share progress with caregivers or specialists.",
            },
            {
              title: "Actionable insights",
              description:
                "Weekly summaries with practical recommendations and protection trends.",
            },
          ],
        },
        roadmap: {
          title: "Sefone roadmap",
          caption: "How we keep expanding the experience.",
          items: [
            {
              quarter: "Q1 2025",
              title: "Public launch",
              description:
                "Available on iOS and Android with complete solar routines.",
              product: "sefone",
            },
            {
              quarter: "Q3 2025",
              title: "Community UV reporting",
              description:
                "Members share observations that enrich official data sources.",
              product: "sefone",
            },
            {
              quarter: "Q4 2025",
              title: "Wearable integrations",
              description:
                "Compatibility with Apple Watch and Wear OS devices.",
              product: "sefone",
            },
          ],
        },
        faq: {
          title: "Sefone FAQs",
          caption: "Everything you need to know before getting started.",
          items: [
            {
              question: "Is there a cost?",
              answer:
                "Sefone will launch with a free tier and premium options for advanced features.",
            },
            {
              question: "Who validates the recommendations?",
              answer:
                "We collaborate with dermatology specialists and data scientists to keep models up to date.",
            },
            {
              question: "Where will it be available?",
              answer:
                "We start in Mexico and expand across Latin America throughout 2025.",
            },
          ],
        },
        cta: {
          title: "Get priority access and Sefone updates",
          subtitle:
            "Be among the first to discover new features and community events.",
          button: "Join the list",
          href: "#waitlist",
        },
      },
      minervax: {
        hero: {
          eyebrow: "Minervax",
          title: "Collaborative civic safety in real time.",
          subtitle:
            "Trusted alerts, living maps, and shared protocols to keep your community safe.",
          statusBadge: "Work in progress",
          primaryCta: "Join the beta",
          primaryHref: "#beta",
          secondaryCta: "Read the manifesto",
          secondaryHref: "#mission",
          imagePlaceholder:
            "https://placehold.co/900x600/png?text=Minervax+Preview",
          imageAlt: "Mockup of Minervax showing a map and alerts",
        },
        overview: {
          title: "Verified information when it matters most",
          body: "Minervax connects citizen reports with official sources to deliver a trustworthy, actionable view.",
          bullets: [
            "Alerts categorized by risk level and proximity.",
            "Communication channels with neighborhoods and authorities.",
            "Educational resources to act safely.",
          ],
          placeholder: "https://placehold.co/600x400/png?text=Community+Safety",
          placeholderAlt:
            "Illustration of people collaborating on community safety",
        },
        features: {
          title: "What makes Minervax unique",
          caption: "Created to build trust and collaborative response.",
          items: [
            {
              title: "Verified alerts",
              description:
                "A community verification panel reviews reports before escalating an alarm.",
            },
            {
              title: "Guided protocols",
              description:
                "Step-by-step instructions to act in emergency situations.",
            },
            {
              title: "Local networks",
              description:
                "Create trusted groups with your contacts and neighborhood to share relevant updates.",
            },
          ],
        },
        roadmap: {
          title: "Minervax roadmap",
          caption: "Building together with pilot communities.",
          items: [
            {
              quarter: "Q2 2025",
              title: "CDMX closed beta",
              description:
                "Launch with selected neighborhoods and rapid-response groups.",
              product: "minervax",
            },
            {
              quarter: "Q3 2025",
              title: "Nationwide collaborative map",
              description:
                "Expansion to new cities with improved filters and data layers.",
              product: "minervax",
            },
            {
              quarter: "Q4 2025",
              title: "Institution integrations",
              description: "Direct links to helplines and local authorities.",
              product: "minervax",
            },
          ],
        },
        faq: {
          title: "Minervax FAQs",
          caption: "Understand how the beta will work and what to expect.",
          items: [
            {
              question: "Who can join the beta?",
              answer:
                "We prioritize organized communities and partner groups who can collaborate actively with reports.",
            },
            {
              question: "How is privacy handled?",
              answer:
                "Personal data is encrypted and reports are anonymized before being shared publicly.",
            },
            {
              question: "Will the app be free?",
              answer:
                "Yes, the base version will be free. Premium services for organizations will follow the public launch.",
            },
          ],
        },
        cta: {
          title: "Join the beta and co-create the first Minervax release",
          subtitle: "Receive invites, surveys, and co-design sessions.",
          button: "Count me in",
          href: "#beta",
        },
      },
    },
  },
};

const DEFAULT_LOCALE: Locale = "es";

const localeStore = writable<Locale>(DEFAULT_LOCALE);

export const t = derived(localeStore, ($locale) => dictionary[$locale]);

export const locale = {
  subscribe: localeStore.subscribe,
};

export const setLocale = (next: Locale) => {
  localeStore.set(next);
  if (browser) {
    localStorage.setItem("artemisa-locale", next);
    document.documentElement.lang = next;
    document.body.dataset.locale = next;
  }
};

if (browser) {
  const saved = localStorage.getItem("artemisa-locale");
  if (saved === "es" || saved === "en") {
    localeStore.set(saved);
    document.documentElement.lang = saved;
    document.body.dataset.locale = saved;
  } else {
    document.documentElement.lang = DEFAULT_LOCALE;
    document.body.dataset.locale = DEFAULT_LOCALE;
  }
}
