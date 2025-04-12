const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Function to find an available port
const findAvailablePort = async (startPort) => {
  let port = startPort;
  while (port < startPort + 10) {
    try {
      await new Promise((resolve, reject) => {
        const server = createServer();
        server.listen(port, () => {
          server.close(() => resolve(port));
        });
        server.on('error', () => {
          port++;
          resolve(null);
        });
      });
      return port;
    } catch (err) {
      port++;
    }
  }
  throw new Error('No available ports found');
};

// Graceful shutdown handler
const gracefulShutdown = (server) => {
  return (signal) => {
    console.log(`${signal} received. Shutting down gracefully...`);
    server.close(() => {
      console.log('Process terminated');
      process.exit(0);
    });
  };
};

app.prepare().then(async () => {
  const port = await findAvailablePort(3000);
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Handle graceful shutdown
  const shutdown = gracefulShutdown(server);
  process.on('SIGTERM', shutdown('SIGTERM'));
  process.on('SIGINT', shutdown('SIGINT'));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}); 