/* ==========================================================================
   Beer My Guest — scripts du prototype
   Tout ce qui est ici a un équivalent natif Wix (menu, lightbox, filtres de
   collection, formulaire). Voir livrables/03-guide-wix-harmony.md.
   ========================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.add("js");
  var IMG = "assets/img/";
  var page = document.body.getAttribute("data-page") || "";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function img(name) { return IMG + name + ".jpg"; }
  function catLabel(id) {
    var c = (BMG.categories || []).filter(function (x) { return x.id === id; })[0];
    return c ? c.label : id;
  }
  function param(name) {
    try {
      var v = new URLSearchParams(window.location.search).get(name);
      if (v === null && window.location.hash.indexOf("=") > -1) v = new URLSearchParams(window.location.hash.slice(1)).get(name);
      return v;
    } catch (e) { return null; }
  }
  function store(key, val) {
    try {
      if (val === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, val);
    } catch (e) { return null; }
  }

  /* ---------- En-tête et pied de page (Header / Footer globaux Wix) ---------- */
  var NAV = [
    { key: "entreprises", label: "Entreprises", children: [
      { href: "team-building.html", label: "Team-building", hint: "Activités fédératrices, de 10 à 200 participants" },
      { href: "incentives.html", label: "Incentives & séminaires", hint: "Programmes sur mesure, services DMC" },
      { href: "incentives.html#soirees", label: "Animations de soirée", hint: "Casino de la Bière, bar à bières, artistes" },
      { href: "incentives.html#lieux", label: "Lieux exclusifs", hint: "Des lieux qui font partie de l’expérience" },
      { href: "incentives.html#transport", label: "Transport", hint: "Minivans, Sprinter, autocars" }
    ]},
    { key: "particuliers", label: "Particuliers", children: [
      { href: "particuliers.html#jeu-de-piste-biere", label: "Jeu de piste bière", hint: "Entre amis, en famille, EVG/EVJF" },
      { href: "particuliers.html#journee-biere", label: "Journée bière à Bruxelles", hint: "Brasserie, lunch et jeu de piste" },
      { href: "particuliers.html#balades", label: "Balades gourmandes", hint: "Bière, chocolat et anecdotes" },
      { href: "particuliers.html#carte-cadeau", label: "Carte cadeau", hint: "Valable un an sur nos activités" }
    ]},
    { key: "experiences", href: "experiences.html", label: "Expériences" },
    { key: "realisations", href: "realisations.html", label: "Nos réalisations" },
    { key: "agenda", href: "agenda.html", label: "Agenda" },
    { key: "a-propos", href: "a-propos.html", label: "À propos" }
  ];

  function renderHeader() {
    var holder = document.getElementById("site-header");
    if (!holder) return;
    var items = NAV.map(function (item) {
      var active = page === item.key || (item.key === "realisations" && page === "realisation");
      if (item.children) {
        return '<li class="nav__item' + (active ? " is-active" : "") + '"><button class="nav__trigger" type="button" aria-haspopup="true">' + esc(item.label) + '</button>' +
          '<div class="nav__menu">' + item.children.map(function (c) {
            return '<a href="' + c.href + '">' + esc(c.label) + '<small>' + esc(c.hint) + '</small></a>';
          }).join("") + "</div></li>";
      }
      return '<li><a href="' + item.href + '"' + (active ? ' aria-current="page"' : "") + ">" + esc(item.label) + "</a></li>";
    }).join("");

    var mobile = NAV.map(function (item) {
      if (item.children) {
        return "<h4>" + esc(item.label) + "</h4>" + item.children.map(function (c) {
          return '<a href="' + c.href + '">' + esc(c.label) + "</a>";
        }).join("");
      }
      return "";
    }).join("") + "<h4>Beer My Guest</h4>" + NAV.filter(function (i) { return !i.children; }).map(function (i) {
      return '<a href="' + i.href + '">' + esc(i.label) + "</a>";
    }).join("") + '<a href="blog.html">Journal</a><a href="contact.html">Contact</a>' +
      '<a class="btn btn-primary" href="contact.html">Demander un devis</a>';

    holder.outerHTML =
      '<div class="proto-bar"><strong>Maquette de travail</strong> — proposition de refonte, pas le site officiel de Beer My Guest. Coordonnées et contenus marqués « Exemple » fictifs. <a href="dossier.html">Dossier projet</a></div>' +
      '<header class="site-header" data-wix="En-tête global (Header) figé au défilement · Logo + Menu horizontal avec sous-menus + Bouton">' +
      '<div class="container site-header__inner">' +
      '<a class="logo" href="accueil.html"><img src="' + IMG + 'logo-beer-my-guest.png" alt="Beer My Guest — accueil" width="168" height="48"></a>' +
      '<nav class="nav" aria-label="Navigation principale"><ul>' + items + "</ul></nav>" +
      '<a class="btn btn-primary header-cta" href="contact.html">Demander un devis</a>' +
      '<button class="burger" type="button" aria-label="Ouvrir le menu" aria-expanded="false"><span></span></button>' +
      "</div></header>" +
      '<nav class="mobile-menu" aria-label="Menu mobile">' + mobile + "</nav>";

    var burger = document.querySelector(".burger");
    burger.addEventListener("click", function () {
      var header = document.querySelector(".site-header");
      document.querySelector(".mobile-menu").style.top = Math.max(0, header.getBoundingClientRect().bottom) + "px";
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });
    document.querySelectorAll(".mobile-menu a").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("menu-open"); });
    });
  }

  function renderFooter() {
    var holder = document.getElementById("site-footer");
    if (!holder) return;
    holder.outerHTML =
      '<footer class="site-footer" data-wix="Pied de page global (Footer) · 4 colonnes · textes et liens">' +
      '<div class="container"><div class="footer-top">' +
      '<div><a class="footer-logo" href="accueil.html"><img src="' + IMG + 'logo-beer-my-guest-blanc.png" alt="Beer My Guest" width="190" height="54"></a>' +
      "<p>Agence réceptive locale à Bruxelles depuis 2015. Dégustations, jeux de piste, team-buildings, incentives et événements sur mesure, partout en Belgique.</p>" +
      '<p class="small">Français · Nederlands · English</p></div>' +
      '<div><h4>Entreprises</h4><ul><li><a href="team-building.html">Team-building</a></li><li><a href="incentives.html">Incentives & séminaires</a></li><li><a href="incentives.html#soirees">Animations de soirée</a></li><li><a href="incentives.html#lieux">Lieux exclusifs</a></li><li><a href="incentives.html#transport">Transport</a></li></ul></div>' +
      '<div><h4>Particuliers</h4><ul><li><a href="particuliers.html#jeu-de-piste-biere">Jeu de piste bière</a></li><li><a href="particuliers.html#journee-biere">Journée bière</a></li><li><a href="particuliers.html#balades">Balades gourmandes</a></li><li><a href="particuliers.html#carte-cadeau">Carte cadeau</a></li><li><a href="agenda.html">Agenda</a></li></ul></div>' +
      '<div><h4>Contact</h4><ul><li>Bruxelles, Belgique</li><li><a href="#">+32 4XX XX XX XX</a></li><li><a href="#">contact@exemple.be</a></li><li><a href="realisations.html">Nos réalisations</a></li><li><a href="a-propos.html">À propos</a> · <a href="blog.html">Journal</a></li><li><a href="contact.html#faq">Questions fréquentes</a></li></ul></div>' +
      "</div>" +
      '<div class="footer-bottom"><span>© 2026 Beer My Guest. Tous droits réservés.</span><nav><a href="#" title="Page à créer ou relier dans Wix">CGV</a><a href="#" title="Page à créer ou relier dans Wix">Politique de confidentialité</a><a href="dossier.html">Dossier projet</a></nav></div>' +
      "</div></footer>" +
      '<button class="notes-toggle" type="button" aria-pressed="false">Notes Wix</button><span class="mockup-badge" aria-hidden="true">Maquette</span>';

    var toggle = document.querySelector(".notes-toggle");
    function setNotes(on) {
      document.body.classList.toggle("wix-notes", on);
      toggle.setAttribute("aria-pressed", on ? "true" : "false");
      toggle.textContent = on ? "Masquer les notes Wix" : "Notes Wix";
      store("bmg-notes", on ? "1" : "0");
    }
    toggle.addEventListener("click", function () { setNotes(!document.body.classList.contains("wix-notes")); });
    if (store("bmg-notes") === "1") setNotes(true);
  }

  /* ---------- Apparition au défilement (animation d'entrée Wix "Fondu") ---------- */
  var io = null;
  function observeReveals(root) {
    var els = (root || document).querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Cartes de réalisation (Répéteur Wix lié à la collection) ---------- */
  function rcard(r) {
    return '<a class="rcard reveal" href="realisation.html#r=' + encodeURIComponent(r.slug) + '" data-tags="' + esc(r.tags.join(" ")) + '">' +
      '<div class="rcard__media"><img src="' + img(r.cover) + '" alt="' + esc(r.title) + '" loading="lazy">' +
      '<span class="rcard__cat">' + esc(catLabel(r.category)) + "</span>" +
      (r.demo ? '<span class="badge-demo">Exemple fictif</span>' : "") + "</div>" +
      '<div class="rcard__body"><h3>' + esc(r.title) + "</h3>" +
      '<dl class="rcard__facts"><div><dt>Client</dt><dd>' + esc(r.client) + "</dd></div><div><dt>Lieu</dt><dd>" + esc(r.lieu) + "</dd></div><div><dt>Activité</dt><dd>" + esc(r.activite) + "</dd></div></dl>" +
      "<p>" + esc(r.excerpt) + '</p><span class="link-arrow">Découvrir cette réalisation</span></div></a>';
  }

  function renderRealisationsGrid() {
    var el = document.querySelector("[data-realisations-grid]");
    if (!el) return;
    var list = BMG.realisations;
    var filters = document.querySelector("[data-realisations-filters]");
    var count = document.querySelector("[data-realisations-count]");
    el.innerHTML = list.map(rcard).join("");

    if (filters) {
      var cats = [{ id: "all", label: "Toutes" }].concat(BMG.categories);
      filters.insertAdjacentHTML("afterbegin", cats.map(function (c) {
        return '<button class="filter-btn" type="button" data-filter="' + c.id + '" aria-pressed="false">' + esc(c.label) + "</button>";
      }).join(""));
      var apply = function (id) {
        var n = 0;
        filters.querySelectorAll(".filter-btn").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-filter") === id ? "true" : "false"); });
        el.querySelectorAll(".rcard").forEach(function (card) {
          var show = id === "all" || card.getAttribute("data-tags").split(" ").indexOf(id) > -1;
          card.classList.toggle("is-hidden", !show);
          if (show) { n++; card.classList.add("is-visible"); }
        });
        if (count) count.textContent = n + (n > 1 ? " réalisations" : " réalisation");
      };
      filters.addEventListener("click", function (e) {
        var b = e.target.closest(".filter-btn");
        if (!b) return;
        var id = b.getAttribute("data-filter");
        apply(id);
        try { history.replaceState(null, "", id === "all" ? "realisations.html" : "realisations.html#cat=" + id); } catch (err) { /* file:// */ }
      });
      var start = param("cat");
      apply(start && BMG.categories.some(function (c) { return c.id === start; }) ? start : "all");
    }
  }

  function renderRealisationsTeasers() {
    document.querySelectorAll("[data-realisations-teaser]").forEach(function (el) {
      var limit = parseInt(el.getAttribute("data-limit") || "2", 10);
      var cat = el.getAttribute("data-cat");
      var exclude = el.getAttribute("data-exclude");
      var list = BMG.realisations.filter(function (r) {
        return (!cat || r.tags.indexOf(cat) > -1) && r.slug !== exclude;
      }).slice(0, limit);
      el.innerHTML = list.map(rcard).join("");
    });
  }

  /* ---------- Page de détail (page dynamique "Item" Wix) ---------- */
  function renderRealisationDetail() {
    var el = document.querySelector("[data-realisation-detail]");
    if (!el) return;
    var slug = param("r");
    var list = BMG.realisations;
    var idx = 0;
    list.forEach(function (r, i) { if (r.slug === slug) idx = i; });
    var r = list[idx];
    document.title = "Maquette · " + r.title + " — Nos réalisations | Beer My Guest";

    var photos = r.photos.map(function (p, i) {
      return '<button type="button" data-lightbox-index="' + i + '" aria-label="Agrandir la photo ' + (i + 1) + '"><img src="' + img(p) + '" alt="' + esc(r.title) + " — photo " + (i + 1) + '" loading="lazy"></button>';
    }).join("");
    var others = [list[(idx + 1) % list.length], list[(idx + 2) % list.length]];
    var similar = "contact.html#experience=" + encodeURIComponent(r.activite) + "&ref=" + encodeURIComponent(r.slug);

    el.innerHTML =
      '<section class="cover" data-wix="Section pleine largeur · Image de couverture (champ Image principale de la collection)"><img src="' + img(r.cover) + '" alt="' + esc(r.title) + '"></section>' +
      '<section class="detail-head" data-wix="Bloc titre · Texte + 4 champs (Type de client, Lieu, Activité, Format)"><div class="container"><div class="detail-head__card">' +
      '<p class="breadcrumb"><a href="realisations.html">Nos réalisations</a><span>/</span><a href="realisations.html#cat=' + r.category + '">' + esc(catLabel(r.category)) + "</a></p>" +
      '<p class="eyebrow">' + esc(catLabel(r.category)) + "</p>" +
      '<h1 class="h2">' + esc(r.title) + "</h1>" +
      '<dl class="detail-facts"><div><dt>Type de client</dt><dd>' + esc(r.client) + "</dd></div><div><dt>Lieu</dt><dd>" + esc(r.lieu) + "</dd></div><div><dt>Activité</dt><dd>" + esc(r.activite) + "</dd></div><div><dt>Format</dt><dd>" + esc(r.format) + "</dd></div></dl>" +
      (r.demo ? '<p class="demo-note"><strong>Exemple fictif</strong><span>Mise en page de démonstration. Les photos proviennent de la galerie actuelle ; les textes sont à remplacer par les informations réelles de l’événement (contexte, lieu, déroulement), validées par la cliente.</span></p>' : "") +
      "</div></div></section>" +
      '<section class="section" data-wix="Section 2 colonnes · Gauche : contexte (texte riche) · Droite : déroulement (liste numérotée)"><div class="container detail-body">' +
      '<div class="detail-body__aside reveal"><p class="eyebrow">La demande</p><h2 class="h3">Le contexte</h2><p class="lead" style="margin-top:18px">' + esc(r.contexte) + '</p><a class="link-arrow" href="' + similar + '">Organiser une expérience similaire</a></div>' +
      '<div class="reveal"><p class="eyebrow">L’expérience</p><h2 class="h3" style="margin-bottom:40px">Le déroulement</h2><ol class="steps">' +
      r.steps.map(function (s) { return "<li><h4>" + esc(s.t) + "</h4><p>" + esc(s.d) + "</p></li>"; }).join("") +
      "</ol></div></div></section>" +
      '<section class="section section--flush-top" data-wix="Galerie Pro (grille mosaïque) · 4 à 8 photos · Agrandissement au clic (lightbox)"><div class="container">' +
      '<div class="section-head"><div><p class="eyebrow">En images</p><h2 class="h3">Quelques moments choisis</h2></div><p class="lead">' + r.photos.length + " photos sélectionnées pour raconter l’événement.</p></div>" +
      '<div class="mosaic mosaic--' + r.photos.length + '" data-lightbox-group>' + photos + "</div>" +
      '<div class="quote-slot" style="margin-top:56px" data-wix="Témoignage (optionnel) · à afficher uniquement si un véritable témoignage existe · masquer si champ vide"><p class="eyebrow">Témoignage client — emplacement optionnel</p><p class="quote">« Citation du client, uniquement si un véritable témoignage est disponible. »</p><p class="small muted" style="margin-top:14px">Nom, fonction, organisation — avec l’accord du client. Ce bloc n’apparaît pas tant que le champ est vide.</p></div>' +
      "</div></section>" +
      '<section class="cta-band" data-wix="Section CTA · Image de fond assombrie + Titre + Bouton vers formulaire (paramètre de l’expérience)"><div class="cta-band__media"><img src="' + img(r.photos[1] || r.cover) + '" alt=""></div><div class="container"><div class="cta-band__inner">' +
      '<p class="eyebrow">Votre projet</p><h2 class="h2">Envie d’une expérience <em>similaire</em> ?</h2>' +
      '<p class="lead">Chaque expérience est adaptée à votre groupe, à vos objectifs et à votre timing. Parlez-nous de votre projet : nous revenons vers vous avec une proposition sur mesure.</p>' +
      '<div class="btn-row"><a class="btn btn-amber" href="' + similar + '">Organiser une expérience similaire</a><a class="btn btn-ghost" href="realisations.html">Toutes nos réalisations</a></div></div></div></section>' +
      '<section class="section" data-wix="Répéteur · 2 autres réalisations (même collection)"><div class="container"><div class="section-head"><div><p class="eyebrow">À découvrir aussi</p><h2 class="h3">Autres réalisations</h2></div><p><a class="link-arrow" href="realisations.html">Voir toutes les réalisations</a></p></div>' +
      '<div class="rgrid">' + others.map(rcard).join("") + "</div></div></section>";

    bindLightbox(el.querySelector("[data-lightbox-group]"), r.photos.map(img));
  }

  /* ---------- Lightbox (mode "agrandissement" de la Galerie Pro Wix) ---------- */
  var lb = null;
  function bindLightbox(group, sources) {
    if (!group) return;
    if (!lb) {
      document.body.insertAdjacentHTML("beforeend",
        '<div class="modal lightbox" role="dialog" aria-modal="true" aria-label="Photo agrandie"><button class="modal__close" type="button" aria-label="Fermer">×</button>' +
        '<button class="lightbox__nav lightbox__prev" type="button" aria-label="Photo précédente">←</button><img alt=""><button class="lightbox__nav lightbox__next" type="button" aria-label="Photo suivante">→</button><span class="lightbox__count"></span></div>');
      lb = document.querySelector(".lightbox");
    }
    var current = 0;
    var picture = lb.querySelector("img");
    var counter = lb.querySelector(".lightbox__count");
    function show(i) {
      current = (i + sources.length) % sources.length;
      picture.src = sources[current];
      counter.textContent = (current + 1) + " / " + sources.length;
    }
    function close() { lb.classList.remove("is-open"); document.removeEventListener("keydown", onKey); }
    function onKey(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(current + 1);
      if (e.key === "ArrowLeft") show(current - 1);
    }
    group.addEventListener("click", function (e) {
      var b = e.target.closest("[data-lightbox-index]");
      if (!b) return;
      show(parseInt(b.getAttribute("data-lightbox-index"), 10));
      lb.classList.add("is-open");
      document.addEventListener("keydown", onKey);
      lb.querySelector(".modal__close").focus();
    });
    lb.querySelector(".modal__close").onclick = close;
    lb.querySelector(".lightbox__prev").onclick = function () { show(current - 1); };
    lb.querySelector(".lightbox__next").onclick = function () { show(current + 1); };
    lb.onclick = function (e) { if (e.target === lb) close(); };
  }

  /* ---------- Expériences (catalogue + fenêtre de détail = Lightbox Wix) ---------- */
  function xcard(x) {
    var tag = x.signature || x.types.map(function (t) { return BMG.types[t]; }).slice(0, 2).join(" · ");
    return '<article class="xcard reveal" data-audience="' + esc(x.audience.join(" ")) + '" data-types="' + esc(x.types.join(" ")) + '">' +
      '<div class="xcard__media"><img src="' + img(x.img) + '" alt="' + esc(x.title) + '" loading="lazy"></div>' +
      '<div class="xcard__body"><p class="xcard__tag">' + esc(tag) + "</p><h3>" + esc(x.title) + "</h3><p>" + esc(x.short) + "</p>" +
      '<div class="xcard__meta"><span>' + esc(x.duree) + "</span><span>" + esc(x.groupe) + "</span></div>" +
      '<div class="xcard__actions"><button class="link-arrow" type="button" data-experience="' + esc(x.slug) + '">En savoir plus</button></div></div></article>';
  }

  function renderExperiences() {
    document.querySelectorAll("[data-experiences]").forEach(function (el) {
      var slugs = (el.getAttribute("data-slugs") || "").split(",").filter(Boolean);
      var audience = el.getAttribute("data-audience");
      var list = slugs.length
        ? slugs.map(function (s) { return BMG.experiences.filter(function (x) { return x.slug === s; })[0]; }).filter(Boolean)
        : BMG.experiences.filter(function (x) { return !audience || x.audience.indexOf(audience) > -1; });
      el.innerHTML = list.map(xcard).join("");
    });

    var filters = document.querySelector("[data-experience-filters]");
    var grid = document.querySelector("[data-experiences-catalog]");
    if (filters && grid) {
      var state = { audience: param("pour") || "all", type: "all" };
      var groups = [
        { key: "audience", items: [["all", "Tous les publics"], ["entreprises", "Entreprises"], ["particuliers", "Particuliers"]] },
        { key: "type", items: [["all", "Tous les formats"]].concat(Object.keys(BMG.types).map(function (k) { return [k, BMG.types[k]]; })) }
      ];
      filters.innerHTML = groups.map(function (g) {
        return '<div class="filters" role="group" data-group="' + g.key + '" style="margin-bottom:14px">' + g.items.map(function (it) {
          return '<button class="filter-btn" type="button" data-value="' + it[0] + '" aria-pressed="false">' + esc(it[1]) + "</button>";
        }).join("") + "</div>";
      }).join("") + '<p class="small muted" data-experiences-count style="margin:6px 0 48px"></p>';
      var apply = function () {
        var n = 0;
        filters.querySelectorAll("[data-group]").forEach(function (g) {
          var key = g.getAttribute("data-group");
          g.querySelectorAll(".filter-btn").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-value") === state[key] ? "true" : "false"); });
        });
        grid.querySelectorAll(".xcard").forEach(function (c) {
          var okA = state.audience === "all" || c.getAttribute("data-audience").split(" ").indexOf(state.audience) > -1;
          var okT = state.type === "all" || c.getAttribute("data-types").split(" ").indexOf(state.type) > -1;
          c.style.display = okA && okT ? "" : "none";
          if (okA && okT) { n++; c.classList.add("is-visible"); }
        });
        filters.querySelector("[data-experiences-count]").textContent = n + (n > 1 ? " expériences" : " expérience");
      };
      filters.addEventListener("click", function (e) {
        var b = e.target.closest(".filter-btn");
        if (!b) return;
        state[b.closest("[data-group]").getAttribute("data-group")] = b.getAttribute("data-value");
        apply();
      });
      apply();
    }

    document.body.insertAdjacentHTML("beforeend", '<div class="modal xmodal" role="dialog" aria-modal="true" aria-labelledby="xmodal-title"><div class="modal__panel"><button class="modal__close" type="button" aria-label="Fermer">×</button><img alt=""><div class="modal__body"></div></div></div>');
    var modal = document.querySelector(".xmodal");
    function close() { modal.classList.remove("is-open"); }
    modal.querySelector(".modal__close").addEventListener("click", close);
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-experience]");
      if (!b) return;
      var x = BMG.experiences.filter(function (i) { return i.slug === b.getAttribute("data-experience"); })[0];
      if (!x) return;
      modal.querySelector("img").src = img(x.img);
      modal.querySelector("img").alt = x.title;
      modal.querySelector(".modal__body").innerHTML =
        '<p class="eyebrow">' + esc(x.signature || x.types.map(function (t) { return BMG.types[t]; }).join(" · ")) + "</p>" +
        '<h2 class="h3" id="xmodal-title" style="margin-bottom:20px">' + esc(x.title) + "</h2>" +
        x.long.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        '<div class="hero-split__facts"><span class="chip">Durée\u00a0: ' + esc(x.duree) + '</span><span class="chip">Groupe\u00a0: ' + esc(x.groupe) + "</span></div>" +
        '<div class="btn-row"><a class="btn btn-primary" href="contact.html#experience=' + encodeURIComponent(x.title) + '">Demander une offre</a></div>';
      modal.classList.add("is-open");
      modal.querySelector(".modal__close").focus();
    });
  }

  /* ---------- Agenda (Wix Events : liste d'événements) ---------- */
  function renderEvents() {
    document.querySelectorAll("[data-events]").forEach(function (el) {
      var limit = parseInt(el.getAttribute("data-limit") || "10", 10);
      el.innerHTML = BMG.events.slice(0, limit).map(function (ev) {
        return '<article class="event reveal"><div class="event__date"><strong>' + esc(ev.day) + "</strong><span>" + esc(ev.month) + "</span></div>" +
          '<div><p class="xcard__tag" style="margin-bottom:6px">' + esc(ev.tag) + ' · <span class="badge-demo badge-demo--inline">Exemple — date fictive</span></p><h3>' + esc(ev.title) + "</h3><p>" + esc(ev.text) + "</p>" +
          '<div class="event__meta"><span>' + esc(ev.weekday) + " · " + esc(ev.time) + "</span><span>" + esc(ev.place) + "</span></div></div>" +
          '<a class="btn btn-ghost" href="contact.html#experience=' + encodeURIComponent(ev.title) + '">Réserver</a></article>';
      }).join("");
    });
  }

  /* ---------- Formulaire de demande (Wix Forms) ---------- */
  function initForm() {
    var form = document.querySelector("[data-quote-form]");
    if (!form) return;
    var exp = param("experience");
    var ref = param("ref");
    var who = param("vous");
    if (exp && form.elements.experience) form.elements.experience.value = exp;
    if (ref && form.elements.message && !form.elements.message.value) {
      form.elements.message.value = "Bonjour, nous aimerions organiser une expérience similaire : « " + exp + " » (réalisation : " + ref + ").\n\n";
    }
    if (who && form.querySelector('input[name="profil"][value="' + who + '"]')) {
      form.querySelector('input[name="profil"][value="' + who + '"]').checked = true;
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      form.classList.add("is-sent");
      var ok = form.nextElementSibling;
      if (ok) { ok.setAttribute("tabindex", "-1"); ok.focus(); }
    });
  }

  /* Lien d'une fiche vers une autre fiche (paramètre passé dans l'ancre) */
  window.addEventListener("hashchange", function () {
    if (document.querySelector("[data-realisation-detail]") && window.location.hash.indexOf("r=") > -1) window.location.reload();
  });

  /* ---------- Initialisation ---------- */
  renderHeader();
  renderFooter();
  if (window.BMG && BMG.realisations) {
    renderRealisationsGrid();
    renderRealisationsTeasers();
    renderRealisationDetail();
    renderExperiences();
    renderEvents();
  }
  initForm();
  observeReveals();
})();
