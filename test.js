const test = require('ava')
const ok = require('./index')

test('response body', t => {
  const ctx = {
    path: '/ping'
  }

  ok('/ping')(ctx, () => {})

  t.is(ctx.body, 'OK')
})

test('skip to next', t => {
  const ctx = {
    path: '/'
  }

  ok('/ping')(ctx, () => t.pass())
})
