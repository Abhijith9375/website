const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const DataModel = require('./models/Data') 

const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://abhijithsk4224:abhi@cluster0.cblksax.mongodb.net/Sign");


app.post("/add", (req, res) =>{
  const {name, rating, imageUrl, price} = req.body;
  DataModel.create(req.body)
  .then(Sign => res.json(Sign))
  .catch(err => res.json(err))
}) 

app.post("/login", (req, res) => {
  const {email, password} = req.body;
  DataModel.findOne({email: email})
  .then(user =>{
    if(user){
      if(user.password === password){
        res.json("success")
      }else{
        res.json("the password is incorrect")

      }

    }else{
      res.json("No record existed")
    }
  })
})

app.post('/Sign', (req, res) => {
  DataModel.create(req.body)
  .then(Sign => res.json(Sign))
  .catch(err => res.json(err))
})



app.listen(3001, () => {
  console.log("Server is running")
});