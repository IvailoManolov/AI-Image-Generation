const express = require('express')
const mongoose = require('mongoose')
const env = require("dotenv")
const userRoute = require("./routes/users")
const openAIRoute = require("./routes/openai")

const application = express()
application.use(express.json())

env.config()

mongoose.connect(process.env.MONGO_CONNECTION_STRING,()=> {
    console.log('\x1b[42m%s\x1b[0m',"[SUCCESS] Mongo DB Connected!")
})

application.use("/api/users",userRoute)
application.use("/api/openAI",openAIRoute)

application.listen(5000, () => {
    console.log('\x1b[42m%s\x1b[0m',"[SUCCESS] Server started!")
})