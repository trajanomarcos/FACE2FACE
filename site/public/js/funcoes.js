// sessão
function validarSessao() {
    // aguardar();

    AvisoJogadores()

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var insc_user = sessionStorage.DATAINS_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var dt_registo = document.getElementById("dt_registo")

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        dt_registo.innerHTML = insc_user.replaceAll("-", "/");

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();

    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

function AvisoJogadores() {

    swal({
        title: "Existem jogadores antigos que nao temos dados!",
        text: "Contamos com a sua compreensão",
        icon: "info",
        button: "Ok!",
        confirmButtonColor: "#D30529",
    });

}
