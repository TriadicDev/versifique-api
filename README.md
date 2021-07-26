# versifique-api

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Configuração de Ambientes

Os ambientes de acesso do aplicativo estão definidos na pasta ENVIRONMENTS.

* .env.dev => Variáveis para conexão com ambiente de desenvolvimento.
* .env.prod => Variáveis para conexão com ambiente de produção.

Para selecionar o ambiente a ser utilizado, deve ser utilizado o comando que se refere ao nome do ambiente (dev, stage, prod), flexionando apenas a última palavra do comando:

    npm run env:dev
