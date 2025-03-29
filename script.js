const logo = document.querySelector(".fade--header");
const header = document.querySelector(".header");

const app = document.querySelectorAll(`.app--phone`);

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const mobileHam = document.querySelector(".mobileHam");
const mobileNav = document.querySelector(".mobileNav");

const companies = document.querySelectorAll(".company");
const companyContainer = document.querySelector(".featured--in");

// Scroll Section Into View
// Scroll Section Into View
const links = document.querySelector(".nav__links");
const mobileLinks = document.querySelector(".mobile__nav__links");

// Intersect Header
function observerCallBack(entries) {
  const [entry] = entries;
  console.log(entry.isIntersecting);
  if (!entry.isIntersecting) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

const observerOptions = {
  root: null,
  threshold: 0,
};

const observer = new IntersectionObserver(observerCallBack, observerOptions);
observer.observe(logo);

function appObserverCallBack(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    entry.target.classList.add("undo-blur");
    console.log(entry.target);
  } else {
    entry.target.classList.remove("undo-blur");
    console.log(entry);
  }
}

const appObserver = new IntersectionObserver(appObserverCallBack, {
  root: null,
  threshold: 0.4,
});

app.forEach((value) => appObserver.observe(value));

// Navigation bar

const toggle = function (e) {
  e.preventDefault();
  mobileNav.classList.toggle("toggleMobileNav");
  hamburger.classList.toggle("hidden");
  close.classList.toggle("closeActive");
  document.body.style.overflow = "hidden";
};

const toggleAndRemove = function (e) {
  e.preventDefault();
  mobileNav.classList.toggle("toggleMobileNav");
  hamburger.classList.toggle("hidden");
  close.classList.toggle("closeActive");
  document.body.style.overflow = "scroll";
};

hamburger.addEventListener("click", toggle);

close.addEventListener("click", toggleAndRemove);

const navScrollToView = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const href = e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  }
};

links.addEventListener("click", navScrollToView);
mobileLinks.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("mobile__link")) {
    const href = e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    toggleAndRemove(e);
  }
});

// Duplicate Logos
const totalLogo = document.querySelector(".slider--logo");

const items = Array.from(totalLogo.children);
const [...items2] = items;

items.forEach((value) => {
  const clone1 = value.cloneNode(true);
  totalLogo.appendChild(clone1);
});

items2.forEach((value) => {
  const clone2 = value.cloneNode(true);
  totalLogo.appendChild(clone2);
});
