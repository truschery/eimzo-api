import {Eimzo} from "../types";


export default class TrustStoreJks {

    client: Eimzo.Client

    constructor(client: Eimzo.Client)
    {
        this.client = client
    }

    openTrustStore()
    {
        return this.client.send({plugin: "truststore-jks", name: "open_truststore"})
    }

}