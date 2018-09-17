const axios = require('axios');
const name = require('./../src/Sebas');

describe('Mis primeros pasos en Jest', () => {
    test('same name', () => {
        let name = 'hello world';
        expect(name).toEqual('hello world');
    });

    test('asincronia google', async () => {

        axios.get('https://www.google.es')
            .then(function (response) {
                console.log('Success Google');
            })
            .catch(function (error) {
                // handle error
                console.log("ha petado google");
            });
        console.log('Lanzado Google');

        /*let response =  await axios.get('https://www.google.es');

        console.log(response);*/

    });

    test('asincronia atrapalo', () => {
        console.log('Lanzada atrapalo')
        axios.get('https://www.atrapalo.com')
            .then(function (response) {
                console.log('Success atrapalo');
            })
            .catch(function (error) {
                // handle error
                console.log("ha petado atrapalo");
            })
    });

    test('call function', () => {
        let nombre = name.getName();
        expect(nombre).toEqual('sebas hacker');
    });

});
