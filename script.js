const button = document.querySelector("button");
const firstName = document.getElementById("first_name");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    console.log(firstName.value);
});

button.addEventListener("click", (e) => {
    button.setAttribute("style", "background-color: #35402b");
    setTimeout(function() {
        button.setAttribute("style", "background-color: #596C48");
    }, 50);
});
