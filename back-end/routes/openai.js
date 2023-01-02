const router = require("express").Router()
const env = require("dotenv")

env.config()

const {Configuration,OpenAIApi} = require('openai')

const configuration = new Configuration({
    apiKey : process.env.OPEN_AI_KEY
})

const openAI = new OpenAIApi(configuration)

router.post("/generateImage" , async(req,res) => {

    try {
        const responce = await openAI.createImage({
            prompt : req.body.imageText,
            n : 1,
            size : '256x256'
        })

        const imageURL = responce.data.data[0].url

        console.log('\x1b[42m%s\x1b[0m',"[SUCCESS] Generating an image!")

        res.status(200).json(imageURL)

    } catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
        console.log('\x1b[41m%s\x1b[0m',"[FAILED] Generating an image!")

        res.status(500).json(error)
    }
})


module.exports = router