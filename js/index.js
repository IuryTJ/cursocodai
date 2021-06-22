var nome = "Iury Gonçalves"; 
var cargo = "Futuro - Dev";

var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome) {
nomehtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    cargohtml.innerHTML = cargo;
}

function logarnome() {
    console.log(nome);
}

function clicNoProjetos() {
    console.log("Clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clicNoSobre() {
    console.log("Clicou no botão sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);