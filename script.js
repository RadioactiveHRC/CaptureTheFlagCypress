/* ==========================================================================
   CONFIGURATION: League Content
   Edit values here to update the website without touching the HTML.
   ========================================================================== */
const SITE_CONFIG = {
  leagueName: "Ultimate Capture the Flag",
  leagueDescription:
    "A bold, organized Capture the Flag league for Cypress families, athletes, and teams.",
  slogan: "Move fast. Play smart. Capture everything.",
  seasonBanner: "Season Coming Soon",
  seasonStart: "2027-03-20T09:00:00-05:00",
  ageGroups: "Ages 10-13, 14-17, 18+",
  seasonDates: "Spring 2027, exact dates TBD",
  gameLocations: "Cypress area parks and athletic fields",
  primaryLocation: "Cypress, TX parks",
  registrationDeadline: "TBD - registration opens soon",
  matchSchedule: "Saturday mornings, schedule TBD",
  teamStructure: "6-8 players per roster",
  footerNote: "Organized competition, teamwork, and community for local players.",
  contact: {
    email: "info@example.com",
    phone: "(000) 000-0000",
    phoneHref: "+10000000000",
    instagram: "https://instagram.com/",
    instagramLabel: "@ultimatecapturetheflag",
    facebook: "https://facebook.com/",
    facebookLabel: "Ultimate Capture the Flag",
    leagueAddress: "Cypress, TX 77433",
  },
  links: {
    registrationForm: "#registration",
    purchaseForm: "#registration",
  },
  pricing: [
    {
      name: "Individual Registration",
      price: "$99",
      tag: "Player pass",
      featured: true,
      description: "For individual players joining a league roster.",
      features: ["Full regular season", "League shirt placeholder", "Refereed weekly matches", "Standings access"],
    },
    {
      name: "Team Registration",
      price: "$599",
      tag: "Team bundle",
      featured: false,
      description: "For captains registering a complete roster.",
      features: ["Up to 8 players", "Team scheduling support", "Captain communication", "Priority roster review"],
    },
    {
      name: "Merchandise Package",
      price: "$45",
      tag: "Optional gear",
      featured: false,
      description: "Placeholder package for league merchandise.",
      features: ["League tee placeholder", "Water bottle placeholder", "Sticker pack placeholder", "Pickup at game day"],
    },
  ],
  testimonials: [
    {
      quote:
        "The league concept is exactly what Cypress families need: active, structured, and competitive with a look players actually get excited about.",
      name: "Jordan M.",
      role: "Parent placeholder",
      initials: "JM",
    },
    {
      quote:
        "Capture the Flag rewards communication and fast thinking. It feels like the perfect mix of athletics and strategy.",
      name: "Avery C.",
      role: "Player placeholder",
      initials: "AC",
    },
    {
      quote:
        "The emphasis on safety, referees, and sportsmanship makes this feel ready for real league play.",
      name: "Taylor R.",
      role: "Volunteer placeholder",
      initials: "TR",
    },
  ],
  faq: [
    {
      question: "Who can join?",
      answer:
        "The league is designed for local players in the published age groups. Update the age-group configuration once final divisions are confirmed.",
    },
    {
      question: "Do I need a team?",
      answer:
        "No. Individual players can register and be placed on a roster. Full teams may also register together if team registration is offered.",
    },
    {
      question: "What should I bring?",
      answer:
        "Players should bring athletic shoes, comfortable sports clothing, water, and any required league forms or check-in materials.",
    },
    {
      question: "Where are games played?",
      answer:
        "Games are planned for Cypress area parks and athletic fields. Final locations should be listed before registration opens.",
    },
    {
      question: "How do payments work?",
      answer:
        "Payments and purchase options should be handled through the connected Google Form or another approved payment workflow.",
    },
    {
      question: "Can parents attend?",
      answer:
        "Yes. Parents and guardians are welcome at matches and should follow spectator guidelines shared by league staff.",
    },
    {
      question: "What happens if weather causes cancellation?",
      answer:
        "The league should communicate weather decisions by email, text, or social media and publish makeup dates when available.",
    },
  ],
};

const SELECTORS = {
  header: "[data-header]",
  navToggle: "[data-nav-toggle]",
  navMenu: "[data-nav-menu]",
  navLinks: ".nav-link",
  reveal: ".reveal",
  loader: "[data-loader]",
};

document.addEventListener("DOMContentLoaded", () => {
  hydrateConfig();
  renderPricing();
  renderTestimonials();
  renderFaq();
  initIcons();
  initLoader();
  initNavigation();
  initCountdown();
  initScrollReveal();
  initActiveNavigation();
  initRegistrationLinks();
});

function hydrateConfig() {
  document.querySelectorAll("[data-config]").forEach((node) => {
    const key = node.dataset.config;
    const value = getConfigValue(key);
    if (value) node.textContent = value;
  });

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  setLink("[data-contact-email]", `mailto:${SITE_CONFIG.contact.email}`);
  setLink("[data-contact-email-footer]", `mailto:${SITE_CONFIG.contact.email}`, SITE_CONFIG.contact.email);
  setLink("[data-contact-phone]", `tel:${SITE_CONFIG.contact.phoneHref}`);
  setLink("[data-social-instagram]", SITE_CONFIG.contact.instagram);
  setLink("[data-social-instagram-footer]", SITE_CONFIG.contact.instagram);
  setLink("[data-social-facebook]", SITE_CONFIG.contact.facebook);
  setLink("[data-social-facebook-footer]", SITE_CONFIG.contact.facebook);
}

function getConfigValue(key) {
  if (key in SITE_CONFIG) return SITE_CONFIG[key];
  if (key in SITE_CONFIG.contact) return SITE_CONFIG.contact[key];
  return "";
}

function setLink(selector, href, text) {
  document.querySelectorAll(selector).forEach((node) => {
    node.setAttribute("href", href);
    if (text) node.textContent = text;
  });
}

function renderPricing() {
  const target = document.querySelector("[data-pricing]");
  if (!target) return;

  target.innerHTML = SITE_CONFIG.pricing
    .map(
      (plan) => `
        <article class="pricing-card ${plan.featured ? "is-featured" : ""}">
          <span class="pricing-tag">${plan.tag}</span>
          <h3>${plan.name}</h3>
          <div class="price">${plan.price}</div>
          <p>${plan.description}</p>
          <ul>
            ${plan.features.map((feature) => `<li><i data-lucide="check" aria-hidden="true"></i>${feature}</li>`).join("")}
          </ul>
          <a class="btn ${plan.featured ? "btn-primary" : "btn-outline"}" href="#registration" data-scroll-target="registration">
            Choose Option
          </a>
        </article>
      `
    )
    .join("");
}

function renderTestimonials() {
  const target = document.querySelector("[data-testimonials]");
  if (!target) return;

  target.innerHTML = SITE_CONFIG.testimonials
    .map(
      (item) => `
        <article class="testimonial-card">
          <blockquote>"${item.quote}"</blockquote>
          <div class="testimonial-author">
            <span class="avatar">${item.initials}</span>
            <span><strong>${item.name}</strong><br />${item.role}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFaq() {
  const target = document.querySelector("[data-faq]");
  if (!target) return;

  target.innerHTML = SITE_CONFIG.faq
    .map(
      (item, index) => `
        <article class="faq-item ${index === 0 ? "is-open" : ""}">
          <h3>
            <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
              ${item.question}
              <i data-lucide="chevron-down" aria-hidden="true"></i>
            </button>
          </h3>
          <div class="faq-answer">
            <p>${item.answer}</p>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".faq-item").forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (item.classList.contains("is-open")) {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }

    button.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      answer.style.maxHeight = isOpen ? `${answer.scrollHeight}px` : "0px";
    });
  });
}

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initLoader() {
  const loader = document.querySelector(SELECTORS.loader);
  if (!loader) return;

  const hideLoader = () => {
    window.setTimeout(() => loader.classList.add("is-hidden"), 180);
  };

  if (document.readyState === "complete") {
    hideLoader();
    return;
  }

  window.addEventListener("load", hideLoader, { once: true });
}

function initNavigation() {
  const header = document.querySelector(SELECTORS.header);
  const navToggle = document.querySelector(SELECTORS.navToggle);
  const navMenu = document.querySelector(SELECTORS.navMenu);
  const closeMenu = () => {
    navMenu?.classList.remove("is-open");
    header?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  };

  navToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    header.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initCountdown() {
  const countdown = document.querySelector("[data-countdown]");
  if (!countdown) return;

  const nodes = {
    days: countdown.querySelector("[data-days]"),
    hours: countdown.querySelector("[data-hours]"),
    minutes: countdown.querySelector("[data-minutes]"),
    seconds: countdown.querySelector("[data-seconds]"),
  };

  const seasonStart = new Date(SITE_CONFIG.seasonStart).getTime();

  const update = () => {
    const distance = Math.max(seasonStart - Date.now(), 0);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    nodes.days.textContent = String(days).padStart(2, "0");
    nodes.hours.textContent = String(hours).padStart(2, "0");
    nodes.minutes.textContent = String(minutes).padStart(2, "0");
    nodes.seconds.textContent = String(seconds).padStart(2, "0");
  };

  update();
  window.setInterval(update, 1000);
}

function initScrollReveal() {
  const revealNodes = document.querySelectorAll(SELECTORS.reveal);
  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealNodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    observer.observe(node);
  });
}

function initActiveNavigation() {
  const links = [...document.querySelectorAll(SELECTORS.navLinks)];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-42% 0px -52% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initRegistrationLinks() {
  const registrationLinks = document.querySelectorAll("[data-registration-link]");
  const purchaseLinks = document.querySelectorAll("[data-purchase-link]");

  registrationLinks.forEach((link) => {
    link.href = SITE_CONFIG.links.registrationForm;
    if (SITE_CONFIG.links.registrationForm === "#registration") {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("#registration")?.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  purchaseLinks.forEach((link) => {
    link.href = SITE_CONFIG.links.purchaseForm;
    if (SITE_CONFIG.links.purchaseForm === "#registration") {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("#registration")?.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
}
