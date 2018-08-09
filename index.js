/**
 * Created by gaofeng on 2018/8/9.
 */


const Koa = require('koa');
const app = new Koa();


app.use( async (ctx,next) => {
    ctx.body = '<h1>电影网站</h1>'
})

app.listen(4455)



