// Part 1
let mainEl = document.querySelector("main");
console.log(mainEl);

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList = "flex-ctr";

let topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList = "flex-around";

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

menuLinks.forEach((link) => {
  let anchor = document.createElement("a");
  anchor.innerText = link.text;
  anchor.href = link.href;
  topMenuEl.appendChild(anchor);
});

// Part 2
// Added Additional HTML & CSS

// Part 3
let subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList = "flex-around";
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Part 4 & 5
let topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  let eventTarget = event.target;
  let eventObject;

  menuLinks.forEach((linkObject) => {
    if (linkObject.text == eventTarget.innerText.toLowerCase()) {
      // eventTarget = anchor element | .innerText = Text within anchor element | <a href=?>About</a>
      eventObject = linkObject;
    }
  });

  if (!eventTarget.classList.contains("active")) {
    if (eventObject) {
      if (eventObject.subLinks) {
        subMenuEl.style.top = "100%";
      } else {
        subMenuEl.style.top = "0";
      }
    }
  } else {
    subMenuEl.style.top = "0";
  }

  if (!eventTarget.matches("a")) {
    return;
  } else {
    eventTarget.classList.toggle("active");
    topMenuLinks.forEach((link) => {
      if (link !== eventTarget) {
        link.classList.remove("active");
      }
    });
  }

  let buildSubmenu = () => {
    subMenuEl.innerHTML = "";
    let subLinksObject = eventObject.subLinks;

    if (eventObject.subLinks) {
      subLinksObject.forEach((link) => {
        let linkAnchor = document.createElement("a");
        linkAnchor.href = link.href;
        linkAnchor.text = link.text;
        subMenuEl.appendChild(linkAnchor);
      });
    }
  };

  buildSubmenu();

  if (event.target.textContent.toLowerCase() === "about") {
    mainEl.innerHTML = `<h1>About</h1>`;
  }

  console.log(event.target.textContent);
});

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (!event.target.matches("a")) {
    return;
  }
  event.target.classList.toggle("active");

  subMenuEl.style.top = "0";

  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });

  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;

  console.log(event.target.textContent);
});
