var mongoose =require('mongoose');
mongoose.connect("mongodb+srv://manasikr33:manasa1504@cluster0.miccrxt.mongodb.net/db6?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connected to db")
  })
  .catch((err)=>{console.log(err)})
