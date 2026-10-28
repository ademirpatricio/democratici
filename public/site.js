/* Faixa de fase da campanha (todas as páginas) */
    (() => {
      const banner = document.querySelector('.phase-banner');
      const kicker = document.getElementById('phase-kicker');
      const title = document.getElementById('phase-title');
      const deadline = document.getElementById('phase-deadline');
      const link = document.getElementById('phase-link');
      const brand = document.querySelector('.brand');
      const home = brand ? brand.getAttribute('href') : 'index.html';
      const phases = [
        { end: '2026-10-03', kicker: 'FASE ATUAL · 01 DE 03', title: 'APOIE NOSSA LISTA', deadline: 'ATÉ 3/10/2026', href: home + '#apoiar', action: 'Veja como apoiar' },
        { end: '2026-11-04', kicker: 'FASE ATUAL · 02 DE 03', title: 'INSCREVA-SE PARA VOTAR', deadline: 'ATÉ 4/11/2026', href: home + '#inscrever', action: 'Veja como se inscrever' },
        { end: '2026-12-04', kicker: 'FASE ATUAL · 03 DE 03', title: 'DATA LIMITE PARA CHEGADA DO VOTO NO CONSULADO', deadline: '4/12/2026', href: home + '#votar', action: 'Veja como votar' }
      ];
      const update = () => {
        const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit'
        }).formatToParts(new Date()).map(({ type, value }) => [type, value]));
        const today = `${parts.year}-${parts.month}-${parts.day}`;
        const phase = phases.find(({ end }) => today <= end);
        if (!phase) {
          kicker.textContent = 'ELEIÇÕES COMITES 2026';
          title.textContent = 'PRAZOS ELEITORAIS ENCERRADOS';
          deadline.textContent = 'ÚLTIMO PRAZO: 4/12/2026';
          link.hidden = true;
          banner.classList.add('phase-banner-ended');
          return;
        }
        kicker.textContent = phase.kicker;
        title.textContent = phase.title;
        deadline.textContent = phase.deadline;
        link.href = phase.href;
        link.firstChild.textContent = `${phase.action} `;
        link.hidden = false;
        banner.classList.remove('phase-banner-ended');
      };
      update();
      setInterval(update, 60_000);
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
