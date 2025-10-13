import type {
    Pluginable,
    Clientable,
    Pfx
} from "../types";

export default class PfxPlugin implements Pluginable, Pfx.Plugin
{

    client: Clientable

    constructor(client: Clientable)
    {
        this.client = client
    }

    async listAllCertificates(): Promise<Pfx.ListAllCertificatesResponse>
    {
        return this.client.send<Pfx.ListAllCertificatesResponse>({ plugin: "pfx", name: "list_all_certificates" })
    }

    async loadKey(disk: string, path: string, name: string, alias: string): Promise<Pfx.LoadKeyResponse>
    {
        return this.client.send<Pfx.LoadKeyResponse>({
            plugin: "pfx",
            name: "load_key",
            arguments: [
                disk,
                path,
                name,
                alias
            ]
        })
    }
}