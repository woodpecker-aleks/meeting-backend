const app = require('express')()
const { server } = require('./config.json')
const routes = require('./routes/index')

for (const route of Object.values(routes)) {
  app.use('/api', route)
}

app.listen(server.port, () => console.log(`Server running on port ${server.port}`))