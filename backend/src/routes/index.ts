import { Router } from 'express'
import '../lib/env'

const routes = Router()

routes.get('/', (request, response) => {
  const key = process.env.API_key
  console.log(key);

  return response.status(200).send({ menssage: key })
})

export default routes
