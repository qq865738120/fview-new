const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { showImage } = require("./src/js/baidu")
const { data } =require("./src/server/index")
const config = require('./config')
// Get process DEPLOY_ENV value
const DEPLOY_ENV = process.env.DEPLOY_ENV || 'dev'


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

let cacheOutData = {};

const intervalTask = () => {
  const { outData } = data
  const result = { ...JSON.parse(JSON.stringify(outData)) }
  Object.keys(outData).map(outKey => {
    Object.keys(outData[outKey]).map(itemKey => {
      outData[outKey][itemKey].map((item, index) => {
        const url = showImage(outKey + "-" + itemKey + "/" + item.url).split("?")[0];
        result[outKey][itemKey][index].url = url;
      })
    })
    
  })
  cacheOutData = { ...result };
}
intervalTask();
setInterval(intervalTask, 1000 * 60 * 60 * 5);

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/api/out/data') {
      console.table(query)
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({ data: cacheOutData }))
      res.end();
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(config[DEPLOY_ENV].port, err => {
    if (err) throw err
    console.log('> Ready on http://' + "127.0.0.1" + ':' + config[DEPLOY_ENV].port)
  })
})