import express from 'express'
import exampleValidation from '~/validations/exampleValidation'
import exampleController from '~/controllers/exampleController'

const router = express.Router()

router.get('/')
router.post('/', exampleValidation.createNew, exampleController.createNew)

export default router
