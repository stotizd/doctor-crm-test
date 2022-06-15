require('dotenv').config()
const express = require('express')
const path = require('path')
const redis = require('redis')
const cors = require('cors')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient()

const app = express()

const PORT = process.env.PORT || 3001

// ROuters
const userRouter = require('./routes/userRouter')
const patientRouter = require('./routes/patientRouter')
const diagramRouter = require('./routes/diagramRouter')
const destinationRouter = require('./routes/destinationRouter')
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(process.env.PWD, 'public')))

app.use(
    session({
        name: 'sid',
        store: new RedisStore({ client: redisClient }),
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET,
        resave: false,
    })
)

app.use((req, res, next) => {
    res.locals.user = req.session.user
    next()
})

app.use('/user', userRouter)
app.use('/patient', patientRouter)
app.use('/diagram', diagramRouter)
app.use('/destination', destinationRouter)
app.listen(PORT, () => {
    console.log('Server started on port', PORT)
})
