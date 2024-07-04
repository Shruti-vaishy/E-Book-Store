const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://shrutivaishy610:Kushagra@2107@cluster0.6bxwfsi.mongodb.net/bookdirectory")
.then(()=>console.log('Connected to the Database'))
.catch(err=>console.log(err));

module.exports = mongoose;
