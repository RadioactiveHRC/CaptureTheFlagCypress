/* ==========================================================================
   WEBSITE CONFIGURATION
   After running google-form-generator.gs, paste your live Google Form URL below.
   ========================================================================== */
const SIGNUP_CONFIG = {
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfJmfrwOfRX7a3qI_omJHd99ULkXa_pTh6xaFNEtZSmJgp3Gg/viewform",
  embedGoogleFormAutomatically: true,
  purchaseOptions: [
    {
      name: "Individual Registration",
      tag: "Player pass",
      price: "$99",
      description: "Full season registration for one player.",
      stripeUrl: "", // Paste a Stripe Payment Link here, for example: "https://buy.stripe.com/..."
      paypalUrl: "", // Paste a PayPal Payment Link here, for example: "https://www.paypal.com/ncp/payment/..."
    },
    {
      name: "Team Registration",
      tag: "Team bundle",
      price: "$599",
      description: "Register a complete team roster.",
      stripeUrl: "",
      paypalUrl: "",
    },
    {
      name: "Merchandise Package",
      tag: "Optional gear",
      price: "$45",
      description: "League shirt, bottle, and sticker package.",
      stripeUrl: "",
      paypalUrl: "",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  renderPurchaseOptions();
  setupFormLinks();
  setupOptionalEmbed();
});

function renderPurchaseOptions() {
  const target = document.querySelector("[data-purchase-options]");
  if (!target) return;

  target.innerHTML = SIGNUP_CONFIG.purchaseOptions
    .map((option) => {
      const stripeButton = buildPaymentButton(option.stripeUrl, "Pay with Stripe");
      const paypalButton = buildPaymentButton(option.paypalUrl, "Pay with PayPal", "secondary");

      return `
        <article class="purchase-card">
          <span class="purchase-tag">${option.tag}</span>
          <h3>${option.name}</h3>
          <strong>${option.price}</strong>
          <p>${option.description}</p>
          <div class="purchase-actions">
            ${stripeButton}
            ${paypalButton}
          </div>
        </article>
      `;
    })
    .join("");

  target.querySelectorAll("[data-payment-missing]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Payment link not configured yet. Add a Stripe or PayPal payment URL in website/script.js.");
    });
  });
}

function buildPaymentButton(url, label, variant = "primary") {
  if (!url) {
    return `<a class="button ${variant}" href="#" data-payment-missing aria-disabled="true">${label}</a>`;
  }

  return `
    <a class="button ${variant}" href="${url}" target="_blank" rel="noopener noreferrer">
      ${label}
    </a>
  `;
}

function setupFormLinks() {
  const formLinks = document.querySelectorAll("[data-form-link]");

  formLinks.forEach((link) => {
    if (!SIGNUP_CONFIG.googleFormUrl) {
      link.setAttribute("href", "#form");
      link.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("#form")?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }

    link.setAttribute("href", SIGNUP_CONFIG.googleFormUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}

function setupOptionalEmbed() {
  if (!SIGNUP_CONFIG.embedGoogleFormAutomatically || !SIGNUP_CONFIG.googleFormUrl) return;

  const shell = document.querySelector("[data-embed-shell]");
  if (!shell) return;

  const embedUrl = SIGNUP_CONFIG.googleFormUrl.includes("embedded=true")
    ? SIGNUP_CONFIG.googleFormUrl
    : `${SIGNUP_CONFIG.googleFormUrl}${SIGNUP_CONFIG.googleFormUrl.includes("?") ? "&" : "?"}embedded=true`;

  shell.innerHTML = `
    <iframe
      src="${embedUrl}"
      width="100%"
      height="900"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading...
    </iframe>
  `;
}
