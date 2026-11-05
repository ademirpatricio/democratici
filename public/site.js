/* Faixa de fase da campanha (todas as páginas, em português e italiano) */
(() => {
  const banner = document.querySelector('.phase-banner');
  if (!banner) return;
  const kicker = document.getElementById('phase-kicker');
  const title = document.getElementById('phase-title');
  const deadline = document.getElementById('phase-deadline');
  const link = document.getElementById('phase-link');
  const lang = (document.documentElement.lang || 'pt').toLowerCase().startsWith('it') ? 'it' : 'pt';
  const brand = document.querySelector('.brand');
  const home = brand ? brand.getAttribute('href') : 'index.html';
  const ends = ['2026-10-03', '2026-11-04', '2026-12-04'];
  const hrefs = ['#apoiar', '#inscrever', '#votar'];
  const text = {
    pt: {
      kicker: ['FASE ATUAL · 01 DE 03', 'FASE ATUAL · 02 DE 03', 'FASE ATUAL · 03 DE 03'],
      title: ['APOIE NOSSA LISTA', 'INSCREVA-SE PARA VOTAR', 'DATA LIMITE PARA CHEGADA DO VOTO NO CONSULADO'],
      deadline: ['ATÉ 3/10/2026', 'ATÉ 4/11/2026', '4/12/2026'],
      action: ['Veja como apoiar', 'Veja como se inscrever', 'Veja como votar'],
      ended: ['ELEIÇÕES COMITES 2026', 'PRAZOS ELEITORAIS ENCERRADOS', 'ÚLTIMO PRAZO: 4/12/2026']
    },
    it: {
      kicker: ['FASE ATTUALE · 01 DI 03', 'FASE ATTUALE · 02 DI 03', 'FASE ATTUALE · 03 DI 03'],
      title: ['SOSTIENI LA NOSTRA LISTA', 'ISCRIVITI PER VOTARE', "SCADENZA PER L'ARRIVO DEL VOTO AL CONSOLATO"],
      deadline: ['ENTRO IL 3/10/2026', 'ENTRO IL 4/11/2026', '4/12/2026'],
      action: ['Scopri come sostenere', 'Scopri come iscriverti', 'Scopri come votare'],
      ended: ['ELEZIONI COMITES 2026', 'SCADENZE ELETTORALI CONCLUSE', 'ULTIMA SCADENZA: 4/12/2026']
    }
  }[lang];
  const update = () => {
    const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(new Date()).map(({ type, value }) => [type, value]));
    const today = `${parts.year}-${parts.month}-${parts.day}`;
    const i = ends.findIndex((end) => today <= end);
    if (i === -1) {
      kicker.textContent = text.ended[0];
      title.textContent = text.ended[1];
      deadline.textContent = text.ended[2];
      link.hidden = true;
      banner.classList.add('phase-banner-ended');
      return;
    }
    kicker.textContent = text.kicker[i];
    title.textContent = text.title[i];
    deadline.textContent = text.deadline[i];
    link.href = home + hrefs[i];
    link.firstChild.textContent = `${text.action[i]} `;
    link.hidden = false;
    banner.classList.remove('phase-banner-ended');
  };
  update();
  setInterval(update, 60000);
})();

/* Minibios da chapa (animação de abrir e fechar) */
  document.querySelectorAll(".candidate-details").forEach(details => {
    const summary = details.querySelector("summary");
    const p = details.querySelector("p");
    const wrap = document.createElement("div");
    wrap.className = "details-anim";
    p.replaceWith(wrap);
    wrap.appendChild(p);
    summary.addEventListener("click", e => {
      e.preventDefault();
      if (details.open) {
        wrap.style.height = wrap.scrollHeight + "px";
        wrap.offsetHeight;
        wrap.style.height = "0";
        wrap.style.opacity = "0";
        wrap.addEventListener("transitionend", () => {
          details.removeAttribute("open");
        }, { once: true });
      } else {
        details.setAttribute("open", "");
        const h = wrap.scrollHeight;
        wrap.style.height = "0";
        wrap.style.opacity = "0";
        wrap.offsetHeight;
        wrap.style.height = h + "px";
        wrap.style.opacity = "1";
        wrap.addEventListener("transitionend", () => {
          wrap.style.height = "auto";
        }, { once: true });
      }
    });
  });

/* Entrada suave ao rolar a página */
  (function () {
    if (!("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Staggered — items inside rows (3-column grids)
    [".detail", ".candidate-card", ".mission"].forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el, i) {
        el.classList.add("reveal");
        el.style.transitionDelay = (i % 3) * 0.1 + "s";
        observer.observe(el);
      });
    });

    // No stagger — section-level blocks
    [".section-heading", ".step", ".about-grid > div", ".slate-note", ".proposals-head", ".proposal", ".explore-card"].forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        el.classList.add("reveal");
        observer.observe(el);
      });
    });
  })();

/* Menu hambúrguer (tablet e celular) */
(() => {
  const header = document.querySelector('.site-header');
  const toggle = header && header.querySelector('.menu-toggle');
  const nav = header && header.querySelector('nav');
  if (!toggle || !nav) return;
  const help = header.querySelector('.header-help');
  if (help) {
    const copy = help.cloneNode(true);
    copy.className = 'menu-help';
    nav.appendChild(copy);
  }
  const setOpen = (open, focus) => {
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? toggle.dataset.close : toggle.dataset.open);
    if (!open && focus) toggle.focus();
  };
  toggle.addEventListener('click', () => setOpen(!header.classList.contains('menu-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('click', (e) => {
    if (header.classList.contains('menu-open') && !header.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('menu-open')) setOpen(false, true);
  });
  const wide = window.matchMedia('(min-width: 1241px)');
  const closeOnWide = (e) => { if (e.matches) setOpen(false); };
  if (wide.addEventListener) wide.addEventListener('change', closeOnWide);
  else if (wide.addListener) wide.addListener(closeOnWide);
})();
