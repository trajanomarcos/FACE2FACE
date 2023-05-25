const nomeJogador1 = document.getElementById("nomeJogador1");
const nomeJogador2 = document.getElementById("nomeJogador2");

function BuscarP1(nome){

    var jogadorBuscado2 = nome;

    const url = "./js/arquivo.json";

    fetch(url)
        .then(response => response.json()) 
        .then(data => {

            function AcharJogador(name) {

                var contador = 0;
                var encontrado = false;

                while (contador < data.players.length) {

                    if (String(data.players[contador].name).toLowerCase() == name.toLowerCase()) {

                        var imgUrl = data.players[contador].imgURL

                        encontrado = true;

                        top_card1.innerHTML = `<img src="${imgUrl}" style="width:250px; height:180px"><br>`

                        // console.log(typeof data.players[contador].name)

                        break;

                    }

                    contador++;

                }

                if (!encontrado) {

                    alert("Jogador nao encontrado")
                }

            }

            console.log(AcharJogador(jogadorBuscado2) + " Imagem");
        })

}
    
function BuscarP2(nome){

    var jogadorBuscado2 = nome;

    const url = "./js/arquivo.json";

    fetch(url)
        .then(response => response.json()) 
        .then(data => {

            function AcharJogador(name) {

                var contador = 0;
                var encontrado = false;

                while (contador < data.players.length) {

                    if (String(data.players[contador].name).toLowerCase() == name.toLowerCase()) {

                        var imgUrl = data.players[contador].imgURL

                        encontrado = true;

                        top_card2.innerHTML = `<img src="${imgUrl}" style="width:250px; height:180px"><br>`

                        // console.log(typeof data.players[contador].name)

                        break;

                    }

                    contador++;

                }

                if (!encontrado) {

                    alert("Jogador nao encontrado")
                }

            }

            console.log(AcharJogador(jogadorBuscado2) + " Imagem");
        })

}

