import Client from './Client'

describe('Client websocket adapter', () => {
    let client: Client
    
    beforeEach(() => {
        client = new Client()
    })

    test('should connect to eimzo', async () => {
        const connected = await client.connect()
        expect(connected).toBe(true)
    })

    test('should send data to eimzo', async () => {
        const result = await client.send({ name: 'version' })
        expect(result).toHaveProperty('status')
        expect(result).toHaveProperty('success')
    })

    test('should onlySend data to eimzo', async () => {
        const result = await client.onlySend({ name: 'version' })
        expect(result).toBe(true)
    })
    
})