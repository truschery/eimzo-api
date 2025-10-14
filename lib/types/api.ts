import { Eimzo } from "./eimzo";


export interface BaseEimzoApiResponse {
    success: boolean;
    status: number;
    reason: string | undefined;
}

/**
 *  Pfx Eimzo Api
 */
export namespace Pfx {
    export interface Plugin extends Eimzo.Plugin {
        listAllCertificates: () => Promise<ListAllCertificatesResponse>;
        loadKey: ( disk: string, path: string, name: string, alias: string ) => Promise<any>;
    }

    export interface Certificate {
        alias: string;
        disk: string;
        path: string;
        name: string;
    }

    export interface ListAllCertificatesResponse extends BaseEimzoApiResponse {
        certificates: Certificate[];
    }

    export interface LoadKeyResponse extends BaseEimzoApiResponse {
        keyId: string;
        type: string;
    }
}


export namespace Pkcs7 {
    export type isDetached = 'yes' | 'no' | '';

    export interface Plugin extends Eimzo.Plugin {
        createPkcs7: (base64: string, keyId: string, detached: isDetached) => Promise<CreatePkcs7Response>
    }

    export interface CreatePkcs7Response extends BaseEimzoApiResponse {
        pkcs7_64: string;
        signer_serial_number: string;
        signature_hex: string;
    }
}