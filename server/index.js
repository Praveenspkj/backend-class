const express = require('express');
const app = express();
const port=3005;
const cors = require('cors');

app.use(cors())

app.get("/first",(req,res)=>{
    res.json({msg:"your first forntend and backend connection",
                    name:"kiwi",
                    isCute:"true"
             })
})


app.get("/second",(req,res)=>{
    res.json({
              clg:"ace",
              department:"ece",
              goal:"to become a react  developer"
             })
})













app.listen(port,()=>{
    console.log('listening on port');
})