const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
// const redis = require('redis');
// const client = redis.createClient();

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser());

    server.get('/post/(:id).html', (req, res) => {
      if (req.headers.host === 'my-app.com') {
        app.setAssetPrefix('http://cdn.com/myapp');
      } else {
        app.setAssetPrefix('');
      }
      const actualPage = '/post';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/chu-de/:title/(:id).html', (req, res) => {
      const actualPage = '/tag';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    })

    server.get('/ttc/:cat/:catParent/:dateObject/:title/(:id).html', (req, res) => {
      const { cat, catParent, dateObject, title } = req.params;
      const slug = '/ttc/'+cat+'/'+catParent+'/'+dateObject+'/'+ title;
      if (req.headers.host === 'my-app.com') {
        app.setAssetPrefix('http://cdn.com/myapp');
      } else {
        app.setAssetPrefix('');
      }
      const actualPage = '/post';
      const queryParams = { id: req.params.id, slug};
      app.render(req, res, actualPage, queryParams);
    })

    server.get('/ttc/biem-hoa/:dateObject/:title/(:id).html', (req, res) => {
      const { dateObject, title } = req.params;
      // const slug = '/ttc/biem-hoa' + '/' + dateObject + '/' + title;
      const actualPage = '/post';
      const queryParams = { id: req.params.id};
      app.render(req, res, actualPage, queryParams);
    })

    server.get('/ttc/video/:dateObject/:title/(:id).html', (req, res) => {
      const { dateObject, title } = req.params;
      // const slug = '/ttc/video' + '/' + dateObject + '/' + title;
      const actualPage = '/video-detail';
      const queryParams = { id: req.params.id};
      app.render(req, res, actualPage, queryParams);
    })

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });