const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: "true",
    useUnifiedTopology: "true"
},() => { 
    console.log("Success")
});