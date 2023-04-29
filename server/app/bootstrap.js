import './helpers/global.helper.js'
import express from "express";
import cors from "cors";
import api from './routes/api.route.js'
import database from './database/database.js';
import responseHelper from './helpers/response.helper.js';

const app = express()

database.connect()
app.use(cors(_config.app.cors));
app.use(express.json());


app.use(api)

app.get('*', (req, res) => res.send(404));
app.post('*', (req, res) => res.send(404));
app.use(function (err, req, res, next) {
	return responseHelper.BadRequest(err.message, res)
});
export default app