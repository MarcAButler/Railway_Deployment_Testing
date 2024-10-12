import express from 'express'
import cors from 'cors'
import testApi from './api/test.route.js'


const app = express()



app.use(cors())
app.use(express.json())


app.use("/api/v1/", testApi)


// If any route other than the ones specified is entered a 404 status will be returned
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

export default app
