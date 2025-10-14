import Client from "./Client";
import {
    PfxPlugin,
    Pkcs7Plugin,
} from '../plugins'

import { Eimzo } from '../types'

export default class EimzoInstance extends Client implements Eimzo.Instance
{
    pfx: PfxPlugin;
    pkcs7: Pkcs7Plugin;

    constructor() {
        super()

        this.pfx = new PfxPlugin(this)
        this.pkcs7 = new Pkcs7Plugin(this)
    }

}