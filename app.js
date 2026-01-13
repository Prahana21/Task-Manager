
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
//middleware
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
app.use(express.static('./public'))
app.use(express.json())
app.use(notFound)
app.use(errorHandlerMiddleware)
//routes


app.use('/api/v1/tasks', tasks)
const port = process.env.PORT || 3000
//Database logic is separated into its own module (connectDB)

//Your server only starts after MongoDB is connected

//If the DB is down, your app won’t run in a broken state

//This is the professional pattern used in real-world apps
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}....`))
    } catch (error) {
        console.log(error)
    }
}
start()

