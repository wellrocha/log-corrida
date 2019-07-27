"use strict";

const assert = require('chai').assert;
const obter_log_corrida = require('../../../src/services/obter_log_corrida')
const fake_log_corrida = require('../fakes/fake_log_corrida')

describe('obter_log_corrida.js', async () => {
    it('ao obter o log da corrida deve retornar todas as informações', async ()  => {
        const result = await obter_log_corrida.execute()
        const expected = fake_log_corrida
        assert.deepEqual(expected, result);
    });
});
