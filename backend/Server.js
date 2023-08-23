const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors') //cross origin resource sharing

const routes = require('./routes/todo-route')

require('dotenv').config()

const mongoUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

mongoose
.connect(mongoUrl)
.then(() => console.log(`Connected to mongo`))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))