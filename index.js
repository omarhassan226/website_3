window.addEventListener("scroll", function () {
    console.log("Scrolling...");
    var header = document.querySelector(".header");
    if (window.scrollY > 100) {
        header.classList.add("dark-bg");
    } else {
        header.classList.remove("dark-bg");
    }
});
