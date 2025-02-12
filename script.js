document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const headerButton = document.querySelector(".nav__button");
  const navButton = document.querySelector(".nav__link--button");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        headerButton.style.display = "flex";
        navButton.style.display = "none";
      } else {
        headerButton.style.display = "none";
        navButton.style.display = "flex";
      }
    },
    { threshold: 0.1 }
  );
  observer.observe(header);
});
