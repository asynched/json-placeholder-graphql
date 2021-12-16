import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

import { getFile } from '../../../utils/file-handler.js'

const AlbumType = new GraphQLObjectType({
  name: 'Album',
  description: 'Represents an album',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
})

export const AlbumTypeHandler = {
  getAlbums: async () => {
    return await getFile('albums.json')
  },
  getAlbum: async (source, args) => {
    const id = args.id
    const albums = await getFile('albums.json')
    return albums.find((album) => album.id === id)
  },
  getUserAlbums: async (user) => {
    const albums = await getFile('albums.json')
    const filtered = albums.filter((album) => album.userId === user.id)

    return filtered
  },
}

export default AlbumType
