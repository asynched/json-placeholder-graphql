import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import GeoLocationType from './geo-location.js'

const AddressType = new GraphQLObjectType({
  name: 'Address',
  description: "Representation of the user's address",
  fields: {
    street: {
      type: new GraphQLNonNull(GraphQLString),
    },
    suite: {
      type: new GraphQLNonNull(GraphQLString),
    },
    city: {
      type: new GraphQLNonNull(GraphQLString),
    },
    zipcode: {
      type: new GraphQLNonNull(GraphQLString),
    },
    geo: {
      type: new GraphQLNonNull(GeoLocationType),
    },
  },
})

export default AddressType
