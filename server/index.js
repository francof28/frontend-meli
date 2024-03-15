const expresss = require('express')

const itemsRouter = require('./routes/items')

const app = expresss();

app.use('/', itemsRouter)

app.listen(3000, () => {
    console.log('server online: port 3000')
})