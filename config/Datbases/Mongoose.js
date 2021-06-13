require("dotenv").config();
const mongoose = require("mongoose");
const { print } = require("../../Functions/logging");
const { __prod } = require("../constants");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

async function main () {
    try{
        await mongoose.connect(process.env.MONGO_URI ? __prod : "mongodb://localhost:27017/NotClubHouseDB");
    } catch(error) {
        print(error.message);
    }
}

main();