document.querySelector(".menu-img").addEventListener("click", function() {
    document.querySelector(".side-menu").classList.toggle("open");
    console.log("clicked");
});
document.querySelectorAll(".side-menu a").forEach((link) => {
    link.addEventListener("click", function() {
        document.querySelector(".side-menu").classList.remove("open");
    });
});