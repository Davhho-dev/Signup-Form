const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    button.setAttribute("style", "background-color: #35402b");
    setTimeout(function() {
        button.setAttribute("style", "background-color: #596C48");
    }, 50);
})