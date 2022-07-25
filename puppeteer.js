import express from 'express'

import puppeteer from 'puppeteer'

const app = express()



app.get('/', async(rq,rs,nxt)=>{

    rs.respond(200).send('hello world ')
})

app.listen(8080,()=> console.log('server started'))