const express = require('express')
const router = require('./routes')
const cors = require('cors');
const app = express()
app.use(cors());
const PORT = process.env.PORT || 5000

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `)
})

module.exports = app
