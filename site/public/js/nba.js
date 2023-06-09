const nomeJogador = document.getElementById("nomeJogador")

const jogador02 = document.getElementById("nomeJogador2")

const button = document.getElementById("button")

const temporadaJogador1 = document.getElementById("season1")

const temporadaJogador2 = document.getElementById("season2")

function Buscar1() {

    var jogadorBuscado1 = nomeJogador1.value

    var temporadaBuscada = season1.value

    if (temporadaBuscada == null || temporadaBuscada == undefined || temporadaBuscada == '') {

        alert("Confira o campo de temporada!")

    } else {

        fetch(`https://www.balldontlie.io/api/v1/players?per_page=500&search=${jogadorBuscado1}`).then(resposta => {
            return resposta.json()
        }).then(data => {

            console.log(data.data[0].team.full_name + "Time")

            box_search.innerHTML = "";

            for (var i = 0; i < data.data.length; i++) {

                var idplayer = data.data[i].id

                var firstNameP = (data.data[i].first_name);
                var lastNameP = (data.data[i].last_name);
                var currentTeam = (data.data[i].team.full_name)

                var fullname = (firstNameP + " " + lastNameP);

                console.log(fullname)

                // Caractere de escape

                box_search.innerHTML += `<li onclick="BuscarPlayer1(${idplayer}, \'${fullname}\', \'${currentTeam}\');BuscarP1(\'${fullname}\')" class="item_search_ul">${firstNameP} ${lastNameP}</li>`
            }

            if (box_search.style.display == 'none') {
                box_search.style.display = 'block'

            } else if (box_search.style.display == 'block') {

                box_search.style.display = 'none'

            } else {
                console.log("Erro ao retirar a box_search;")
            }
            console.log("Cheguei ate aqui!")

        })

    }

}

function BuscarPlayer1(idplayer, fullname, currentTeam) {

    var temporada1 = temporadaJogador1.value

    fetch(`https://www.balldontlie.io/api/v1/season_averages?season=${temporada1}&player_ids[]=${idplayer}`).then(resposta => {
        return resposta.json()
    }).then(data => {

        console.log(data)

        infos_card1.innerHTML = `

                <ul class="ul-infos-card">
                    <li>Nome: ${fullname}</li>
                    <li>Time atual: ${currentTeam}</li>   
                    <li>Season: ${data.data[0].season}</li>
                    <li>Rebotes: ${data.data[0].reb}</li>
                    <li>Assistencias: ${data.data[0].ast}</li>
                    <li>Roubos de Bola: ${data.data[0].stl}</li>
                    <li>Blocks: ${data.data[0].blk}</li>
                    <li>Turnovers: ${data.data[0].turnover}</li>
                    <li>Minutos: ${data.data[0].min}</li>
                    <span class="pontos-card">
                        <li>Pontos: ${data.data[0].pts}</li>
                    </span>
                </ul>
                `
    })

}


function Buscar2() {

    var jogadorBuscado2 = nomeJogador2.value

    var temporadaBuscada = season2.value

    if (temporadaBuscada == null || temporadaBuscada == undefined || temporadaBuscada == '') {

        alert("Confira o campo de temporada!")

    } else {

        fetch(`https://www.balldontlie.io/api/v1/players?per_page=500&search=${jogadorBuscado2}`).then(resposta => {
            return resposta.json()
        }).then(data => {

            box_search2.innerHTML = "";

            for (var i = 0; i < data.data.length; i++) {

                var idplayer = data.data[i].id
                console.log("Entrei")

                var firstNameP = (data.data[i].first_name);
                var lastNameP = (data.data[i].last_name);

                var currentTeam = (data.data[i].team.full_name)

                var fullname = (firstNameP + " " + lastNameP);

                console.log(fullname)

                box_search2.innerHTML += `<li onclick="BuscarPlayer2(${idplayer}, \'${fullname}\', \'${currentTeam}\');BuscarP2(\'${fullname}\')" class="item_search_ul">${firstNameP} ${lastNameP}</li>`
            }

            if (box_search2.style.display == 'none') {
                box_search2.style.display = 'block'

            } else if (box_search2.style.display == 'block') {

                box_search2.style.display = 'none'

            } else {
                console.log("Erro ao retirar a box_search;")
            }

            console.log("Cheguei ate aqui!")

        })

    }



}

function BuscarPlayer2(idplayer, fullname, currentTeam) {

    var temporada2 = temporadaJogador2.value

    fetch(`https://www.balldontlie.io/api/v1/season_averages?season=${temporada2}&player_ids[]=${idplayer}`).then(resposta => {
        return resposta.json()
    }).then(data => {

        console.log(data)

        infos_card2.innerHTML = `

                <ul class="ul-infos-card">
                    <li>Nome: ${fullname}
                    <li>Time atual: ${currentTeam}</li>
                    <li>Season: ${data.data[0].season}</li>
                    <li>Rebotes: ${data.data[0].reb}</li>
                    <li>Assistencias: ${data.data[0].ast}</li>
                    <li>Roubos de Bola: ${data.data[0].stl}</li>
                    <li>Blocks: ${data.data[0].blk}</li>
                    <li>Turnovers: ${data.data[0].turnover}</li>
                    <li>Minutos: ${data.data[0].min}</li>
                    <span class="pontos-card">
                        <li>Pontos: ${data.data[0].pts}</li>
                    </span>
                </ul>
                `
    })

}