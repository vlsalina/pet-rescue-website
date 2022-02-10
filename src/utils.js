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
    gsap.from(`.${target}`, { yPercent: 10, opacity: 0 });
    navigation.forEach((other) => {
      let otherMenus = other.replace(/\s/g, "");
      if (otherMenus !== target) {
        document.getElementsByClassName(otherMenus)[0].style.display = "none";
      }
    });
  });

  if (menu) {
    menu.addEventListener("mouseleave", () => {
      menu.style.display = "none";
    });
  }
};
