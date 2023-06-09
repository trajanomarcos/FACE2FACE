// sessão
function validarSessao() {
    // aguardar();

    // AvisoJogadores()

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
        title: "Existem jogadores antigos dos quais não temos dados!",
        text: "Contamos com a sua compreensão",
        icon: "info",
        button: "Ok!",
        confirmButtonColor: "#D30529",
    });

}

function ShowImgProfile() {

    var escolha = sessionStorage.getItem("ESCOLHA_USUARIO");

    if (escolha == 3) {

        img_nav_profile.innerHTML = `<img src="/assets/Jordan_1.svg" alt="" style="width: 35px;" class="nav_profile">`

        img_profile.innerHTML = `<img src="/assets/Jordan_1.svg" alt="" style="width: 80px;" class="profile-icon">`

    } else if (escolha == 1) {

        img_nav_profile.innerHTML = `<img src="/assets/Lebron_1.svg" alt="" style="width: 35px;" class="nav_profile">`

        img_profile.innerHTML = `<img src="/assets/Lebron_1.svg" alt="" style="width: 80px;" class="profile-icon">`


    } else if (escolha == 2 ) {

        img_nav_profile.innerHTML = `<img src="/assets/Kobe_1.svg" alt="" style="width: 35px;" class="nav_profile">`
        img_profile.innerHTML = `<img src="/assets/Kobe_1.svg" alt="" style="width: 80px;" class="profile-icon">`

    } else {

        console.log("Erro ao cadastrar profile picture")
    }
}

function ChangeProfile() {

    card.style.display = "flex";
    card.style.position = "fixed";
}

function Fechar() {

    card.style.display = "none";
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();

    // finalizarAguardar();
    window.location = "../index.html";
}