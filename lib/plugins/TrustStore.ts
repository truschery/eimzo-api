import {Eimzo} from "../types";

export default class TrustStore {

    client: Eimzo.Client

    constructor(client: Eimzo.Client)
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