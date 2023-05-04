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

app.get('/chefCategories/:id',(req,res)=>{
    const id=req.params.id
    // console.log(id)
    const selectedChefCategories=chefCategories.find(categories=>categories.id == id)
    // console.log(selectedChefCategories)
    res.send(selectedChefCategories)
})

/* https://chef-recipe-hunter-server-soriful15.vercel.app/chefCategories */

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})