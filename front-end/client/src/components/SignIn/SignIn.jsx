import React, { useRef } from 'react'

import {MainContainer,GlassEffect,InitialText,ButtonContainer,Horizontal,InputContainer} from '../Containers'

import { toast } from 'react-toastify'
import axios from "axios"
import  { StyledInput } from '../Input'

import {StyledButton} from "../Button"
import { useNavigate } from 'react-router-dom'

const SuccessLogin = () => {
    toast.success("Success loging to account!")
}

const FailedLogin = () => {
    toast.error("Failed logging to account!")
}

const SignIn = ({setUser}) => {

    const emailRef = useRef(null)
    const passRef = useRef(null)
            
    let navigate = useNavigate() 

    const handleLogin = async() => {
        
        const newUser = {
            email : emailRef.current.value,
            password : passRef.current.value
        }

        try{
            const user = await axios.post("/users/login",newUser)

            SuccessLogin()

            setUser(user)
            
            let path = 'about'

            navigate("../about", { replace: true })

        }catch(err){
            FailedLogin()
        }
    }

  return (
    <MainContainer>
        <GlassEffect>
            <InitialText>
                Log into your account
            </InitialText>

            <InputContainer>   
                <StyledInput type={"text"} placeholder="Email" ref = {emailRef}/>
                <StyledInput type={"password"} placeholder = "Password" ref = {passRef}/>            
            <ButtonContainer>
                <StyledButton onClick={handleLogin}>
                    Sign In
                </StyledButton>
            </ButtonContainer>

            </InputContainer>

            <Horizontal/>

        </GlassEffect>
    </MainContainer>
  )
}



export default SignIn