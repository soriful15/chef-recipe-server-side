const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

const chefCategories = require('./Data/chef.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello chef master!')
})

app.get('/chefCategories', (req, res) => {
    res.send(chefCategories)
})

/* https://chef-recipe-hunter-server-tawny.vercel.app/chefCategories */
// https://www.thebangladeshikitchen.com/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})