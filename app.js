const express = require('express')
const app = express() // execute express()
const port = 3000

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})