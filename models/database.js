const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/bookdirectory")
.then(()=>console.log('Connected to the Database'))
.catch(err=>console.log(err));

module.exports = mongoose;