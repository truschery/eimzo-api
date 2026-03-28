import {type Clientable, Pluginable} from "../types";

export default class TrustStore {

    client: Clientable

    constructor(client: Clientable)
    {
        this.client = client
    }

    listTrustStore(tsid?: string)
    {
        return this.client.send({
            plugin: "truststore",
            name: "list_truststore",
            arguments: [
                tsid
            ],
        })
    }

}