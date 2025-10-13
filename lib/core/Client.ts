import {BaseEimzoApiResponse, Clientable} from "../types";


export default class Client implements Clientable
{
    socket: null|WebSocket          = null
    isConnected: boolean            = false
    timeout: number                 = 2000

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

    async connect(): Promise<boolean>
    {
        if(this.isConnected) return Promise.resolve(true)
        return new Promise((resolve, reject) => {
            this.socket = new WebSocket(this.url)

            this.socket.onopen = () => {
                this.isConnected = true
                resolve(true)
            }

            this.socket.onclose = e => {
                this.isConnected = false

                if(e.code === 1006){
                    reject({
                        message: 'Failed connect to Eimzo',
                        code: 1006,
                    })
                }

                if(![
                    1000,
                    1001,
                ].includes(e.code)){
                    reject({
                        message: `Failed connect to WebSocket`,
                        code: e.code,
                    })
                }
            }
        })
    }

    async send<T extends BaseEimzoApiResponse>(data: object): Promise<T>
    {
        return new Promise(async (resolve, reject) => {
            if(!this.isConnected) await this.connect()

            if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
                reject({
                    message: 'WebSocket not connected',
                    code: null
                })
                return
            }
            let handeled = false
            
            const handlerMessage = (event: any) => {
                const response: T = JSON.parse(event.data)

                // @ts-ignore
                this.socket.removeEventListener('message', handlerMessage)
                handeled = true


                !response.success ? reject(response) : resolve(response)
            }

            this.socket.addEventListener('message', handlerMessage)

            this.socket.send(JSON.stringify(data))

            setTimeout(() => {
                if(!handeled){
                    // @ts-ignore
                    this.socket.removeEventListener('message', handlerMessage)
                    reject({
                        message: `TimeoutError: Failed receive response`,
                        code: null,
                    })
                }
            }, this.timeout)
        })
    }

    async onlySend(data: any)
    {
        return new Promise(async (resolve, reject) => {
            if(!this.isConnected) await this.connect()

            if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
                reject(new Error('WebSocket not connected'))
                return
            }
            
            this.socket.send(JSON.stringify(data))
            resolve(true)
        })
    }


}