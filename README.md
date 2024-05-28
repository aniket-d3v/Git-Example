# Git-Example
- creating a simple express api for demonstration where the authentication will act as a login and registration will be as a register endpoint

### To create Branches

``` git branch develop ```

``` git branch feature/user-authentication ```

``` git branch bugfix/registration-from ```


### To switch Branches

``` git checkout develop ```

``` git checkout feature/user-authentication ```

``` git checkout bugfix/registration-from ```


--------------------------------------


### Demo code on branch that will later be merged 
- feature/user-authentication
```
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

```


---------------------------



- Creating conflicting Change in the bugfix branch

```
const express=require("express")
const app=express()

app.use(express.json())


app.get("/login",(req,res)=>{

    res.json({"message":"You are visiting the login page"})

})


app.get("/register",(req,res)=>{

    res.send{}

})

app.listen(process.env.PORT || 5000 , ()=>{
    console.log("Server is running")
})

```


-----------------------

- Manually fixing the conflict


```

    res.json({"message":"You are visiting the updated register page"})


```


