import React, { useRef } from 'react'

import {MainContainer,GlassEffect,InitialText,ButtonContainer,Horizontal,InputContainer} from '../Containers'

import axios from "axios"

import {StyledButton} from "../Button"
import {StyledInput} from "../Input"
import { toast } from 'react-toastify'

const RegisterSuccess = () => {
    toast.success("Account created successfully!")
}

const RegisterFailed = () => {
    toast.error("Failed creating account!")
}

const MatchingPassError = () => {
    toast.warning("Passwords not matching!")
}

const SignUp = () => {

    const emailRef = useRef(null)
    const passWordRef = useRef(null)
    const repeatedPasswordRef = useRef(null)

    const handleSignUp = async() => {

        if(passWordRef.current.value !== repeatedPasswordRef.current.value)
        {
            MatchingPassError()
        }

        else{
            
            const newUser = {
                email : emailRef.current.value,
                password : passWordRef.current.value
            }

        try{
            
            await axios.post("/users/register",newUser)

            //Produce a success notification.
            RegisterSuccess()


        }catch(err){
            // Produce a fail notification.
            RegisterFailed()
        }
        
        }
    }


  return (
    <MainContainer>
        <GlassEffect>
            <InitialText>
                Create your account
            </InitialText>

            <InputContainer>
                <StyledInput type={"email"} placeholder="Email" ref={emailRef}/>
                <StyledInput type={"password"} placeholder = "Password" ref={passWordRef}/>
                <StyledInput type={"password"} placeholder = "Repeat Password" ref={repeatedPasswordRef}/>

            <ButtonContainer>
                <StyledButton onClick = {handleSignUp}>
                    Sign Up
                </StyledButton>
            </ButtonContainer>

            </InputContainer>

            <Horizontal/>

        </GlassEffect>
    </MainContainer>
  )
}



export default SignUp