const toggleMenu = () => {
  const nav = document.getElementById("nav-list");
  if (nav.classList.contains("visible")) {
    nav.classList.remove("visible");
  } else {
    nav.classList.add("visible");
  }
};
