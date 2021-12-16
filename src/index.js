import express from 'express'
import { graphqlHTTP } from 'express-graphql'

import schema from './graphql/index.js'

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
  })
)

app.listen(3333)
