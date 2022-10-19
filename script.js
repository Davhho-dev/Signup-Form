const button = document.querySelector("button");
const firstName = document.getElementById("first_name");
const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("user_password");
const passwordConfirm = document.getElementById("confirm_userPassword");
const message = document.querySelector(".password-requirements");

button.addEventListener("click", (e) => {
    button.setAttribute("style", "background-color: #35402b");
    setTimeout(function() {
        button.setAttribute("style", "background-color: #596C48");
    }, 50);
});


password.addEventListener("focus", (e) => {
    message.setAttribute("style", "display: block;");
});

password.addEventListener("blur", (e) => {
    message.setAttribute("style", "display: none;");
});

password.addEventListener("keyup", (e) => {
    let char = e.target.value;
    let pwString = "";
    pwString += char;
    const uppercase = document.querySelector(".uppercase");
    const lowercase = document.querySelector(".lowercase");
    const specialChar = document.querySelector(".special-char");
    const minimumLength = document.querySelector(".minimum-length");
    if(checkUpperCase(pwString)) 
        uppercase.style.color = "green";
    else
        uppercase.style.color = "red";

    if(checkLowerCase(pwString))
        lowercase.style.color = "green";
    else
        lowercase.style.color = "red";

    if(checkSpecialChar(pwString))
        specialChar.style.color = "green";
    else
        specialChar.style.color = "red";

    if(pwString.length >= 8) 
        minimumLength.style.color = "green";
    else
        minimumLength.style.color = "red";
});

form.addEventListener("submit", (e) => {
    let userPW = password.value;
    let confirmPW = passwordConfirm.value;
    if(!passwordCompletion(userPW)) {
        e.preventDefault();
        console.log(userPW);
    }else if(userPW != confirmPW) {
        e.preventDefault();
        console.log(confirmPW);
    }
});


function checkUpperCase(userPassword) {
    let isUpperCase = false;
    for(i = 0; i < userPassword.length; i++) {
        if(userPassword[i] === userPassword[i].toUpperCase()) return true;
        else isUpperCase = false;
    }
    return isUpperCase;
}


function checkLowerCase(userPassword) {
    let isLowerCase = false;
    for(i = 0; i < userPassword.length; i++) {
        if(userPassword[i] === userPassword[i].toLowerCase()) return true;
        else isLowerCase = false;
    }
    return isLowerCase;
}

function checkSpecialChar(userPassword) {
    let charArr = ["!", "@", "#", "$", "?"];
    for(let i = 0; i < userPassword.length; i++) {
        for(let j = 0; j < charArr.length; j++) {
            if(userPassword[i] === charArr[j]) return true;
        }
    }
    return false;
}

function passwordCompletion(userPassword) {
    if(checkLowerCase(userPassword) && checkSpecialChar(userPassword) && checkUpperCase(userPassword) && userPassword.length >= 8) return true;
    else return false;
}