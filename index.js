const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json('Phan Tuan Em')
})

app.listen(process.env.PORT || 3000);