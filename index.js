const { request } = require('express')
let express = require('express')
let app = express()
app.use(express.json())
let posts = []
app.get('/home', (req, res) => {
    res.send("Hello")
})
app.post('/createpost', (req, res) => {
    let obj = req.body
    obj.id = posts.length + 1
    console.log(obj)
    posts.push(obj)
    obj.isDelete = 0
    if (obj.title == "" && obj.desc == "") {
        res.send({
            isSuccess: false,
        })
    }
    else {
        res.send({
            isSuccess: true,
            posts: posts,
            

        })
    }
})

app.get('/getpost', (req, res) => {
    let obj2 = req.query.id
    let ans = posts.find((a) => (
        a.id == obj2
    ))
    res.send({
        posts: ans

    })
})
app.put('/updatepost',(req,res)=>{
    let id = req.query.id
    let idx = posts.findIndex((i)=>(
        i.id == id
    ))
    posts[idx].title= req.body.title
    posts[idx].desc = req.body.desc
    res.send({
        isSuccess: true,
        posts:posts[idx],
        message:"Updated Successfully"

}   )
})
app.delete('/deletepost',(req,res)=>{
    let id = req.query.id
    let idx = posts.findIndex((i)=>(
        i.id == id
    ))
    posts.splice(idx,1)
    res.send({
        isSuccess: true,
        message: "Post Deleted"
    })
})
app.delete('/softdeletepost',(req,res)=>{
    let id = req.query.id
    let idx = posts.findIndex((i)=>(
        i.id == id
    ))
    posts[idx].isDelete = 1
    
        res.send({
            isSuccess: false,
            posts: posts,
        })
   
    
})
app.listen(5001, () => {
    console.log("App is Started in 5001")
})

