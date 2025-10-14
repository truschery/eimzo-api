# Documentation @truschery/eimzo-api

A fast and lightweight package designed to interact with the Eimzo API in JavaScript.

## Contents
- [Installation](#installation)
- [API](#api)
- [Interfaces](#interfaces)

## Installation

### Install with npm
```js
npm install @truschery/eimzo-api@latest
```

Create a client object for interacting with the API
```
import Eimzo from '@truschery/eimzo-api'

const client = new Eimzo
```

## API
The Eimzo class allows you to access Eimzo requests for plugins.
### Pfx
#### Get a list of all certificates
> client.pfx.listAllCertificates(): Promise<Pfx.ListAllCertificatesResponse>
### Load certificate to Eimzo
> client.pfx.loadKey(disk: string, path: string, name: string, alias: string): Promise<Pfx.LoadKeyResponse>
- disk: Pfx.Certificate.disk 
- path: Pfx.Certificate.path
- name: Pfx.Certificate.name 
- alias: Pfx.Certificate.alias 


### Pkcs7
#### Create Pkcs7 signed with certificate
> createPkcs7(base64: string, keyId: string, detached: Pkcs7.isDetached): Promise<Pkcs7.CreatePkcs7Response>
- base64: Base64 string 
- keyId: keyId is returned in the loadKey method
- detached: if is 'yes' = A PKCS7 document will be created without the source data attachment


## Interfaces
### Pfx
#### Pfx.Plugin
> Implements the API interface of the Eimzo plugin
#### Pfx.Certificate 
> Pfx certificate interface
#### Pfx.ListAllCertificatesResponse
> Response interface when receiving a list of certificates
#### Pfx.LoadKeyResponse
> Response interface when load a certificate 

### Pkcs7
#### Pkcs7.isDetached
> Type indicating detached value when creating Pkcs7
#### Pkcs7.Plugin
> Implements the API interface of the Eimzo plugin
#### Pkcs7.CreatePkcs7Response
> Response interface when creating Pkcs7

