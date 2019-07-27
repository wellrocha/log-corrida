'use strict';

const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const os = require('os');

module.exports = {
    execute: async () => {
        let corrida = await readFile(__dirname + '/corrida.log', 'utf8')
        corrida = corrida.split(os.EOL)
        corrida.shift()

        return corrida.map((detalhePercursoPiloto) => {
            let conteudo = detalhePercursoPiloto.replace(/\s{2,}/g, '|')
            conteudo = conteudo.split('|')

            const [codigoPiloto, nomePiloto] = conteudo[1].split(' – ')
            return {
                hora: conteudo[0],
                piloto: {
                    nome: nomePiloto,
                    codigo: codigoPiloto
                },
                numeroVolta: parseInt(conteudo[2], 10),
                tempoVolta: conteudo[3],
                velocidadeMediaVolta: parseFloat(conteudo[4].replace(',', '.'))
            }
        })
    }
}
