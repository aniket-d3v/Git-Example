const express=require("express")
const app=express()

app.use(express.json())


app.get("/login",(req,res)=>{

    res.json({"message":"You are visiting the login page"})

})


app.get("/register",(req,res)=>{

    res.json({"message":"You are visiting the register page"})

})

app.listen(process.env.PORT || 5000 , ()=>{
    console.log("Server is running")
})