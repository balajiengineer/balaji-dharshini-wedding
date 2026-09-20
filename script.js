/* =========================================
   WEDDING COUNTDOWN
========================================= */

const weddingDate = new Date(
  "2026-11-20T06:30:00+05:30"
).getTime();

function updateCountdown() {

  const now = new Date().getTime();

  const difference = weddingDate - now;

  if (difference <= 0) {

    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";

    return;
  }

  const days =
    Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

  const minutes =
    Math.floor(
      (difference / (1000 * 60)) % 60
    );

  const seconds =
    Math.floor(
      (difference / 1000) % 60
    );

  document.getElementById("days").innerText =
    String(days).padStart(2, "0");

  document.getElementById("hours").innerText =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").innerText =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").innerText =
    String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================
   GOLDEN PARTICLES
========================================= */

const particleContainer =
  document.querySelector(".gold-particles");

if (particleContainer) {

  for (let i = 0; i < 35; i++) {

    const particle =
      document.createElement("span");

    particle.className =
      "gold-particle";

    particle.style.left =
      Math.random() * 100 + "%";

    particle.style.top =
      Math.random() * 100 + "%";

    particle.style.animationDelay =
      Math.random() * 5 + "s";

    particle.style.animationDuration =
      (3 + Math.random() * 5) + "s";

    particleContainer.appendChild(particle);
  }
}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
  document.querySelectorAll(
    ".event-card, .countdown-section, .murugan-section"
  );

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "reveal-visible"
          );

        }

      });

    },

    {
      threshold: 0.15
    }

  );

revealElements.forEach((element) => {

  element.classList.add("reveal");

  observer.observe(element);

});


/* =========================================
   NAVIGATION ACTIVE EFFECT
========================================= */

const navLinks =
  document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});
