let submitColourButton = document.getElementById("submit-bg-colour-button");
let colourSelector = document.getElementById("background-colour-selector");
let body = document.getElementsByTagName("body")[0];

body.style.backgroundColor = localStorage.getItem("background-colour");

submitColourButton.addEventListener("click", () => {
    let newColour = colourSelector.value;
    body.style.backgroundColor = newColour;

    localStorage.setItem("background-colour", newColour);
})