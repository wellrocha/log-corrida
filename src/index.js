'use strict';

const logger = require('pino')({
    prettyPrint: true
})
const obterLogCorrida = require('./services/obter_log_corrida')
const obterResultadoCorrida = require('./services/obter_resultado_corrida')

main()
async function main() {
    try {
        logger.info('Log da Corrida')
        const logCorrida = await obterLogCorrida.execute()
        logger.info(logCorrida)

        logger.info('Resultado da Corrida')
        const resultadoCorrida = obterResultadoCorrida.execute(logCorrida)
        logger.info(resultadoCorrida)
    } catch (error) {
        logger.error('Ocorreu um erro inesperado')
        logger.error(error)
    }
}
