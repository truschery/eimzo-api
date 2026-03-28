import {Pkcs7, Eimzo} from "../types";


export default class Pkcs7Plugin implements Pkcs7.Plugin
{

    client: Eimzo.Client

    constructor(client: Eimzo.Client)
    {
        this.client = client
    }

    createPkcs7(base64: string, keyId: string, detached: Pkcs7.isDetached): Promise<Pkcs7.CreatePkcs7Response>
    {
        return this.client.send<Pkcs7.CreatePkcs7Response>({plugin: "pkcs7", name: "create_pkcs7", arguments: [base64, keyId, detached]})
    }

    getAttachedInfo(pkcs7_64: string, tsid: string = ''): Promise<Pkcs7.GetAttachedInfo>
    {
        return this.client.send({
            plugin: "pkcs7",
            name: "get_pkcs7_attached_info",
            arguments: [
                pkcs7_64,
                tsid
            ],
        })
    }

    getDetachedInfo(data_64: string, pkcs7_64: string, tsid: string = ''): Promise<Pkcs7.GetDetachedInfo>
    {
        return this.client.send({
            plugin: "pkcs7",
            name: "get_pkcs7_detached_info",
            arguments: [
                data_64,
                pkcs7_64,
                tsid
            ],
        })
    }

}