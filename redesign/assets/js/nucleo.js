/* ==========================================================
   Núcleo — configuração, rolagem suave e fotos
   Carregado em todas as páginas, antes de efeitos.js
   ========================================================== */
(function () {
  'use strict';

  const FDA = (window.FDA = window.FDA || {});
  const html = document.documentElement;

  /* ---- Configuração ----
     Enquanto as fotos reais não chegam, elas são lidas da pasta
     fotos-provisorias/ (na raiz do repositório). Para publicar,
     mova as fotos para assets/img/fotos/ e troque o caminho abaixo. */
  FDA.config = {
    pastaFotos: '../fotos-provisorias/',
    extensoes: ['.jpg', '.jpeg', '.png', '.webp']
  };

  FDA.reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
  FDA.toque = matchMedia('(hover: none), (pointer: coarse)').matches;
  FDA.temGSAP = !!(window.gsap && window.ScrollTrigger);
  if (FDA.reduz || !FDA.temGSAP) html.classList.add('no-motion');

  /* Curvas do site (espelham os tokens --ease-* do CSS) */
  FDA.ease = { brota: 'expo.out', seiva: 'power3.inOut', mola: 'back.out(1.6)' };

  if (FDA.temGSAP) {
    gsap.registerPlugin(ScrollTrigger);
    if (window.SplitText) gsap.registerPlugin(SplitText);
    gsap.defaults({ ease: FDA.ease.brota, duration: 0.8 });
  }

  /* ---- Armazenamento seguro (pode falhar em aba anônima) ---- */
  FDA.sessao = {
    ler(chave) { try { return sessionStorage.getItem(chave); } catch (e) { return null; } },
    gravar(chave, valor) { try { sessionStorage.setItem(chave, valor); } catch (e) { /* sem problema */ } },
    apagar(chave) { try { sessionStorage.removeItem(chave); } catch (e) { /* sem problema */ } }
  };

  /* ---- Rolagem suave (Lenis) — só roda com mouse/trackpad e sem reduced-motion ---- */
  FDA.lenis = null;
  if (!FDA.reduz && FDA.temGSAP && window.Lenis) {
    FDA.lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, anchors: false });
    FDA.lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => FDA.lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  FDA.rolarPara = function (alvo) {
    const el = typeof alvo === 'string' ? document.querySelector(alvo) : alvo;
    if (!el) return;
    if (FDA.lenis) {
      FDA.lenis.scrollTo(el, { offset: -40, duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4) });
    } else {
      el.scrollIntoView({ behavior: FDA.reduz ? 'auto' : 'smooth', block: 'start' });
    }
  };

  /* ---- Fotos: tenta cada extensão; se nenhuma existir, fica a moldura desenhada ---- */
  FDA.carregarFotos = function (raiz) {
    (raiz || document).querySelectorAll('img[data-foto]:not([data-foto-ok])').forEach((img) => {
      img.setAttribute('data-foto-ok', '');
      const moldura = img.closest('.foto');
      const nome = img.getAttribute('data-foto');
      const exts = FDA.config.extensoes.slice();
      if (!img.hasAttribute('fetchpriority')) img.loading = 'lazy';
      img.decoding = 'async';
      const tentar = () => {
        const ext = exts.shift();
        if (!ext) { img.removeAttribute('src'); return; }
        img.src = FDA.config.pastaFotos + nome + ext;
      };
      img.addEventListener('load', () => moldura && moldura.classList.add('carregou'));
      img.addEventListener('error', tentar);
      tentar();
    });
  };

  document.addEventListener('DOMContentLoaded', () => FDA.carregarFotos());
})();
