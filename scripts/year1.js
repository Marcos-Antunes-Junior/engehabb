const year = document.querySelector("#year");
year.textContent = `${new Date().getFullYear()}`;

document.querySelector("#contact-button").onclick = function () {
    window.location.href = "contato.html";
};

document.querySelector(".logo").onclick = function () {
    window.location.href = "index.html";
};

document.querySelector("#logo2").onclick = function () {
    window.location.href = "index.html";
};









