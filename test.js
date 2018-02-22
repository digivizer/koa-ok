const test = require('ava')
const ok = require('./index')

test('default path and response', t => {
  const ctx = {
    path: '/ping'
  }

  ok('/ping')(ctx, () => t.fail())

  t.is(ctx.body, 'OK')
})

test('skip to next', t => {
  const ctx = {
    path: '/'
  }

  ok()(ctx, () => t.pass())
})
