import Koa from 'koa'
import KoaStatic from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import {database} from './mongodb' // 引入mongodb
import {saveInfo, fetchInfo} from './controllers/info' // 引入info controller
import {saveStudent, fetchStudent, fetchStudentDetail} from './controllers/student' // 引入 student controller

const Routers = require('./router')

database()

const app = new Koa()
const router = new Router();


app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));



app
  .use(router.routes())
  .use(router.allowedMethods())

router.use('', Routers.routes())

app.listen(4000);

console.log('graphQL server listen port: ' + 4000)