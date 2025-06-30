import { createServer } from 'vite'

const server = await createServer({
  configFile: './vite.config.ts',
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true
  }
})

await server.listen()
console.log('Frontend server running on port 5000')
server.printUrls()