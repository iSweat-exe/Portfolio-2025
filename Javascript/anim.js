document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: ".Titre1",
    translateX: [-50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: 500,
  });

  anime({
    targets: ".Sous-Titre1",
    translateX: [-50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: 800,
  });

  anime({
    targets: ".containerHero_hero-underline",
    width: ["0%", "60%"],
    easing: "easeInOutQuad",
    duration: 800,
    delay: 1200,
  });

  anime({
    targets: ".containerHero_hero-button_CTA_Hero",
    translateY: [500, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: 1900,
  });

  anime({
    targets: ".cube-container",
    translateX: [500, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: 2600,
  });

  anime({
    targets: ".marquee-anim",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1700,
    delay: 3200,
  });
});
