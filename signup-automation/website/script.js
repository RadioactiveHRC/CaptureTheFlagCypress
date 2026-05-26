/* ==========================================================================
   WEBSITE CONFIGURATION
   After running google-form-generator.gs, paste your live Google Form URL below.
   ========================================================================== */
const SIGNUP_CONFIG = {
  googleFormUrl: "", // Example: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
  embedGoogleFormAutomatically: false,
};

document.addEventListener("DOMContentLoaded", () => {
  setupFormLinks();
  setupOptionalEmbed();
});

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
