// Light/dark theme. Loaded in <head> so the page never flashes the wrong theme.
// The setting is "system", "light" or "dark" (the default), stored under the same
// localStorage key al-folio used, so returning visitors keep their choice.
(function () {
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  let setting = read();

  function read() {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "system" || stored === "light" || stored === "dark") return stored;
    } catch (e) {}
    return "dark";
  }

  function apply() {
    root.dataset.themeSetting = setting;
    root.dataset.theme = setting === "system" ? (media.matches ? "dark" : "light") : setting;
  }

  apply();
  media.addEventListener("change", apply);

  // The navbar button cycles system → light → dark → system.
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("theme-toggle").addEventListener("click", function () {
      setting = { system: "light", light: "dark", dark: "system" }[setting];
      try {
        localStorage.setItem("theme", setting);
      } catch (e) {}
      apply();
    });
  });
})();
