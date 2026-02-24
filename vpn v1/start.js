const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const root = process.cwd();

const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function safePath(urlPath) {
  const sanitized = urlPath.split('?')[0].replace(/\/+/, '/');
  const p = path.normalize(path.join(root, sanitized));
  if (!p.startsWith(root)) return null;
  return p;
}

const server = http.createServer((req, res) => {
  try {
    let reqPath = req.url === '/' ? '/dashboard.html' : req.url;
    const filePath = safePath(reqPath);
    if (!filePath) {
      res.writeHead(400);
      return res.end('Bad request');
    }

    fs.stat(filePath, (err, stats) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('Not found');
      }

      if (stats.isDirectory()) {
        return fs.readFile(path.join(filePath, 'index.html'), (er, data) => {
          if (er) { res.writeHead(404); return res.end('Not found'); }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        });
      }

      const ext = path.extname(filePath).toLowerCase();
      const type = mime[ext] || 'application/octet-stream';
      fs.createReadStream(filePath).on('open', () => {
        res.writeHead(200, { 'Content-Type': type });
      }).on('error', () => {
        res.writeHead(500);
        res.end('Server error');
      }).pipe(res);
    });
  } catch (e) {
    res.writeHead(500);
    res.end('Server error');
  }
});

server.listen(port, () => {
  console.log(`Static server running at http://localhost:${port}/`);
  console.log('Serving files from', root);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception', err);
});
