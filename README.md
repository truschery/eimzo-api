# Eimzo API

[//]: # (### [English]&#40;&#41; [Russian]&#40;&#41;)


<div align="center">
  <h1>Eimzo API</h1>
  <a href="https://www.npmjs.org/package/@truschery/eimzo-api"><img src="https://img.shields.io/npm/v/@truschery/eimzo-api?style=flat-square" /></a>
  <a href="https://packagephobia.com/result?p=@truschery/eimzo-api"><img src="https://packagephobia.com/badge?p=@truschery/eimzo-api" /></a>
  <a href="https://bundlephobia.com/package/@truschery/eimzo-api@latest"><img src="https://img.shields.io/bundlephobia/minzip/@truschery/eimzo-api?style=flat-square" /></a>
  <a href="https://npm-stat.com/charts.html?package=@truschery/eimzo-apit"><img src="https://img.shields.io/npm/dm/@truschery/eimzo-api?style=flat-square" /></a>
  <br />
  <br />
  <a href="#features">Features</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="#installation">Installation</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="#documentation">Docs</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="#example">Example</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="#license">License</a>
  <br />
  <hr />
</div>


## Features
Lightweight package for interacting with the Eimzo API:
- Connecting to the Eimzo application using WebSocket
- Implementing calls to the Eimzo API using Typescript

## Installation

### Install with npm
```js
npm install @truschery/eimzo-api@latest
```

## Documentation
To view the complete documentation for the package, you can visit [Docs](docs/index.md)

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
To see more, you can visit the page [Docs](docs/index.md)


## License
This package is distributed under the [MIT](LICENSE) license.





