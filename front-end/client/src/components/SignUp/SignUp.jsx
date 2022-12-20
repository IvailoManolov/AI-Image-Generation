import React from 'react'
import {FaFacebook,FaInstagram} from 'react-icons/fa'

import {MainContainer,GlassEffect,InitialText,ButtonContainer,Horizontal,InputContainer} from '../Containers'

import Button from '../Button'
import Input from '../Input'

const SignUp = () => {
  return (
    <MainContainer>
        <GlassEffect>
            <InitialText>
                Create your account
            </InitialText>

            <InputContainer>   
                <Input type={"text"} placeholder="Email"/>
                <Input type={"password"} placeholder = "Password"/>
                <Input type={"password"} placeholder = "Repeat Password"/>
                

            <ButtonContainer>
                <Button content={"Sign up"}/>
            </ButtonContainer>

            </InputContainer>

            <Horizontal/>

        </GlassEffect>
    </MainContainer>
  )
}



export default SignUp