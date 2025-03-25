require("dotenv").config();

const mongoose = require("mongoose");

async function connectToDB() {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    await mongoose.connect(process.env.DATABASE_URL, connectionParams)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((e) => console.log(e));
}

module.exports = {
    connectToDB
}