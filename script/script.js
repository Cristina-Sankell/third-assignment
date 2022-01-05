const nav = document.getElementById("side-nav");
const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav")
const modal = document.getElementById("modal")
const openModal = document.getElementById("open-modal")
const closeModal = document.getElementById("close-modal")


openNav.addEventListener("click", function () {
    nav.style.display = "block";
    openNav.style.display = "none";
});

closeNav.addEventListener("click", function () {
    nav.style.display = "none";
    openNav.style.display = "block";
});

openModal.addEventListener("click", function() {
    modal.style.display = "block";
    openModal.style.display = "none";
});

closeModal.addEventListener("click", function() {
    modal.style.display = "none"
    openModal.style.display = "block";
});
