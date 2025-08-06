import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    status: 'ok',
    service: 'web3icons-api',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  })
})

export default app