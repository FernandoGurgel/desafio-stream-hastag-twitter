import { Router } from 'express'

import twiterRoutes from './twiter'

const routes = Router()

routes.use('/tweets', twiterRoutes)

export default routes
