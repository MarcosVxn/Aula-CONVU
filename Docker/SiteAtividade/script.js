const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "☾";
    } else {
        themeButton.textContent = "☼";
    }
});