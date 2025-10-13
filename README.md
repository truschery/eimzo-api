# Eimzo API

[//]: # (### [English]&#40;&#41; [Russian]&#40;&#41;)

<p align="center">
    Lightweight package for interacting with the Eimzo API
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/@truschery/eimzo-api?style=flat-square)](https://www.npmjs.org/package/@truschery/eimzo-api)
[![install size](https://packagephobia.com/badge?p=@truschery/eimzo-api)](https://packagephobia.com/result?p=@truschery/eimzo-api)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@truschery/eimzo-api?style=flat-square)](https://bundlephobia.com/package/@truschery/eimzo-api@latest)
[![npm downloads](https://img.shields.io/npm/dm/@truschery/eimzo-api?style=flat-square)](https://npm-stat.com/charts.html?package=@truschery/eimzo-api)
[![Contributors](https://img.shields.io/github/contributors/truschery/eimzo-api?style=flat-square)](CONTRIBUTORS.md)

</div> 

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Example](#example)
- [API](#api)
- [Interfaces](#interfaces)
- [Contributors](#contributors)

## Features
- Connecting to the Eimzo application using WebSocket
- Implementing calls to the Eimzo API using Typescript

## Installation

Installing eimzo-api
```js
npm install @truschery/eimzo-api@latest
```

## Example
The package exports two classes:
- Client: creates a connection and allows you to send requests to Eimzo
- Eimzo: provides methods for interacting with API [Eimzo](https://e-imzo.soliq.uz)

```js
import Eimzo from "@truschery/eimzo-api"

const client = new Eimzo()

// Get a list of pfx certificates
const certificates = await client.pfx.listAllCertificates()

// ...
```

## API

### Pfx Plugin 
#### pfx.listAllCertificates()
#### pfx.loadKey(disk: string, path: string, name: string, alias: string)

### Pkcs7
#### pkcs7.createPkcs7(base64: string, keyId: string, detached: Pkcs7.isDetached)


## Interfaces 
...In the process...

## Contributors
...In the process...


