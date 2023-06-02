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

var inputs = document.getElementById(`1`);
var button = document.getElementById("BotaoVerificar");

var pontuacao = 0;


button.addEventListener('click', (e) => {


    var respostaUser = inputTime.value

    for(var i = 0; i < teams.length; i++){

        var Time = document.getElementById(`nomeTime${i}`)
        if(respostaUser == ''){
            alert("campo vazio")

            return
        }

        if(teams[i].nomeTime.includes(respostaUser)){

            console.log("Correto!")
            Time.innerHTML = `${teams[i].nomeTime}`
            console.log(teams[i].nomeTime)
            respostaUser = '';
            pontuacao++
            pontos.innerHTML = pontuacao
            return
    
        } else {
    
            console.error("Errinho");
    
        }
    }




})

function Verificar() {

}