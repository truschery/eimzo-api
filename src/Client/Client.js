

export default class Client 
{
    socket          = null
    connected       = false

    constructor()
    {
        if (!window?.WebSocket) throw new Error(`[Eimzo Api] Failed to find [WebSocket] class`)
    }

    get url()
    {
        const protocol = window.location.protocol.toLowerCase()
        const host = protocol === "https:" ? "wss://127.0.0.1:64443" : "ws://127.0.0.1:64646"

        return `${host}/service/cryptapi`
    }

    async connect()
    {
        if(this.connected) return Promise.resolve()
        return new Promise((resolve, reject) => {
            this.socket = new WebSocket(this.url)

            this.socket.onopen = () => {
                this.connected = true                   
                resolve()
            }
        
            this.socket.onerror = e => {
                this.connected = false
                throw new Error('[Eimzo Api] Websocket error: ', e)
                
            }

            this.socket.onclose = event => {
                this.connected = false

                if(e.code !== 1000){
                    throw new Error(`[Eimzo Api] Failed connect to WebSocket. Error Code: ${e.code}`)
                }
            }
        })
    }

    async send(data)
    {
        return new Promise(async (resolve, reject) => {
            if(!this.connected) await this.connect()

            if (this.socket.readyState !== WebSocket.OPEN) {
                reject(new Error('WebSocket not connected'))
                return
            }
            
            const handlerMessage = (event) => {
                const response = JSON.parse(event.data)
                
                this.socket.removeEventListener('message', handlerMessage)
                resolve(response)
            }

            this.socket.addEventListener('message', handlerMessage)

            this.socket.send(JSON.stringify(data))
        })
    }

    async onlySend(data)
    {
        return new Promise(async (resolve, reject) => {
            if(!this.connected) await this.connect()

            if (this.socket.readyState !== WebSocket.OPEN) {
                reject(new Error('WebSocket not connected'))
                return
            }
            
            this.socket.send(JSON.stringify(data))
            resolve()
        })
    }


}