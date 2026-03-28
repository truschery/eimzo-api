import Eimzo from './Eimzo'

describe('Eimzo API adapter', () => {
    let eimzo: Eimzo

    beforeEach(() => {
        eimzo = new Eimzo
    })

    test('Should has API properties', () => {
        expect(eimzo).toHaveProperty('pfx')
        expect(eimzo).toHaveProperty('pkcs7')
        expect(eimzo).toHaveProperty('truststore')
        expect(eimzo).toHaveProperty('truststore_jks')
    })

})