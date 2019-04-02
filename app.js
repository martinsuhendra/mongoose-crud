const express = require('express')
const app = express()
const port = 3000
const bookRoutes = require('./routes/book-routes')
const memberRoutes = require('./routes/member-routes')
const transactionRoute = require('./routes/transaction-routes')

app.use(express.urlencoded({extended: false}))

app.use('/books', bookRoutes)
app.use('/members', memberRoutes)
app.use('/transactions', transactionRoute)


app.listen(port, ()=> {
    console.log(`you are listening on port: ${port}`);
})