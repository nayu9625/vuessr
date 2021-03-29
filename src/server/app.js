const Koa = require('koa');
const server = require('koa-static');
const { resolve } = require('path');
const router = require('./router');

const app = new Koa();
router(app);

app.use(server(resolve(__dirname, '../../dist')));

app.listen(3030, () => {
  console.log('running 3030');
})