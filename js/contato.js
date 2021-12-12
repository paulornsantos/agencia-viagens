
var nome = document.getElementById("name");
var email = document.getElementById("email");
var mensagem = document.getElementById("message");



var botao = document.getElementById("contato");

function contato() {
    alert("Solicitação enviada com sucesso, verifique seu e-mail para mais informações!");

}



botao.addEventListener("click", contato);
