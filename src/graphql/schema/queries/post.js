import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { getFile } from '../../../utils/file-handler.js'

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Representation of a post inside the API',
  fields: {
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
})

export const PostTypeHandler = {
  getPost: async (_source, args) => {
    const id = args.id
    const posts = await getFile('posts.json')

    return posts.find((post) => post.id === id)
  },
  getPosts: async () => {
    return await getFile('posts.json')
  },
  getUserPosts: async (user) => {
    const userId = user.id
    const posts = await getFile('posts.json')
    return posts.filter((post) => post.userId === userId)
  },
}

export default PostType
