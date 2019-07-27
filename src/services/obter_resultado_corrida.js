'use strict';

const obterNomePilotos = (logCorrida) => {
    const nomesPilotos = logCorrida.map((log ) => {
        return log.piloto.nome
    })

    const pilotos = [...new Set(nomesPilotos)]
    if (pilotos.length === 0) {
        throw new Error('Não foi encontrado pilotos no log para que seja feita a análise da corrida')
    }

    return pilotos
}

const obterTotalVoltas = (resumoCorrida) => {
    const quantidadeVoltasCompletadas = resumoCorrida.map((piloto) => {
        return piloto.quantidadeVoltasCompletadas
    })

    return Math.max.apply(null, quantidadeVoltasCompletadas)
}

const definirTempoTotalProva = (piloto) => {
    const [segundos, milissegundos] = piloto.tempoTotalProvaEmSegundos.split('.')

    const minutos = parseInt(segundos / 60)

    piloto.tempoTotalProva = `${minutos}:${segundos % 60}.${milissegundos}`

    delete piloto.tempoTotalProvaEmSegundos
}

const obterDetalhesCorrida = (pilotos, logCorrida) => {
    return pilotos.map((piloto) => {
        const resultadoCorridaPiloto = logCorrida.filter((log) => {
            return log.piloto.nome === piloto
        })

        const tempoTotalEmSegundos = resultadoCorridaPiloto.map((log) => {
            const [minutos, segundos, milissegundos] = log.tempoVolta.split(/[:\.]/)
            return (((minutos * 60) + parseInt(segundos, 10)) + (parseInt(milissegundos, 10) / 1000))
        }).reduce((previous, current) => {
            return (parseFloat(previous) + parseFloat(current)).toFixed(3)
        })

        const quantidadeVoltas = resultadoCorridaPiloto.map((corridaPiloto) => {
            return corridaPiloto.numeroVolta
        })

        return {
            nomePiloto: resultadoCorridaPiloto[0].piloto.nome,
            codigoPiloto: resultadoCorridaPiloto[0].piloto.codigo,
            tempoTotalProvaEmSegundos: tempoTotalEmSegundos,
            quantidadeVoltasCompletadas: Math.max.apply(null, quantidadeVoltas)
        }
    }).sort((previous, current) => {
        return previous.tempoTotalProvaEmSegundos - current.tempoTotalProvaEmSegundos;
    })
}

const obterResumoCorrida = (pilotos, logCorrida) => {
    const resumoCorrida = obterDetalhesCorrida(pilotos, logCorrida)
    const totalVoltas = obterTotalVoltas(resumoCorrida)

    let index = 1;
    return resumoCorrida.map((piloto) => {
        if (piloto.quantidadeVoltasCompletadas === totalVoltas) {
            piloto.posicaoChegada = index++
        } else {
            piloto.posicaoChegada = '-'
        }

        definirTempoTotalProva(piloto)
        return piloto
    })

}

module.exports = {
    execute: (logCorrida) => {
        const pilotos = obterNomePilotos(logCorrida)
        return obterResumoCorrida(pilotos, logCorrida)
    }
}
