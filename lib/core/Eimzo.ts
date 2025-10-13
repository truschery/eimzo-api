import Client from "./Client";
import {
    PfxPlugin,
    Pkcs7Plugin,
} from '../plugins'

export default class Eimzo extends Client
{
    pfx: PfxPlugin;
    pkcs7: Pkcs7Plugin;

    constructor() {
        super()

        this.pfx = new PfxPlugin(this)
        this.pkcs7 = new Pkcs7Plugin(this)
    }

}