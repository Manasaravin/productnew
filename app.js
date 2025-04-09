var express = require('express');
require('./db')
var userRoutes=require('./routes/userRout')
var productRoutes=require('./routes/productRoute')

var app = express();
var port = 4000;
app.use(express.json());

app.use('/api',userRoutes)
app.use('/ap',productRoutes)










app.listen(port,(req,res)=>{
    console.log(`server is up and running in${port}`)
})