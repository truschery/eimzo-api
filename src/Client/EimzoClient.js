import Client from "./Client";
import ApiKeys from "../Helpers/ApiKeys"

export default class EimzoClient extends Client
{
    minEimzoVersion = 450

    constructor(
        apiKeys
    )
    {
        super()
        new ApiKeys(apiKeys);
    }

    async send(data)
    {
        if(!super.connected)
        {
            await super.connect()
            super.connected = true
            await this.checkVersion()
            await this.installApiKeys()
        }
        
        return super.send(data)
    }

    async checkVersion()
    {
        const data = await super.send({ name: 'version' })

        if(!data.success) throw new Error('[Eimzo Api] Eimzo is not installed')

        if(!data.major || !data.minor) throw new Error('[Eimzo Api] undefined E-IMZO version')

        const installedVersion = parseInt(data.major) * 100 + parseInt(data.minor)

        if(installedVersion <= this.minEimzoVersion){
            throw new Error('[Eimzo Api] E-IMZO version is not actual, please install 4.5 or more')
        }
    }

    async installApiKeys()
    {
        return super.onlySend({ name: 'apikey', arguments: ApiKeys.all() })
    }
}