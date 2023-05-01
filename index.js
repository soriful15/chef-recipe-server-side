const express = require('express')
const app = express()
const port = 5000

const chefCategories=require('./Data/chef.json')


app.get('/', (req, res) => {
  res.send('Hello chef master!')
})

app.get('/chefCategories',(req,res)=>{
    res.send(chefCategories)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})