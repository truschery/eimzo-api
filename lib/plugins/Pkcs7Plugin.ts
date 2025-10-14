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

}