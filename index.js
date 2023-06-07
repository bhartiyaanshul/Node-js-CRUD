let express = require('express')
let app = express()
app.use(express.json())
let posts = []
app.get('/home',(req,res)=>{
    res.send("Hello")
})
app.post('/createpost',(req,res)=>{
    let obj=req.body
    obj.id = posts.length+1
    console.log(obj)
    posts.push(obj)
    if(obj.title == "" && obj.desc== ""){
        res.send({
            isSuccess:false,
           
                
        })
    }
    else{
        res.send({
            isSuccess:true,
            posts:posts
                
        })
    }
})
app.get('/getpost',(req,res)=>{
    let obj2 = req.query.id
    let ans = posts.find((a)=>(
        a.id==obj2
        ))

      
            res.send({
                posts:ans
                
            })
        
        
    
    
})
app.listen(5001,()=>{
    console.log("App is Started")
})

