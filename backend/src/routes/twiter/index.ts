import { Router } from 'express'

import GetTweetsServices from '../../services/GetTweetsServices'

const twiterRoutes = Router()

twiterRoutes.get('/', async (request, response) => {
  const { consumer_key, consumer_secret, bearer_token } = process.env
  const { tag, count } = request.body
  const tw = new GetTweetsServices()

  if (tag) {
    const responseTweets = await tw.execute({
      tag,
      count: count || 10,
    })

    return response.status(200).send(responseTweets)
  }

  return response
    .status(404)
    .send({ menssage: 'Erro this tag or credential is invalid' })
})

export default twiterRoutes
