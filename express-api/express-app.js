const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')
const app = express()
const router = express.Router()
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

router.use(compression())
router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
router.use(awsServerlessExpressMiddleware.eventContext())

router.get('/', (req, res) => res.json({message: 'express-app: hello'}))
router.get('/healthcheck', (req, res) => res.json({message: "healthcheck ok"}))
router.get('*', (req, res) => res.json({message: 'route not found'}))
app.use('/', router)

module.exports = app
