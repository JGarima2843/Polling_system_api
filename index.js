const express=require('express')
const Port=3000

const app=express()

// this is the initiator of the routing to different requests of the user with diff. url's
app.get('/',require('./routes/index'));
   


app.listen(Port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runing ...",Port);
})