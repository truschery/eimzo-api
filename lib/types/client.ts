import {BaseEimzoApiResponse} from "./api";


export interface Clientable
{
    isConnected: boolean;
    send: <T extends BaseEimzoApiResponse>(data: any) => Promise<T>;
    onlySend: (data: any) => Promise<any>;
}