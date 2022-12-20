import React from 'react'

import {MainContainer,GlassEffect,InitialText,ButtonContainer,Horizontal,InputContainer} from '../Containers'

import Button from '../Button'
import Input from '../Input'

const SignIn = () => {
  return (
    <MainContainer>
        <GlassEffect>
            <InitialText>
                Log into your account
            </InitialText>

            <InputContainer>   
                <Input type={"text"} placeholder="Email"/>
                <Input type={"password"} placeholder = "Password"/>            
            <ButtonContainer>
                <Button content={"Login"}/>
            </ButtonContainer>

            </InputContainer>

            <Horizontal/>

        </GlassEffect>
    </MainContainer>
  )
}



export default SignIn