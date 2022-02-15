const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
	static: "./build",
})

const port = process.env.JSDB_PORT || 3030;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.use(
	jsonServer.rewriter({
		"/api/*": "/$1"
	})
)

// Use default router
server.use(router)
server.listen(port, () => {
	console.log(`JSON Server (JSDB); ${port} portunda ayakta`)
})