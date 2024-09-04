const menuImg = document.querySelector(".menu-img");
const sideList = document.querySelector(".side-menu");

menuImg.addEventListener("click", (e) => {
  console.log("clicked");
  sideList.classList.toggle("open");
});
