/* ONG Frutos do Amanhã — comportamentos da landing page */
(function () {
  "use strict";

  /* Menu mobile ------------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu-principal");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Copiar chave PIX -------------------------------------------------- */
  var botao = document.getElementById("copiar-pix");
  var chave = document.getElementById("pix-key");
  var status = document.getElementById("pix-status");

  function fallbackCopy(texto) {
    var campo = document.createElement("textarea");
    campo.value = texto;
    campo.setAttribute("readonly", "");
    campo.style.position = "fixed";
    campo.style.opacity = "0";
    document.body.appendChild(campo);
    campo.select();
    try { document.execCommand("copy"); } catch (e) { /* ignora */ }
    campo.remove();
  }

  if (botao && chave) {
    var timer;
    botao.addEventListener("click", function () {
      var texto = chave.textContent.trim();

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texto).catch(function () { fallbackCopy(texto); });
      } else {
        fallbackCopy(texto);
      }

      botao.textContent = "Chave PIX copiada!";
      if (status) status.textContent = "Chave PIX copiada para a área de transferência.";

      clearTimeout(timer);
      timer = setTimeout(function () {
        botao.textContent = botao.dataset.label;
        if (status) status.textContent = "";
      }, 2400);
    });
  }
})();
