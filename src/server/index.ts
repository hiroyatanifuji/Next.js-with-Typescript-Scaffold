const dev: boolean = process.env.NODE_ENV !== 'production',
      port: number = dev ? 3000 : 8080,
      app = require('next')({dev}),
      handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = require('express')();

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
