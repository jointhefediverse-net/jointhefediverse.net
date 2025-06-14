const switchTheme = () => {
  const themeSwitcher = document.getElementById("theme-switcher");
  const currentTheme = Cookies.getCookie("theme") || "auto";

  themeSwitcher.value = currentTheme;

  themeSwitcher.addEventListener("change", (ev) => {
    const selectedTheme = ev.target.value;
    applyTheme(selectedTheme);
    Cookies.setCookie("theme", selectedTheme, 365);
  });

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", () => {
    if (themeSwitcher.value === "auto") {
      applyTheme("auto");
    }
  });
};

export default switchTheme;
