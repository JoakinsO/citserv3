const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/mystuff", (req, resp)=>{
    resp.send({msg: "hi"});
})

app.listen(port, (err)=>{
    if(err){
        return false;
    }
    
    console.log("port is opened for hack "+port);
})