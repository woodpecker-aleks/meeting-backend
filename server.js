const app = require('express')()
const { server } = require('./config.json')
const cors = require('cors')
const port = process.env.PORT ?? server.port
const routes = require('./routes/index')

app.use(cors())

for (const route of Object.values(routes)) {
  app.use('/api', route)
}

app.listen(port, () => console.log(`Server running on port ${port}`))