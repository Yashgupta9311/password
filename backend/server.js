const connecttomongo = require('./db')
const express = require('express')
const cors=require('cors')
connecttomongo()
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())


app.use('/api/auth', require('./routes/auth'))
app.use('/api/userpas', require('./routes/userpas'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`password manager listening on port ${port}`)
})