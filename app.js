/* HakBr — alternância de tema. Sem dependências, sem build.
   O tema inicial é definido por um script inline no <head> de cada página
   (evita flash). Aqui só tratamos o clique no botão e a persistência. */
(function () {
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  function current() {
    return document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";
  }

  function apply(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try { localStorage.setItem("hakbr-theme", theme); } catch (e) {}
    btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    btn.setAttribute(
      "aria-label",
      theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"
    );
  }

  btn.setAttribute(
    "aria-label",
    current() === "light" ? "Ativar tema escuro" : "Ativar tema claro"
  );

  btn.addEventListener("click", function () {
    apply(current() === "light" ? "dark" : "light");
  });
})();
