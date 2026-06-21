/**
 * NOCO Boot — runs before heavy scripts so the start animation never blocks.
 * Shell lookup is lazy: #appShell does not exist yet when this file first parses.
 */
(function () {
  "use strict";

  var boot = document.getElementById("bootScreen");
  var finished = false;
  var tick = 0;
  var steps = [
    "NOCO AI startet…",
    "Liquid Glass lädt…",
    "Module werden vorbereitet…",
    "Vault wird geöffnet…",
    "UI wird aktiv…",
    "Willkommen!"
  ];
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var stepMs = reduced ? 200 : 420;
  var maxMs = reduced ? 2200 : 4800;

  function getShell() {
    return document.getElementById("appShell");
  }

  function getStatus() {
    return document.getElementById("bootStatus");
  }

  function getBar() {
    return boot ? boot.querySelector(".boot-progress-bar") : null;
  }

  function getDots() {
    return boot ? boot.querySelectorAll(".boot-dot") : [];
  }

  function unlockAppShell() {
    var shell = getShell();
    document.body.classList.add("noco-ui-ready");
    document.body.classList.remove("boot-handoff-active", "noco-booting");
    if (boot) {
      boot.classList.add("hidden", "is-handoff");
      boot.classList.remove("is-booting", "is-exiting", "is-stuck-recovery", "is-boot-error");
      boot.setAttribute("aria-hidden", "true");
    }
    if (shell) {
      shell.classList.add("ready");
      shell.classList.remove("is-boot-handoff");
    }
  }

  function finish() {
    if (finished) return;
    finished = true;
    window.__nocoBootDone = true;
    if (window.__nocoBootTick) {
      clearInterval(window.__nocoBootTick);
      window.__nocoBootTick = null;
    }
    if (window.__nocoBootMaxTimer) {
      clearTimeout(window.__nocoBootMaxTimer);
      window.__nocoBootMaxTimer = null;
    }
    if (boot) {
      boot.classList.add("hidden", "is-handoff");
      boot.classList.remove("is-booting", "is-exiting", "is-stuck-recovery");
      boot.setAttribute("aria-hidden", "true");
    }
    unlockAppShell();
  }

  window.__nocoForceBoot = finish;
  window.__nocoUnlockApp = unlockAppShell;

  if (!boot) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", unlockAppShell);
    } else {
      unlockAppShell();
    }
    return;
  }

  document.body.classList.add("noco-booting");
  boot.classList.remove("hidden");
  boot.classList.add("is-booting");
  boot.setAttribute("aria-hidden", "false");
  if (getBar()) getBar().style.width = "0%";

  boot.addEventListener("click", finish);
  document.addEventListener("keydown", function (e) {
    if (finished) return;
    if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
      e.preventDefault();
      finish();
    }
  });

  window.__nocoBootTick = setInterval(function () {
    if (finished) return;
    var status = getStatus();
    var bar = getBar();
    var dots = getDots();
    if (status && steps[tick]) status.textContent = steps[tick];
    if (bar) bar.style.width = Math.min(100, ((tick + 1) / steps.length) * 100).toFixed(0) + "%";
    if (dots[tick]) {
      dots[tick].classList.add("done");
      dots[tick].classList.remove("active");
    }
    if (dots[tick + 1]) dots[tick + 1].classList.add("active");
    tick++;
    if (tick >= steps.length) {
      boot.classList.add("is-exiting");
      clearInterval(window.__nocoBootTick);
      window.__nocoBootTick = null;
      setTimeout(finish, reduced ? 120 : 350);
    }
  }, stepMs);

  window.__nocoBootMaxTimer = setTimeout(finish, maxMs);
})();
