# Koa Ok

Koa middleware providing a health check ping route that always returns a `200 OK` response.

## Install

```
npm install --save koa-ok
```

## API

```js
ok(String path)
```

Returns an async function that plugs into a Koa middleware stack.

The `path` argument accepts a `String` that defines the URL path to match on. This must include a leading `/` character (eg: `/ping`, `/_health`).

Any requests matching the `path` will return a `text/plain` response with the body set to `OK`. This will also halt further processing of the middleware chain.

## Usage

```js
const koa = require('koa')
const ok = require('koa-ok')

const app = new koa()

app.use(ok('/ping'))

app.listen(3000)
```

## License

Copyright 2018 Digivizer Pty Ltd. See the `LICENSE` file included with this software distribution.
