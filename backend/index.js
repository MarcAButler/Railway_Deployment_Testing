import app from './server.js'
import dotenv from 'dotenv'


dotenv.config()

const port = process.env.PORT || 5000

// [Database or MongoDB stuff]

// app.listen(port, "0.0.0.0", () =>
app.listen(port, "::", () =>
{
    console.log(`listening on port ${port}`)
})
