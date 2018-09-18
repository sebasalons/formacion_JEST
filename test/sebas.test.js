const axios = require('axios');
const name = require('./../src/Sebas');

describe('Mis primeros pasos en Jest', () => {
    test('same name', () => {
        let name = 'hello world';
        expect(name).toEqual('hello world');
    });

    test('asincronia google', async (done) => {
        const response = await axios.get('https://www.google.es');
        expect(response.data.length).toBeGreaterThan(1);
        console.log('respuesta google');
        done();
    });

    test('asincronia atrapalo', async(done) => {
        console.log('Lanzada atrapalo');

        const response = await axios.get('https://www.atrapalo.com');
        expect(response.data.length).toBeGreaterThan(0);
        console.log('respuesta atrapalo');
        done();
    });

    test('call function', () => {
        let nombre = name.getName();
        expect(nombre).toEqual('sebas hacker');
    });

});
