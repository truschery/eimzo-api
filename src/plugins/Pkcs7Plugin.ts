import {type Clientable, Pluginable} from "../types";
import {Pkcs7} from "../types";


export default class Pkcs7Plugin implements Pluginable, Pkcs7.Plugin
{

    client: Clientable

    constructor(client: Clientable)
    {
        this.client = client
    }

    createPkcs7(base64: string, keyId: string, detached: Pkcs7.isDetached): Promise<Pkcs7.CreatePkcs7Response>
    {
        return this.client.send<Pkcs7.CreatePkcs7Response>({plugin: "pkcs7", name: "create_pkcs7", arguments: [base64, keyId, detached]})
    }

}