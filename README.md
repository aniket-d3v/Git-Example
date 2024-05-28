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

``` git add . ```
``` git commit -m "Commit message"  ```
``` git push origin branchname ```

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


----------------------
- Making pr to develop branch from feature/user-authentication

![alt text](image.png)

- No conflicts to merge 

![alt text](image-1.png)

- Merged without errors

![alt text](image-2.png)

------------------------
- Making pr to develop branch from bugfix/registration-form

![alt text](image-3.png)

- No conflicts before merge
![alt text](image-4.png)

- After Merge
![alt text](image-5.png)

------------------------

- Merging the develop branch to the main branch

![alt text](image-6.png)

- Successful merge from develop to main

![alt text](image-7.png)