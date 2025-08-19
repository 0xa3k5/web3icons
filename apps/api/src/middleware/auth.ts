import { Context, Next } from 'hono'
import { validateApiKey, checkRateLimit, logApiUsage } from '../lib/api-keys'

export async function authMiddleware(c: Context, next: Next) {
  const startTime = Date.now()
  const apiKey = c.req.header('X-API-Key')
  const userAgent = c.req.header('User-Agent')
  const endpoint = c.req.path
  const method = c.req.method

  if (!apiKey) {
    return c.json(
      {
        error: 'API key required',
        message: 'Include your API key in the X-API-Key header',
      },
      401,
    )
  }

  const validApiKey = await validateApiKey(apiKey)
  if (!validApiKey) {
    return c.json(
      {
        error: 'Invalid API key',
        message: 'The provided API key is invalid or inactive',
      },
      401,
    )
  }

  const rateLimitResult = await checkRateLimit(validApiKey.id)

  c.header('X-RateLimit-Limit', rateLimitResult.limit.toString())
  c.header('X-RateLimit-Remaining', rateLimitResult.remaining.toString())
  c.header('X-RateLimit-Reset', rateLimitResult.resetAt)

  if (!rateLimitResult.allowed) {
    const responseTime = Date.now() - startTime

    await logApiUsage(
      validApiKey.id,
      endpoint,
      method,
      responseTime,
      0,
      429,
      userAgent,
    )

    return c.json(
      {
        error: 'Rate limit exceeded',
        message: `You have exceeded your rate limit of ${rateLimitResult.limit} requests per day`,
        limit: rateLimitResult.limit,
        remaining: rateLimitResult.remaining,
        resetAt: rateLimitResult.resetAt,
      },
      429,
    )
  }

  c.set('apiKey', validApiKey)
  c.set('startTime', startTime)

  await next()

  const responseTime = Date.now() - startTime
  const responseSize = c.res.headers.get('Content-Length')
    ? parseInt(c.res.headers.get('Content-Length')!)
    : 0

  await logApiUsage(
    validApiKey.id,
    endpoint,
    method,
    responseTime,
    responseSize,
    c.res.status,
    userAgent,
  )
}
