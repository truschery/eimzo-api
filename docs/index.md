# Documentation @truschery/eimzo-api

Быстрый и легковесный пакет предназначенный для взаимодействия с API Eimzo на JavaScript.

## Содержание
- Установка
- API
- Интерфейсы

## Установка

### Install with npm
```js
npm install @truschery/eimzo-api@latest
```

Создать объект клиента для взаимодействия с API
```
import Eimzo from '@truschery/eimzo-api'

const client = new Eimzo
```

## API
Класс Eimzo позволяет обращаться к запросам Eimzo плагинам
### Pfx
#### Получить список всех сертификатов
> client.pfx.listAllCertificates(): Promise<Pfx.ListAllCertificatesResponse>
### Загрузить сертификат в Eimzo
> client.pfx.loadKey(disk: string, path: string, name: string, alias: string): Promise<Pfx.LoadKeyResponse>


### Pkcs7
#### Создать Pkcs7 подписав ключом
> createPkcs7(base64: string, keyId: string, detached: Pkcs7.isDetached): Promise<Pkcs7.CreatePkcs7Response>


## Interfaces
### Pfx
#### Pfx.Plugin
> Реализует API интерфес плагина Eimzo
#### Pfx.Certificate 
> Интерфейс сертификата Eimzo
#### Pfx.ListAllCertificatesResponse
> Интерфейс ответа при получении списка сертификатов
#### Pfx.LoadKeyResponse
> Интерфейс ответа при загрузке сертификата 

### Pkcs7
#### Pkcs7.isDetached
> Тип указывающий значение для создания Pkcs7
#### Pkcs7.Plugin
> Реализует API интерфес плагина Eimzo
#### Pkcs7.CreatePkcs7Response
> Интерфейс ответа при создании Pkcs7

