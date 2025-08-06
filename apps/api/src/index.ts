import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { config } from 'dotenv'

import healthRoutes from './routes/health'
import iconRoutes from './routes/icons'
import metadataRoutes from './routes/metadata'

config({ path: '../../.env.local' })

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'X-API-Key'],
}))

app.route('/health', healthRoutes)
app.route('/v1/icons', iconRoutes)
app.route('/v1/metadata', metadataRoutes)

app.notFound((c) => {
  return c.json({ error: 'Not found' }, 404)
})

app.onError((err, c) => {
  console.error(err)
  return c.json({ error: 'Internal server error' }, 500)
})

const port = process.env.PORT || 3001

export default {
  port,
  fetch: app.fetch,
}

console.log(`🚀 API server running on port ${port}`)