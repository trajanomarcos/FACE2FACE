const nomeJogador = document.getElementById("nomeJogador")

const button = document.getElementById("button")

function ofBuscar() {
    
    var jogadorBuscado1 = nomeJogador1.value
    var idplayer = 0

    fetch(`https://www.balldontlie.io/api/v1/players?per_page=500&search=${jogadorBuscado1}`).then(resposta => {
        return resposta.json()
    }).then(data => {
        

        for (var i = 0; i < data.data.length; i++) {

            idplayer = data.data[i].id;
            var firstNameP = data.data[i].first_name;
            var lastNameP = data.data[i].last_name;

            datalist.innerHTML += `<option value="${data.data[i].id}-${firstNameP}-${lastNameP}">${firstNameP} ${lastNameP}</option>`
        }

    })
    
}

function SearchPlayer() {

    // var nomePlayer = nomeJogador1.text
    var allItems = nomeJogador1.value.split("-");
    var idplayer = allItems[0];
    var first_name = allItems[1];
    var last_name = allItems[2];
    console.log(idplayer)

    fetch(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${idplayer}`).then(resposta => {
        return resposta.json()
    }).then(data => {

        console.log(data)

        infos_card1.innerHTML = `

                <ul class="ul-infos-card">
                    <li>Nome: ${first_name} ${last_name}</li>
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

    var nomePlayer = allItems[1] + " " + allItems[2]
    BuscarP1(nomePlayer)

}


function ofBuscar2() {

    let jogadorBuscado2 = nomeJogador2.value

    let text = document.getElementById("p_text")

    fetch(`https://www.balldontlie.io/api/v1/players?search=${jogadorBuscado2}`).then(resposta => {
        return resposta.json()
    }).then(data => {
        console.log(idplayer)

        var idplayer = data.data[0].id;
        var pts = pts;
        var firstNameP = data.data[0].first_name;
        var lastNameP = data.data[0].last_name;

        if (idplayer != null && idplayer != undefined) {

            fetch(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${idplayer}`).then(resposta => {
                return resposta.json()
            }).then(data => {

                console.log(data)

                infos_card2.innerHTML = `

                    <ul class="ul-infos-card">
                        <li>Nome: ${firstNameP} ${lastNameP}</li>
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

        } else {

            alert("Nome do jogador nao encontrado" + idplayer)

        }

    })
}