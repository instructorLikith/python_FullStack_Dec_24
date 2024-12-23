// DOM Manipulation
console.log(document)

console.dir(document)

document.title = "Demo4";

document.body.style.backgroundColor = "red";

var userName = "";

var welcomeMessage = document.getElementById("msg");

welcomeMessage.textContent += userName === "" ? "Guest" : userName; 

// condition ? "true" : "false"

// 