import { navigation } from "./data";
import gsap from "gsap";

export const toggleNavMenu = (flag, setFlag) => {
  let navMenu = document.getElementsByClassName("navMenu")[0];

  if (!flag) {
    navMenu.classList.remove("navMenu--nodisplay");
    navMenu.classList.add("navMenu--display");
    setFlag(!flag);
  } else {
    navMenu.classList.remove("navMenu--display");
    navMenu.classList.add("navMenu--nodisplay");
    setFlag(!flag);
  }
};

export const toggleHomeMenu = (x) => {
  let target = x.replace(/\s/g, "");

  let button = document.getElementsByClassName(`${target}-flag`)[0];
  let menu = document.getElementsByClassName(target)[0];
  button.addEventListener("mouseover", () => {
    menu.style.display = "flex";
    gsap.from(`.${target}`, { yPercent: 10, opacity: 0, duration: 0.2 });
    navigation.forEach((other) => {
      let o = other.replace(/\s/g, "");
      let toNotDisplay = document.getElementsByClassName(o)[0];
      if (toNotDisplay && o !== target) {
        toNotDisplay.style.display = "none";
      }
    });
  });

  if (menu) {
    menu.addEventListener("mouseleave", () => {
      menu.style.display = "none";
    });
  }
};

export const toggleCompanionInfo = (x) => {
  let target = document.getElementsByClassName("companion__image")[x];
  let backdrop = document.getElementsByClassName("companion__backdrop")[x];
  let infoBox = document.getElementsByClassName("companion--box-1")[x];
  let searchButton = document.getElementsByClassName("companion__search")[x];
  let burgerButton = document.getElementsByClassName("companion__burger")[x];
  let centerDivider = document.getElementsByClassName("companion__divider")[x];

  let tl = gsap.timeline();

  target.addEventListener("mouseenter", () => {
    backdrop.style.display = "block";
    infoBox.style.display = "block";
    tl.from(searchButton, { x: -200, opacity: 0, duration: 0.3 })
      .from(burgerButton, { x: 200, opacity: 0, duration: 0.3 }, "<")
      .from(
        centerDivider,
        { scale: 0, duration: 0.3, transformOrigin: "50% 50%" },
        "<"
      )
      .from(backdrop, { opacity: 0, duration: 0.3 }, "<");
  });

  target.addEventListener("mouseleave", () => {
    backdrop.style.display = "none";
    infoBox.style.display = "none";
  });
};

export const toggleNewsBackdrop = (x) => {
  let target = document.getElementsByClassName("article__image")[x];
  let backdrop = document.getElementsByClassName("article__backdrop")[x];

  target.addEventListener("mouseenter", () => {
    backdrop.style.display = "block";
    gsap.from(backdrop, { opacity: 0, duration: 0.3 });
  });

  target.addEventListener("mouseleave", () => {
    backdrop.style.display = "none";
  });
};
