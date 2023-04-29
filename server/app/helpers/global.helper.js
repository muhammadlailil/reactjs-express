import config from '../../config/index.js'
import express from 'express'

global._config = config
global.Route = express.Router()