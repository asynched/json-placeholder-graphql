import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import GQLPlayground from 'graphql-playground-middleware-express'

import { getLoggerMiddleware } from './config/loggers.js'
import schema from './graphql/index.js'

const app = express()
const GraphQLPlaygroundMiddleware = GQLPlayground.default
const PORT = process.env.PORT || 3333

app.use(getLoggerMiddleware())
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
  })
)

app.get('/playground', GraphQLPlaygroundMiddleware({ endpoint: '/graphql' }))

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
