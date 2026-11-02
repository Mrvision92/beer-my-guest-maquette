/* ==========================================================================
   Beer My Guest — scripts du prototype (version allégée)
   Chaque fonction correspond à un élément natif de Wix : menu, galerie avec
   agrandissement, produits Wix Stores, formulaire Wix Forms.
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

  /* ---------- Menu : même structure que le site actuel ---------- */
  var NAV = [
    { key: "particuliers", href: "particuliers.html", label: "Particuliers", children: [
      { href: "jeu-de-piste-biere.html", label: "Jeu de piste bière" },
      { href: "journee-biere.html", label: "Journée bière" }
    ]},
    { key: "professionnel", href: "incentive.html", label: "Professionnel", children: [
      { href: "incentive.html", label: "Incentive" },
      { href: "team-building.html", label: "Team-building" }
    ]},
    { key: "services", href: "lieux-exclusifs.html", label: "Nos services", children: [
      { href: "lieux-exclusifs.html", label: "Lieux exclusifs" },
      { href: "transport.html", label: "Transport" }
    ]},
    { key: "realisations", href: "realisations.html", label: "Nos réalisations" },
    { key: "qui-sommes-nous", href: "qui-sommes-nous.html", label: "Qui sommes-nous" },
    { key: "carte-cadeau", href: "carte-cadeau.html", label: "Carte cadeau" }
  ];

  function renderHeader() {
    var holder = document.getElementById("site-header");
    if (!holder) return;
    var items = NAV.map(function (item) {
      var active = page === item.key;
      if (item.children) {
        return '<li class="nav__item' + (active ? " is-active" : "") + '"><a class="nav__trigger" href="' + item.href + '">' + esc(item.label) + "</a>" +
          '<div class="nav__menu">' + item.children.map(function (c) { return '<a href="' + c.href + '">' + esc(c.label) + "</a>"; }).join("") + "</div></li>";
      }
      return '<li><a href="' + item.href + '"' + (active ? ' aria-current="page"' : "") + ">" + esc(item.label) + "</a></li>";
    }).join("");
    var mobile = NAV.map(function (item) {
      return '<a href="' + item.href + '">' + esc(item.label) + "</a>" + (item.children || []).map(function (c) {
        return '<a class="sub" href="' + c.href + '">' + esc(c.label) + "</a>";
      }).join("");
    }).join("") + '<a href="blog.html">Blog</a><a class="btn" href="contact.html">Contactez-nous</a>';

    holder.outerHTML =
      '<div class="proto-bar"><strong>Maquette de travail</strong> — proposition de refonte, pas le site officiel de Beer My Guest. Coordonnées et réalisations fictives. <a href="dossier.html">Dossier projet</a></div>' +
      '<header class="site-header" data-wix="En-tête global, figé au défilement : logo + menu (sous-menus) + 1 bouton">' +
      '<div class="container site-header__inner">' +
      '<a class="logo" href="accueil.html"><img src="' + IMG + 'logo-beer-my-guest.png" alt="Beer My Guest — accueil" width="154" height="44"></a>' +
      '<nav class="nav" aria-label="Navigation principale"><ul>' + items + "</ul></nav>" +
      '<a class="btn header-cta" href="contact.html">Contactez-nous</a>' +
      '<button class="burger" type="button" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>' +
      "</div></header>" +
      '<nav class="mobile-menu" aria-label="Menu mobile">' + mobile + "</nav>";

    var burger = document.querySelector(".burger");
    burger.addEventListener("click", function () {
      document.querySelector(".mobile-menu").style.top = Math.max(0, document.querySelector(".site-header").getBoundingClientRect().bottom) + "px";
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.textContent = open ? "✕" : "☰";
    });
  }

  /* ---------- Pied de page : contenu du pied de page actuel ---------- */
  function renderFooter() {
    var holder = document.getElementById("site-footer");
    if (!holder) return;
    holder.outerHTML =
      '<footer class="site-footer" data-wix="Pied de page global : 4 colonnes de texte et liens">' +
      '<div class="container"><div class="footer-cols">' +
      '<div><a class="footer-logo" href="accueil.html"><img src="' + IMG + 'logo-beer-my-guest-blanc.png" alt="Beer My Guest" width="176" height="50"></a>' +
      "<p>Agence réceptive locale à Bruxelles. Dégustations, jeux de piste et événements sur-mesure, depuis 2015.</p></div>" +
      '<div><h4>Expériences</h4><ul><li><a href="jeu-de-piste-biere.html">Jeu de piste bière</a></li><li><a href="journee-biere.html">Journée bière</a></li><li><a href="activites.html">Bière & chocolat</a></li><li><a href="activites.html">Ateliers</a></li><li><a href="carte-cadeau.html">Bon cadeau</a></li></ul></div>' +
      '<div><h4>Entreprises</h4><ul><li><a href="team-building.html">Team-building</a></li><li><a href="incentive.html">Incentives & séminaires</a></li><li><a href="lieux-exclusifs.html">Services DMC</a></li><li><a href="contact.html">Demander un devis</a></li></ul></div>' +
      '<div><h4>Contact</h4><ul><li>Bruxelles, Belgique</li><li><a href="#">+32 4XX XX XX XX</a></li><li><a href="#">contact@exemple.be</a></li><li><a href="qui-sommes-nous.html">L’équipe</a> · <a href="blog.html">Blog</a></li></ul></div>' +
      "</div>" +
      '<p class="footer-bottom">© 2026 Beer · My · Guest. Tous droits réservés. · CGV · Politique de confidentialité</p>' +
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

  /* ---------- Fenêtre réutilisable ---------- */
  function modal(cls, inner) {
    document.body.insertAdjacentHTML("beforeend", '<div class="modal ' + cls + '" role="dialog" aria-modal="true">' + inner + "</div>");
    var m = document.querySelector("." + cls);
    function close() { m.classList.remove("is-open"); }
    m.addEventListener("click", function (e) { if (e.target === m || e.target.closest(".modal__close")) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    return m;
  }

  /* ---------- Activités (= produits Wix Stores existants) ---------- */
  function renderActivities() {
    var grids = document.querySelectorAll("[data-activities]");
    if (!grids.length) return;
    grids.forEach(function (el) {
      var mode = el.getAttribute("data-activities");
      var limit = parseInt(el.getAttribute("data-limit") || "99", 10);
      var list = BMG.activities.filter(function (a) { return mode === "all" || a.featured; }).slice(0, limit);
      el.innerHTML = list.map(function (a) {
        return '<button class="card reveal" type="button" data-activity="' + a.slug + '"><img src="' + img(a.img) + '" alt="" loading="lazy"><h3 class="h3">' + esc(a.title) + "</h3></button>";
      }).join("");
    });
    var m = modal("activity-modal", '<div class="modal__panel"><button class="modal__close" type="button" aria-label="Fermer">×</button><img alt=""><div class="modal__body"></div></div>');
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-activity]");
      if (!b) return;
      var a = BMG.activities.filter(function (x) { return x.slug === b.getAttribute("data-activity"); })[0];
      m.querySelector("img").src = img(a.img);
      m.querySelector(".modal__body").innerHTML = '<h2 class="h2">' + esc(a.title) + "</h2>" +
        a.text.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        '<div class="btn-row"><a class="btn" href="contact.html">Demander votre devis</a></div>';
      m.classList.add("is-open");
      m.querySelector(".modal__panel").scrollTop = 0;
    });
  }

  /* ---------- Galerie avec agrandissement (= Wix Gallery, clic « Agrandir ») ---------- */
  function initGalleries() {
    var groups = document.querySelectorAll("[data-gallery]");
    if (!groups.length) return;
    var m = modal("lightbox", '<button class="modal__close" type="button" aria-label="Fermer">×</button><button class="lightbox__nav lightbox__prev" type="button" aria-label="Photo précédente">←</button><img alt=""><button class="lightbox__nav lightbox__next" type="button" aria-label="Photo suivante">→</button>');
    var sources = [], current = 0;
    function show(i) { current = (i + sources.length) % sources.length; m.querySelector("img").src = sources[current]; }
    m.querySelector(".lightbox__prev").addEventListener("click", function () { show(current - 1); });
    m.querySelector(".lightbox__next").addEventListener("click", function () { show(current + 1); });
    document.addEventListener("keydown", function (e) {
      if (!m.classList.contains("is-open")) return;
      if (e.key === "ArrowRight") show(current + 1);
      if (e.key === "ArrowLeft") show(current - 1);
    });
    groups.forEach(function (g) {
      g.addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (!b) return;
        var buttons = Array.prototype.slice.call(g.querySelectorAll("button"));
        sources = buttons.map(function (x) { return x.querySelector("img").src; });
        show(buttons.indexOf(b));
        m.classList.add("is-open");
      });
    });
  }

  /* ---------- Réalisations (liste + fiche) ---------- */
  function rcard(r) {
    return '<a class="card reveal" href="realisation.html#r=' + r.slug + '"><img src="' + img(r.cover) + '" alt="" loading="lazy">' +
      '<h3 class="h3">' + esc(r.title) + "</h3>" +
      '<p class="card__meta">' + esc(r.client) + " · " + esc(r.lieu) + " · " + esc(r.activite) + "</p>" +
      "<p>" + esc(r.excerpt) + '</p><span class="more">Découvrir cette réalisation</span></a>';
  }
  function renderRealisations() {
    document.querySelectorAll("[data-realisations]").forEach(function (el) {
      var limit = parseInt(el.getAttribute("data-limit") || "99", 10);
      el.innerHTML = BMG.realisations.slice(0, limit).map(rcard).join("");
    });
    var el = document.querySelector("[data-realisation-detail]");
    if (!el) return;
    var r = BMG.realisations.filter(function (x) { return x.slug === param("r"); })[0] || BMG.realisations[0];
    document.title = "Maquette · " + r.title + " — Nos réalisations | Beer My Guest";
    el.innerHTML =
      '<section class="hero" data-wix="Modèle 1 · Hero : image de couverture + titre"><img src="' + img(r.cover) + '" alt=""><div class="container"><div class="hero__text">' +
      '<h1 class="h1">' + esc(r.title) + '</h1><p class="lead">' + esc(r.client) + " · " + esc(r.lieu) + " · " + esc(r.activite) + "</p></div></div></section>" +
      '<section class="section"><div class="container">' +
      '<p class="demo-note">Exemple fictif : photos de la galerie actuelle, textes à remplacer par les informations réelles de l’événement.</p>' +
      '<div class="cols cols--3" data-wix="Modèle 6 · Colonnes de texte : type de client, lieu, activité">' +
      '<div><h3 class="h3">Type de client</h3><p>' + esc(r.client) + '</p></div><div><h3 class="h3">Lieu</h3><p>' + esc(r.lieu) + '</p></div><div><h3 class="h3">Activité</h3><p>' + esc(r.activite) + "</p></div></div>" +
      '<div class="split" style="margin-top:72px;align-items:start" data-wix="Modèle 7 · Texte : contexte + déroulement (liste)">' +
      '<div class="text"><h2 class="h2">Le contexte</h2><p>' + esc(r.contexte) + "</p></div>" +
      '<div class="text"><h2 class="h2">Le déroulement</h2><ol>' + r.deroulement.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ol></div></div>" +
      "</div></section>" +
      '<section class="section alt" data-wix="Modèle 4 · Galerie (grille 3 colonnes, clic = agrandir)"><div class="container">' +
      '<div class="gallery" data-gallery>' + r.photos.map(function (p) { return '<button type="button" aria-label="Agrandir la photo"><img src="' + img(p) + '" alt="" loading="lazy"></button>'; }).join("") + "</div>" +
      '<p class="section-cta"><a class="more" href="realisations.html">← Toutes les réalisations</a></p></div></section>' +
      '<section class="band" data-wix="Modèle 5 · Bandeau : titre + bouton"><div class="container"><h2 class="h2">Organiser une expérience <em>similaire</em></h2>' +
      '<div class="btn-row"><a class="btn btn--light" href="contact.html">Organiser une expérience similaire</a></div></div></section>';
  }
  window.addEventListener("hashchange", function () {
    if (document.querySelector("[data-realisation-detail]") && window.location.hash.indexOf("r=") > -1) window.location.reload();
  });

  /* ---------- Formulaire (Wix Forms) ---------- */
  function initForm() {
    var form = document.querySelector("[data-form]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      form.classList.add("is-sent");
    });
  }

  /* ---------- Apparition au défilement ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-visible"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.05 });
    els.forEach(function (el) { io.observe(el); });
  }

  renderHeader();
  renderFooter();
  if (window.BMG) { renderActivities(); renderRealisations(); }
  initGalleries();
  initForm();
  initReveal();
})();
