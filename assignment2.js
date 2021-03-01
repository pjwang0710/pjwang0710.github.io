var bannerText = document.getElementById("banner-greeting");
var actionButton = document.querySelector("section .action-button");
var hiddenContents = document.querySelector("section .hidden-contents");

bannerText.addEventListener("click", () => {
    bannerText.textContent = "Have a Good Time!";
})

actionButton.addEventListener("click", () => {
    hiddenContents.style.display = "grid";
})