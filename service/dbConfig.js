const mongoose = require('mongoose')
require('dotenv').config();

const dbconnect = async() => {
    try {
        
        await mongoose.connect(process.env.MONGODB,{
            useUnifiedTopology : true,
            useNewUrlParser : true
        });
        console.log(`Mongodb connected successfully`);

    } catch (error) {
        console.log(error);
    }
}


module.exports =  dbconnect;