const expresss = require('express')

const app = expresss();

app.get('/', (req, res) => {
    res.send('server online')
})

app.listen(3001, () => {
    console.log('server online: port 3001')
})