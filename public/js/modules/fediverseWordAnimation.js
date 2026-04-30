import randomFromArray from "./randomFromArray.js";

export default async (el) => {
  if (el) {
    const resp = await fetch("/data/translations/fediverse.json");
    const translations = await resp.json();

    let lastText = el.textContent;

    void el.offsetWidth;
    el.classList.add("word-fade-up");

    setInterval(() => {
      el.classList.replace("word-fade-up", "word-fade-out");

      setTimeout(() => {
        const available = translations.filter(
          (t) => t.text.toLowerCase() !== lastText.toLowerCase(),
        );
        lastText = randomFromArray(available).text;
        el.textContent = lastText;

        el.classList.remove("word-fade-out");
        void el.offsetWidth;
        el.classList.add("word-fade-up");
      }, 300);
    }, 3000);
  }
};
