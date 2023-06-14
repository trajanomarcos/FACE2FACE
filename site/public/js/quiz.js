var teams = [
    {
        nomeTime: "Atlanta Hawks"
    },
    {
        nomeTime: "Boston Celtics"
    },
    {
        nomeTime: "Brooklyn Nets"
    },
    {
        nomeTime: "Charlotte Hornets"
    },
    {
        nomeTime: "Chicago Bulls"
    },
    {
        nomeTime: "Cleveland Cavaliers"
    },
    {
        nomeTime: "Dallas Mavericks"
    },
    {
        nomeTime: "Denver Nuggets"
    },
    {
        nomeTime: "Detroit Pistons"
    },
    {
        nomeTime: "Golden State Warriors"
    },
    {
        nomeTime: "Houston Rockets"
    },
    {
        nomeTime: "Indiana Pacers"
    },
    {
        nomeTime: "Los Angeles Clippers"
    },
    {
        nomeTime: "Los Angeles Lakers"
    },
    {
        nomeTime: "Memphis Grizzlies"
    },
    {
        nomeTime: "Miami Heat"
    },
    {
        nomeTime: "Milwaukee Bucks"
    },
    {
        nomeTime: "Minnesota Timberwolves"
    },
    {
        nomeTime: "New Orleans Pelicans"
    },
    {
        nomeTime: "New York Knicks"
    },
    {
        nomeTime: "Oklahoma City Thunder"
    },
    {
        nomeTime: "Orlando Magic"
    },
    {
        nomeTime: "Philadelphia 76ers"
    },
    {
        nomeTime: "Phoenix Suns"
    },
    {
        nomeTime: "Portland Trail Blazers"
    },
    {
        nomeTime: "Sacramento Kings"
    },
    {
        nomeTime: "San Antonio Spurs"
    },
    {
        nomeTime: "Toronto Raptors"
    },
    {
        nomeTime: "Utah Jazz"
    },
    {
        nomeTime: "Washington Wizards"
    }
]

var teamsFinal = [
    {
        nomeTime: "Atlanta Hawks",
        id: 0,
    },
    {
        nomeTime: "Boston Celtics",
        id: 1,
    },
    {
        nomeTime: "Brooklyn Nets",
        id: 2,
    },
    {
        nomeTime: "Charlotte Hornets",
        id: 3,
    },
    {
        nomeTime: "Chicago Bulls",
        id: 4,
    },
    {
        nomeTime: "Cleveland Cavaliers",
        id: 5,
    },
    {
        nomeTime: "Dallas Mavericks",
        id: 6,
    },
    {
        nomeTime: "Denver Nuggets",
        id: 7,
    },
    {
        nomeTime: "Detroit Pistons",
        id: 8,
    },
    {
        nomeTime: "Golden State Warriors",
        id: 9,
    },
    {
        nomeTime: "Houston Rockets",
        id: 10,
    },
    {
        nomeTime: "Indiana Pacers",
        id: 11,
    },
    {
        nomeTime: "Los Angeles Clippers",
        id: 12,
    },
    {
        nomeTime: "Los Angeles Lakers",
        id: 13,
    },
    {
        nomeTime: "Memphis Grizzlies",
        id: 14,
    },
    {
        nomeTime: "Miami Heat",
        id: 15,
    },
    {
        nomeTime: "Milwaukee Bucks",
        id: 16,
    },
    {
        nomeTime: "Minnesota Timberwolves",
        id: 17,
    },
    {
        nomeTime: "New Orleans Pelicans",
        id: 18,
    },
    {
        nomeTime: "New York Knicks",
        id: 19,
    },
    {
        nomeTime: "Oklahoma City Thunder",
        id: 20,
    },
    {
        nomeTime: "Orlando Magic",
        id: 21,
    },
    {
        nomeTime: "Philadelphia 76ers",
        id: 22,
    },
    {
        nomeTime: "Phoenix Suns",
        id: 23,
    },
    {
        nomeTime: "Portland Trail Blazers",
        id: 24,
    },
    {
        nomeTime: "Sacramento Kings",
        id: 25,
    },
    {
        nomeTime: "San Antonio Spurs",
        id: 26,
    },
    {
        nomeTime: "Toronto Raptors",
        id: 27,
    },
    {
        nomeTime: "Utah Jazz",
        id: 28,
    },
    {
        nomeTime: "Washington Wizards",
        id: 29,
    }
]

var timesCorretos = [];

var inputs = document.getElementById(`inputTime`);
var button = document.getElementById("BotaoVerificar");

var pontuacao = 0;


var nome = sessionStorage.NOME_USUARIO;

var timeout;

inputs.addEventListener('click', function click(e) {

    //Conversão para segundos --- Duracao = (tempoEmSegundos) * (MinutagemQuiz)
    
    var duracao = 60 * 1;

    var display = document.getElementById('timer');

    startTimer(duracao, display)

    inputs.removeEventListener('click', click);
})

inputs.addEventListener('keyup', (e) => {

    var respostaUser = inputTime.value.toLowerCase();
    clearTimeout(timeout);

    timeout = setTimeout(function () {

        if (inputs.value.length > 3) {

            for (var i = 0; i < teams.length; i++) {

                var time = document.getElementById(`nomeTime${i}`)
                var containerTime = document.getElementById(`time${i}`)
                var vetorDeTimes = teams[i].nomeTime.toLocaleLowerCase()

                if (vetorDeTimes.includes(respostaUser)) {

                    time.innerHTML = `${teams[i].nomeTime}`

                    time.classList.add('correct')

                    if (timesCorretos.indexOf(teams[i].nomeTime) < 0) {
                        timesCorretos.push(teams[i].nomeTime)
                        pontuacao = `${timesCorretos.length}`
                        pontos.innerHTML = `${pontuacao}/30`
                        limparInput()
                        containerTime.classList.add('correct-div');
                        teamsFinal.splice(i, 1);
                        return
                    }

                }
            }

        }

        if (timesCorretos.length == 30) {

            alert("Parabens voce concluiu o quiz!!")
        }
    }, 500)

})


function limparInput() {

    document.getElementById('inputTime').value = '';

}

function startTimer(duracao, display) {
    var timer = duracao, minutos, segundos;
    var nomeUsuario = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    var funcTimer = setInterval(function () {
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;
        display.innerHTML = minutos + ":" + segundos;
        if (--timer < 0 || timesCorretos.length == 30) {
            clearInterval(funcTimer)
            AbrirModal()
            modal.innerHTML += ` 
            <div class="containerModal">
                <h1 id="resultadoQuiz">Resultado!</h1>
                <p id="infoQuiz">Parabens! ${nomeUsuario}</p>
                <p>Você acertou ${pontuacao} de 30!</p>
                <p>SEU TEMPO FOI DE:</p>
                <h3>${minutos} : ${segundos}</h3>
                <button class="botaoModal" onclick="FecharModal()">Salvar e Sair</button>
                <button class="botaoModal" onclick="AbrirRanking()">Salvar e Ver ranking!</button>
            </div>
            `
            StopQuiz(idUsuario, pontuacao, minutos, segundos, nomeUsuario)
            return
        }
    }, 1000);

}



function StopQuiz(idUsuario, pontuacao, minutos, segundos, nomeUsuario) {

    for (var i = 0; i < teams.length; i++) {

        var time = document.getElementById(`nomeTime${i}`)
        var containerTime = document.getElementById(`time${i}`)

        if (time.classList.contains('correct')) {

            console.log("Classe encontrada na posicao:" + i);

        } else {

            time.classList.add('incorrect');
            containerTime.classList.add('incorrect-div');
            time.innerHTML = teams[i].nomeTime;
        }

    }

    resultadoQuiz(idUsuario, pontuacao, minutos, segundos, nomeUsuario)

    return;

}

function AbrirModal() {

    modal.style.display = 'flex';

    modal.innerHTML = ``
}

function FecharModal() {

    modal.style.display = 'none';
}

function AbrirRanking(){

    window.location.href = 'ranking_quiz.html';
    
}

function resultadoQuiz(idUsuario, pontuacao, minutos, segundos, nomeUsuario) {

    console.log(nome + "NOME DO USUARIO")

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var idVar = idUsuario;
    var pontuacaoVar = pontuacao;
    var minutosVar = minutos;
    var segundosVar = segundos;
    var nomeVar = nomeUsuario;

    // Enviando o valor da nova input
    fetch("/login/resultadoQuiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            idServer: idVar,
            pontuacaoServer: pontuacaoVar,
            minutosServer: minutosVar,
            segundosServer: segundosVar,
            nomeServer: nomeVar,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);
        if (resposta.ok) {

            console.log("Dados do quiz cadastrados!!!")

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
    });

    return false;

}

