/* ==========================================================================
   LONER TECH — Business Website Showcase
   Shared behavior, included on every page (index.html + each demo page).

   1. Mobile nav toggle — works on any page with a .navbar containing a
      .nav-toggle button and a .nav-links list.
   2. Generic filter chips — works on any page with a .filter-bar
      (buttons with data-filter="...") next to a [data-filter-target]
      container whose items carry data-tag="...".
   Both are no-ops on pages that don't have the matching markup, so this
   one file is safe to include everywhere.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initFilters();
});

/* ---------- 1. mobile nav ---------- */

function initMobileNav() {
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".nav-toggle");
  if (!navbar || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the mobile menu after tapping a link (anchor jumps, page links).
  navbar.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- 2. generic filter chips ---------- */

function initFilters() {
  document.querySelectorAll(".filter-bar").forEach((bar) => {
    const targetSelector = bar.getAttribute("data-filter-target");
    const target = targetSelector ? document.querySelector(targetSelector) : null;
    if (!target) return;

    const chips = bar.querySelectorAll(".filter-chip");
    const items = target.querySelectorAll("[data-tag]");

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.setAttribute("aria-pressed", "false"));
        chip.setAttribute("aria-pressed", "true");

        const filter = chip.getAttribute("data-filter");
        items.forEach((item) => {
          const show = filter === "all" || item.getAttribute("data-tag") === filter;
          item.hidden = !show;
        });
      });
    });
  });
}
