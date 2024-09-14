// import elements from html file
var toggleButton = document.getElementById("Toggle-skills");
var Skills = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (Skills.style.display === "none") {
        Skills.style.display = "block";
    }
    else {
        Skills.style.display = "none";
    }
});
