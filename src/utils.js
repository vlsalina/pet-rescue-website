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
  let button = document.getElementsByClassName(
    `${x.replace(/\s/g, "")}-flag`
  )[0];
  let menu = document.getElementsByClassName(x.replace(/\s/g, ""))[0];
  button.addEventListener("mouseover", () => {
    menu.style.display = "flex";
  });

  button.addEventListener("mouseleave", () => {
    menu.style.display = "none";
  });
};
