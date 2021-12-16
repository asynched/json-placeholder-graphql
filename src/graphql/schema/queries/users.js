import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

import { getFile } from '../../../utils/file-handler.js'

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
      type: GeoLocationType,
    },
  },
})

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Representation of a user for the API',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: AddressType,
    },
  }),
})

export const UserTypeHandler = {
  getMultipleUsers: async () => {
    return await getFile('users.json')
  },
  getASingleUser: async (_source, args) => {
    const id = args.id
    const users = await getFile('users.json')
    const user = users.find((user) => user.id === id)

    return user
  },
}

export default UserType
