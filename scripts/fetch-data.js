import fs from 'fs/promises'
import axios from 'axios'
import path from 'path'

const ROOT_PATH = process.cwd()

const endpoints = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
const baseURL = 'https://jsonplaceholder.typicode.com'

const fetchEndpoint = async (endpoint) => {
  const response = await axios.get(`${baseURL}/${endpoint}`)
  const data = response.data

  const filePath = path.join(ROOT_PATH, 'data', `${endpoint}.json`)
  await fs.writeFile(filePath, JSON.stringify(data, null, 2))
}

endpoints.forEach(fetchEndpoint)
