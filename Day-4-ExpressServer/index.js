import express from 'express'

const app = express()
app.get('/home',(req,res)=>{
    res.json({message:'This is home page'})
})

app.get('/contactus',(req,res)=>{
    res.json({message:'Contact us at contact@contact.com'})
})

app.get('/about',(req,res)=>{
    res.json({messoge:'Welcome to the About page!'})
})
const port = 3000;
app.listen(port,()=>{
    console.log('Server is running on http://localhost:3000')
})


