const express = require("express")
const { globalMiddlewareFunction, localMiddlewareFunction } = require('./demoMW.js')

const app = express()

app.use(globalMiddlewareFunction)

app.get('/api-test', localMiddlewareFunction, (req, res) => {

    return res.json({'Local middleware message': req.localMessage,
                    'Global middleware message': req.globalMessage
    })
})

app.listen(8000, async () => {
    console.log("The app is listening on port 8000")
})