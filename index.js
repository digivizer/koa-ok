const RESPONSE_BODY = 'OK'

module.exports = function(okPath) {
  return async function(ctx, next) {
    if (ctx.path == okPath) {
      ctx.body = RESPONSE_BODY
    } else {
      await next()
    }
  }
}
