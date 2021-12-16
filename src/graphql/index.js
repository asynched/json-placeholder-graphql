import { GraphQLSchema } from 'graphql'
import RootQueryType from './schema/index.js'

const schema = new GraphQLSchema({
  query: RootQueryType,
})

export default schema
