import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import GQLPlayground from 'graphql-playground-middleware-express'

import schema from './graphql/index.js'

const app = express()
const GraphQLPlaygroundMiddleware = GQLPlayground.default

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
  })
)

app.get('/playground', GraphQLPlaygroundMiddleware({ endpoint: '/graphql' }))

app.listen(3333)
