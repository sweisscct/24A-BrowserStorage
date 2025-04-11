let submitColourButton = document.getElementById("submit-bg-colour-button");
let colourSelector = document.getElementById("background-colour-selector");
let body = document.getElementsByTagName("body")[0];
let submitFontSizeButton = document.getElementById("submit-font-size-button");
let fontSizeSelector = document.getElementById("font-size-selector");

body.style.backgroundColor = localStorage.getItem("background-colour");
body.style.fontSize = localStorage.getItem("font-size");

submitColourButton.addEventListener("click", () => {
    let newColour = colourSelector.value;
    body.style.backgroundColor = newColour;

    localStorage.setItem("background-colour", newColour);
});

/*
    Exercise
    Include an input that will change the text size on the screen
    Persist this setting
*/

submitFontSizeButton.addEventListener("click", () => {
    let newFontSize = fontSizeSelector.value+"px";
    body.style.fontSize = newFontSize;

    localStorage.setItem("font-size", newFontSize);
})