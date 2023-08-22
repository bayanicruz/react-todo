const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors') //cross origin resource sharing

const routes = require('./routes/todo-route')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log(`Connected to mongo`))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))