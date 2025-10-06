import Client from '../Client'

export default class PfxPlugin
{

    constructor(client)
    {
        this.client = client ?? new Client
    }

    async listAllCertificates()
    {
        return this.client.send({ plugin: "pfx", name: "list_all_certificates" })
    }
}