import { Controls } from "./controls.js";
export class Router {
  controls = Controls();
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    console.log(event.target.href);
    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    console.log(pathname);
    if (pathname === "/") {
      this.controls.homeStyle();
    } else if (pathname === "/universe") {
      this.controls.universeStyle();
    } else if (pathname === "/exploration") {
      this.controls.explorationStyle();
    }
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
