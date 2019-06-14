const express = require('express');
const next = require('next');
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

    server.get('/post/:id', (req, res) => {
      console.log("hihi");
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

    // server.get('/detail', (req, res) => {
    //   client.select(3, function() {
    //     client.hgetall('zyz_kobdt_11', function(err, result) {
    //       let data = result;
    //       let resources = data.resources;
    //       let objRe = JSON.parse(resources);
    //       console.log(typeof(objRe.resource_content)); // {"key":"value","second key":"second value"}
    //     });
    //   })
    // })

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