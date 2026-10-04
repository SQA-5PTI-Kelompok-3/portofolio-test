const languageButtons = document.querySelectorAll("[data-set-language]");
const translations = document.querySelectorAll("[data-language]");

function setLanguage(language) {
  document.documentElement.lang = language;
  translations.forEach((translation) => {
    translation.hidden = translation.dataset.language !== language;
  });
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.setLanguage === language));
  });
  document.title = language === "id"
    ? "Delfira Karnain — Portofolio"
    : "Delfira Karnain — Portfolio";
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.setLanguage));
});

document.querySelector("#year").textContent = new Date().getFullYear();
