"use strict";

const assert = require('chai').assert;
const obter_resultado_corrida = require('../../../src/services/obter_resultado_corrida')
const fake_log_corrida = require('../fakes/fake_log_corrida')
const fake_resultado_corrida = require('../fakes/fake_obter_resultado_corrida')

describe('obter_resultado_corrida.js', () => {
    it('ao obter o resultado da corrida deve retornar todas as informações', async ()  => {
        const result = await obter_resultado_corrida.execute(fake_log_corrida)
        const expected = fake_resultado_corrida
        assert.deepEqual(expected, result);
    });

    it('dado um parâmetro inválido para obtencao do resultado da corrida deve retornar erro', async ()  => {
        try {
            await obter_resultado_corrida.execute({x: 20, y: 10})
            throw new Error('Erro desconhecido no teste obter_resultado_corrida_test.js')
        } catch (error) {
            const expected = 'logCorrida.map is not a function'
            assert.equal(expected, error.message)
        }
    });

    it('dado um array para obtencao do resultado da corrida deve retornar erro', async ()  => {
        try {
            await obter_resultado_corrida.execute([])
            throw new Error('Erro desconhecido no teste obter_resultado_corrida_test.js')
        } catch (error) {
            const expected = 'Não foi encontrado pilotos no log para que seja feita a análise da corrida'
            assert.equal(expected, error.message)
        }
    });
});
