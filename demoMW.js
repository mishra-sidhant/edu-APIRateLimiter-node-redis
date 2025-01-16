const globalMiddlewareFunction = (req, res, next) => {

    req.globalMessage = 'Global middleware executed'

    next()
}

const localMiddlewareFunction = (req, res, next) => {

    req.localMessage = 'Local middleware executed'

    next()
}

module.exports = {
    globalMiddlewareFunction,
    localMiddlewareFunction
}