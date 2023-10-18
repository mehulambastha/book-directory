const mongoose = require("mongoose")


const connection = async () => {
    const url = process.env.MONGO_URL
    try{
        const connect = await mongoose.connect(url)
        console.log(`Connection successful to ${connect.connection.name} at ${connect.connection.host}`)
    }catch(err){
        console.log(err)
    }
}

module.exports = connection