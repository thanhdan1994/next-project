const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const cacheableResponse = require('cacheable-response')

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev });
const handle = app.getRequestHandler();

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res, actualPage, queryParams }) => ({
    data: await app.renderToHTML(req, res, actualPage, queryParams)
  }),
  send: ({ data, res }) => res.send(data)
})

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
      return ssrCache(req, res, actualPage, queryParams);
    });

    server.get('/chu-de/:title/(:id).html', (req, res) => {
      const actualPage = '/tag';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    })

    server.get('/ttc/:cat/:catParent/:dateObject/:title/(:id).html', (req, res) => {
      const { cat, catParent, dateObject, title } = req.params;
      const slug = '/ttc/' + cat + '/' + catParent + '/' + dateObject + '/' + title;
      if (req.headers.host === 'my-app.com') {
        app.setAssetPrefix('http://cdn.com/myapp');
      } else {
        app.setAssetPrefix('');
      }
      const actualPage = '/post';
      const queryParams = { id: req.params.id, slug };
      app.render(req, res, actualPage, queryParams);
    })

    server.get('/ttc/biem-hoa/:dateObject/:title/(:id).html', (req, res) => {
      const { dateObject, title } = req.params;
      // const slug = '/ttc/biem-hoa' + '/' + dateObject + '/' + title;
      const actualPage = '/post';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    })

    server.get('/ttc/video/:dateObject/:title/(:id).html', (req, res) => {
      const { dateObject, title } = req.params;
      // const slug = '/ttc/video' + '/' + dateObject + '/' + title;
      const actualPage = '/video-detail';
      const queryParams = { id: req.params.id };
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

function getCacheKey(req) {
  //TODO clean-up, standardize an url to maximize cache hits
  return req.url
}

async function renderAndCache(req, res, pagePath, queryParams) {
  //TODO add a way to purge cache for a specific url
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  // No cache present for specific key? let's try to render and cache
  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams);
    // If something is wrong with the request, let's not cache
    // Send the generated content as is for further inspection

    if (dev || res.statusCode !== 200) {
      res.setHeader('x-cache', 'SKIP');
      res.send(html);
      return;
    }

    // Everything seems OK... let's cache
    ssrCache.set(key, html);
    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}