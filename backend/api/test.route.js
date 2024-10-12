import express from 'express'
import TestController from './test.controller.js'

const router = express.Router()


router.route('/helloWorld').get(TestController.apiTest)

export default router
