const LEGAL_LANGUAGE_STORAGE_KEY = "goldBarberLanguage";
const LEGAL_COOKIE_STORAGE_KEY = "goldBarberCookieConsent";

const legalCookieTranslations = {
  it: {
    title: "Cookie e preferenze",
    text: 'Questo sito usa elementi tecnici e contenuti esterni. Puoi leggere i dettagli nella <a href="cookies.html">Cookie Policy</a>.',
    accept: "Accetta",
    reject: "Rifiuta"
  },
  en: {
    title: "Cookies and preferences",
    text: 'This website uses technical elements and external content. You can read the details in the <a href="cookies.html">Cookie Policy</a>.',
    accept: "Accept",
    reject: "Reject"
  }
};

function refreshLegalCookieBanner(language) {
  const banner = document.querySelector(".cookie-banner");

  if (!banner || localStorage.getItem(LEGAL_COOKIE_STORAGE_KEY)) {
    return;
  }

  const content = legalCookieTranslations[language] || legalCookieTranslations.it;
  banner.innerHTML = getLegalCookieBannerMarkup(content);

  banner.querySelectorAll("[data-cookie-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem(LEGAL_COOKIE_STORAGE_KEY, button.dataset.cookieChoice);
      banner.remove();
      document.body.classList.remove("has-cookie-banner");
    });
  });
}

function setLegalLanguage(language) {
  const nextLanguage = language === "en" ? "en" : "it";
  document.documentElement.lang = nextLanguage;
  document.body.classList.remove("legal-lang-it", "legal-lang-en");
  document.body.classList.add(`legal-lang-${nextLanguage}`);
  localStorage.setItem(LEGAL_LANGUAGE_STORAGE_KEY, nextLanguage);

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.languageOption === nextLanguage);
  });

  const title = document.body.dataset[`title${nextLanguage === "it" ? "It" : "En"}`];
  const description = document.body.dataset[`description${nextLanguage === "it" ? "It" : "En"}`];
  const descriptionTag = document.querySelector('meta[name="description"]');

  if (title) {
    document.title = title;
  }

  if (description && descriptionTag) {
    descriptionTag.setAttribute("content", description);
  }

  refreshLegalCookieBanner(nextLanguage);
}

function getLegalCookieBannerMarkup(content) {
  return `
    <div class="cookie-banner-inner">
      <div class="cookie-copy">
        <strong>${content.title}</strong>
        <p>${content.text}</p>
      </div>
      <div class="cookie-actions">
        <button type="button" class="cookie-btn cookie-btn-secondary" data-cookie-choice="reject">${content.reject}</button>
        <button type="button" class="cookie-btn cookie-btn-primary" data-cookie-choice="accept">${content.accept}</button>
      </div>
    </div>
  `;
}

function initLegalCookieBanner(language) {
  if (localStorage.getItem(LEGAL_COOKIE_STORAGE_KEY)) {
    return;
  }

  const content = legalCookieTranslations[language] || legalCookieTranslations.it;
  const banner = document.createElement("aside");
  banner.className = "cookie-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-live", "polite");
  banner.innerHTML = getLegalCookieBannerMarkup(content);
  document.body.appendChild(banner);
  document.body.classList.add("has-cookie-banner");
  refreshLegalCookieBanner(language);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem(LEGAL_LANGUAGE_STORAGE_KEY) || "it";
  setLegalLanguage(savedLanguage);

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    button.addEventListener("click", () => {
      setLegalLanguage(button.dataset.languageOption);
    });
  });

  initLegalCookieBanner(savedLanguage);
});