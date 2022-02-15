const express = require('express');
const GetData = require('../Server/scrape');
const cors =require('cors');


const port = 5000;
const app = express();
app.use(cors());

app.get('/',(req,res)=>{
  const data = GetData();
  res.status(200).json({
    name:"Saco de box",

  });
})


app.listen(port);
console.log(`Server on port: ${port}`);

