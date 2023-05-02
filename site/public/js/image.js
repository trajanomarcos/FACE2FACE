
const nomeJogador1 = document.getElementById("nomeJogador1");
const nomeJogador2 = document.getElementById("nomeJogador2");

function BuscarP1(){

    let jogadorBuscado = nomeJogador1.value;
    var text = document.getElementById("p_text");

    // Definindo o arquivo JSON a ser lido
    const url = "../js/arquivo.json";

    // Fazendo uma requisição HTTP para o arquivo JSON usando o método fetch()
    fetch(url)
        .then(response => response.json()) // Convertendo a resposta em um objeto JSON
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

            console.log(AcharJogador(jogadorBuscado) + " Imagem");
        })

}
    
function BuscarP2(){

    var jogadorBuscado2 = nomeJogador2.value;

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

