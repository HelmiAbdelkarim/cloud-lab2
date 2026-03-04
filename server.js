const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/health', (req, res) => {
    res.send('OK')
})

app.get('/', (req, res) => {
    res.send(process.env.APP_MESSAGE)
})
