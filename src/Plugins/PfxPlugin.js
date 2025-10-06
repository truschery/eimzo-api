import EimzoClient from '../Client/EimzoClient'

export default class PfxPlugin
{
    client = new EimzoClient

    async listAllCertificates()
    {
        return eimzoApi.send({ plugin: "pfx", name: "list_all_certificates" })
    }
}