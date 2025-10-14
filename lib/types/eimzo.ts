import { BaseEimzoApiResponse, Pfx, Pkcs7 } from "./api";


export namespace Eimzo {

    export interface Instance extends Client
    {  
        pfx: Pfx.Plugin,
        pkcs7: Pkcs7.Plugin
    }

    export interface Client
    {
        isConnected: boolean;
        send: <T extends BaseEimzoApiResponse>(data: any) => Promise<T>;
        onlySend: (data: any) => Promise<any>;
    }

    export interface Plugin
    {
        client: Client;
    }

}