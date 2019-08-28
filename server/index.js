const express = require("express");
const app = express();
const path = require("path");
const Data = require("./Data");
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;


app.use(express.static(path.resolve(__dirname, "../dist")));

// mongoose.connect('mongodb+srv://asim:123@cluster0-ojxvp.mongodb.net/test?retryWrites=true',{useNewUrlParser:true})
// .then(()=>{console.log("db run");
// })
// .catch((e)=>{console.log("error",e)
// })

// let data = Schema({
//   name:String
// })

app.get("/Data", (req, res) => {
  res.json(Data)
});
// app.get('*', (req,res)=>{
//   res.sendFile(express.static(path.resolve(__dirname,'../dist/index.html')))
// })

// app.post("/shujja",(req, res)=>{
//   let data
// })


app.listen(3000, () => console.log("server is running on 3000"));
