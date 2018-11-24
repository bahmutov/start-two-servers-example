const runServer = (label, port = 9000) => {
  const http = require('http');
  const server = http.createServer((req, res) => {
    // console.log(req.method)
    if (req.method === 'GET') {
      console.log('%s received GET request to %s', label, req.url)
      res.end('all good\n\n')
    } else {
      res.end();
    }
  });
  setTimeout(() => {
    server.listen(port)
    console.log('%s is listening at port %d', label, port)
    console.log('%s send SIGINT to exit server (usually Ctrl-C)', label)
    process.on('SIGINT', () => {
      console.log('%s has received SIGINT. Exiting.', label);
      server.close()
    })
  }, 5000)
  console.log('%s sleeping for 5 seconds before starting', label)
}

module.exports = { runServer }
