let body = document.body;
body.style.background = "lightgray";

let header = document.createElement("header");
let main = document.createElement("main");
let footer = document.createElement("footer");

body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);

let formSection = document.createElement("section");
formSection.style.width = "300px";
formSection.style.margin = "100px auto";

main.appendChild(formSection);

let form = document.createElement("form");

formSection.appendChild(form);

let formNameInput = document.createElement("input");
formNameInput.classList.add("form-input");
formNameInput.type = "text";
formNameInput.placeholder = "Name";

let formSurnameInput = document.createElement("input");
formSurnameInput.classList.add("form-input");
formSurnameInput.type = "text";
formSurnameInput.placeholder = "Surname";

let formPasswordInput = document.createElement("input");
formPasswordInput.classList.add("form-input");
formPasswordInput.type = "password";
formPasswordInput.placeholder = "Password";


form.appendChild(formNameInput);
form.appendChild(formSurnameInput);
form.appendChild(formPasswordInput);

let formInputs = document.querySelectorAll(".form-input");

for (const input of formInputs) {
    input.style.padding = "10px 15px";
    input.style.marginBottom = "10px";
    input.style.borderRadius = "5px";
    input.style.border = "none";
    input.style.width = "100%";
    input.style.boxSizing = "border-box";
    input.style.color = "pink";
}

let formButton = document.createElement("button");
formButton.type = "submit";
formButton.innerText = "Submit";
formButton.style.width = "100%";
formButton.style.padding = "10px";
formButton.style.margin = "0px 0px";
formButton.style.marginBottom = "10px";
formButton.style.borderRadius = "5px";
formButton.style.border = "none";
formButton.style.color = "white";
formButton.style.background = "linear-gradient(45deg, pink, orange)";

form.appendChild(formButton);

let userList = document.createElement("ul");
userList.style.margin = "20px auto";
userList.style.width = "300px";
userList.style.listStyle = "none";

function AddUser (name, surname) {
    let user = document.createElement("li");
    user.innerText = name + " " + surname;
    console.log(user);
    user.style.color = "pink";
    user.style.fontSize = "28px";
    userList.appendChild(user);
}

AddUser("Adil", "Velizade");
AddUser("Eljan", "Rustamov");
AddUser("Roza", "Abdullayeva");
AddUser("Aysel", "Mirza");
AddUser("Farid", "Guluzade");
AddUser("Akif", "Guliyev");
AddUser("Asad", "Rasulov");

main.appendChild(userList);