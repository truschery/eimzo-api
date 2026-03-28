import Client from "./Client";
import {
    PfxPlugin,
    Pkcs7Plugin,
} from '../plugins'

import { Eimzo } from '../types'
import TrustStore from "../plugins/TrustStore";
import TrustStoreJks from "../plugins/TrustStoreJks";

export default class EimzoInstance extends Client implements Eimzo.Instance
{
    pfx: PfxPlugin;
    pkcs7: Pkcs7Plugin;
    truststore: TrustStore;
    truststore_jks: TrustStoreJks

    constructor() {
        super()

        this.pfx = new PfxPlugin(this)
        this.pkcs7 = new Pkcs7Plugin(this)
        this.truststore = new TrustStore(this)
        this.truststore_jks = new TrustStoreJks(this)
    }

}