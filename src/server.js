import express from "express"
var app = express()
app.get("/",(req,res)=>{
    res.send("hiii")
})
var port = 3001;
app.listen(port,()=>console.log(`Server running on port ${port}`))