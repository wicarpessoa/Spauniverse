export function Controls() {
  const bodyBg = document.querySelector("body");
  const homeLink = document.querySelector('a[href*="/"]');
  const universeLink = document.querySelector('a[href*="/universe"]');
  const explorationLink = document.querySelector('a[href*="/exploration"]');

  function homeStyle() {
    bodyBg.classList.add("bg-home");
    bodyBg.classList.remove("bg-exploration");
    bodyBg.classList.remove("bg-universe");

    homeLink.classList.add("active-link");
    universeLink.classList.remove("active-link");
    explorationLink.classList.remove("active-link");
  }
  function universeStyle() {
    bodyBg.classList.add("bg-universe");
    bodyBg.classList.remove("bg-home");
    bodyBg.classList.remove("bg-exploration");

    universeLink.classList.add("active-link");
    homeLink.classList.remove("active-link");
    explorationLink.classList.remove("active-link");
  }
  function explorationStyle() {
    bodyBg.classList.add("bg-exploration");
    bodyBg.classList.remove("bg-home");
    bodyBg.classList.remove("bg-universe");

    explorationLink.classList.add("active-link");
    homeLink.classList.remove("active-link");
    universeLink.classList.remove("active-link");
  }
  return { homeStyle, universeStyle, explorationStyle };
}
