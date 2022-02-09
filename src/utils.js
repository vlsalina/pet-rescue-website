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
