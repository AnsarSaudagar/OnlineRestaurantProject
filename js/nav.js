const hamBtn = document.querySelector("#nav-ham");
const navBar = document.querySelector("#navbar");
const crossBtn = document.querySelector("#cross-btn");

const onHamClick = () => {
  navBar.classList.add("visible");
  navBar.classList.remove("hide");
};

const onCrossClick = () => {
  navBar.classList.add("hide");
  navBar.classList.remove("visible");
};

hamBtn.addEventListener("click", onHamClick);
crossBtn.addEventListener("click", onCrossClick);
