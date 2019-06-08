const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/post/:id', (req, res) => {
        if (req.headers.host === 'my-app.com') {
          app.setAssetPrefix('http://cdn.com/myapp');
        } else {
          app.setAssetPrefix('');
        }
        const actualPage = '/post';
        const queryParams = { id: req.params.id };
        console.log("server render");
        app.render(req, res, actualPage, queryParams);
      });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });