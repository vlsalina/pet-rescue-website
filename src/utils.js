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

export const toggleHomeMenu = () => {
  let homeButton = document.getElementsByClassName("home--flag")[0];
  let homeMenu = document.getElementsByClassName("homeMenu")[0];
  homeButton.addEventListener("mouseover", () => {
    homeMenu.style.display = "block";
  });

  homeButton.addEventListener("mouseleave", () => {
    homeMenu.style.display = "none";
  });
};
