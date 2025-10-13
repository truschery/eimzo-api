import Eimzo from './Eimzo'

describe('Eimzo API adapter', () => {
    let eimzo: Eimzo

    beforeEach(() => {
        eimzo = new Eimzo
    })

    test('Should has API properties', () => {
        expect(eimzo).toHaveProperty('pfx')
        expect(eimzo).toHaveProperty('pkcs7')
    })

})