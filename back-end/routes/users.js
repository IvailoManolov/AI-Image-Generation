const router = require("express").Router()

const bcrypt = require('bcrypt')

const User = require("../models/User")

router.post("/register",async(req,res) => {
    try{
        //Generate password.
        const salt = await bcrypt.genSalt(10)
        const cryptedPass = await bcrypt.hash(req.body.password,salt)

        //Creating a new user.
        const newUser = new User({
            email : req.body.email,
            password : cryptedPass
        })

        //Store user to DB.
        const userSaved = await newUser.save()

        console.log('\x1b[42m%s\x1b[0m',"[SUCCESS] Registering a user!")

        res.status(200).send(userSaved._id)

    }catch(err){
        console.log('\x1b[41m%s\x1b[0m',"[FAILED] Registering a user!")

        res.status(500).json(err)
    }
})

router.post("/login",async(req,res) => {
    try{
        //Find a specific user.
        const user = await User.findOne({email : req.body.email})

        if(!user)
        {
            console.log('\x1b[41m%s\x1b[0m',"[FAILED] Login User is not found!")

            res.status(400).json("Wrong username or password !")
        }

        else{
            const validPassword = await bcrypt.compare(req.body.password,user.password)

            if(!validPassword)
            {
                console.log('\x1b[41m%s\x1b[0m',"[FAILED] Loging to a user!")

                res.status(400).json("Wrong username or password!")
            }

            else{
                console.log('\x1b[42m%s\x1b[0m',"[SUCCESS] Loging to a user!")

                res.status(200).json(user)
            }
        }
    }catch(err){
        console.log('\x1b[41m%s\x1b[0m',"[FAILED] User not found in DB!")
        res.status(500).json(err)
    }
})

module.exports = router