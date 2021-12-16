import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'

const GeoLocationType = new GraphQLObjectType({
  name: 'Geo',
  description: "Representation of an address' geolocation",
  fields: {
    lat: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lng: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
})

export default GeoLocationType
