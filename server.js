const express = require('express')
const app = express()
const port = 3000
const userRouter = require('./routes/user')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use('/user', userRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})