import { createServer } from 'vite'

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    console.log('You are in production mode. Static assets will be served by Vercel.');
  } else {
    const server = await createServer({
      configFile: './vite.config.ts',
      server: {
        host: '0.0.0.0',
        port: 5000,
        allowedHosts: true
      }
    });

    await server.listen();
    console.log('Frontend server running on port 5000');
    server.printUrls();
  }
}

startServer();