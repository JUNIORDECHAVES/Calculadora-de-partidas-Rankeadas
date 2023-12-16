let nameHero = "rimuru"
let nivel = " "

calcularVitorias(100, 5)

function calcularVitorias(vitorias, derrotas) {
    let pontosDeVitoria = vitorias - derrotas
    ranking(pontosDeVitoria)
}
function ranking(pontosDeVitoria) {
    if (pontosDeVitoria <= 10) {
        nivel = "Ferro"
    }
    else if ((pontosDeVitoria >= 11) && (pontosDeVitoria <= 20)) {
        nivel = "Bronze"
    }
    else if ((pontosDeVitoria >= 21) && (pontosDeVitoria <= 50)) {
        nivel = "Prata"
    }
    else if ((pontosDeVitoria >= 51) && (pontosDeVitoria<= 80)) {
        nivel = "Ouro"
    }
    else if ((pontosDeVitoria >= 81) && (pontosDeVitoria <= 90)) {
        nivel = "Diamante"
    }
    else if ((pontosDeVitoria >= 91) && (pontosDeVitoria <= 100)) {
        nivel = "Lendário"
    }
    else {
        nivel = "imortal"
    }
    console.log(`O Herói ${nameHero} tem de saldo de ${pontosDeVitoria} está no nível de ${nivel}`)
}
