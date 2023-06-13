const year = document.querySelector("#year");
year.textContent = `${new Date().getFullYear()}`;

document.querySelector("#contact-button").onclick = function () {
    window.location.href = "contato.html";
};









