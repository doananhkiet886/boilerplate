import express from 'express'
import exampleRoute from './exampleRoute'

const router = express.Router()

router.use('/example', exampleRoute)

export default router
