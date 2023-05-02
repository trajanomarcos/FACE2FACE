const nomeJogador = document.getElementById("nomeJogador")

const button = document.getElementById("button")

function ofBuscar(){

    var jogadorBuscado1 = nomeJogador1.value

    fetch(`https://www.balldontlie.io/api/v1/players?search=${jogadorBuscado1}`).then(resposta => {
        return resposta.json()
    }).then(data => {
        console.log(idplayer)

        var idplayer = data.data[0].id;
        var pts = pts;
        var firstNameP = data.data[0].first_name;
        var lastNameP = data.data[0].last_name;


        if(idplayer != null && idplayer != undefined){

            fetch(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${idplayer}`).then(resposta =>{
            return resposta.json()
            }).then(data => {

                infos_card1.innerHTML = `

                    <ul class="ul-infos-card">
                        <li>Nome: ${firstNameP} ${lastNameP}</li>
                        <li>Season:${data.data[0].season}</li>
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

function ofBuscar2(){

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

        if(idplayer != null && idplayer != undefined){

            fetch(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${idplayer}`).then(resposta =>{
            return resposta.json()
            }).then(data => {

                infos_card2.innerHTML = `

                    <ul class="ul-infos-card">
                        <li>Nome: ${firstNameP} ${lastNameP}</li>
                        <li>Season:${data.data[0].season}</li>
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


