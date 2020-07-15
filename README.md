# Desafio stream hastag twitter

Neste desafio tem como intuito de buscar hashtag junto ao Twitter apos gerar uma notificação numa pagina web utilizando tecnologia ReactJS (frontend) e NodeJS (backend).

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/FernandoGurgel/desafio-stream-hastag-twitter">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/FernandoGurgel/desafio-stream-hastag-twitter">

  <img alt="node" src="https://img.shields.io/badge/node-10.15.0-blue">

  <img alt="npm" src="https://img.shields.io/badge/npm-v6.14.0-red">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/FernandoGurgel/desafio-stream-hastag-twitter/stargazers">

  <img alt="Stargazers" src="https://img.shields.io/github/stars/FernandoGurgel/desafio-stream-hastag-twitter?style=social">
  </a>
</p>


## Backend

### Gerar chave ao Twitter

No link a baixo leva ao site Twitter API para criação da chave de acesso. Chaves necessária para utilização para a busca de tweets.

[Twitter create app](https://developer.twitter.com/en/docs/basics/apps/guides/the-app-management-dashboard)

Com a posse das chaves é necessário criar o arquivo ".env" Como exemplo a baixo.

```shell
consumer_key=<my-consumer_key>
consumer_secret=<my-consumer_secret>
bearer_token=<my-bearer_token>
```

Para executa o projeto é necessário executar o comando.

```exec
$ npm run dev:server ou yarn dev:server
```

Para ajudar realizar os testes seguem um link para a ferramenta insomnia.

<p align="center">
  <a href="https://raw.githubusercontent.com/FernandoGurgel/desafio-stream-hastag-twitter/master/Insomnia_2020-07-14.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

