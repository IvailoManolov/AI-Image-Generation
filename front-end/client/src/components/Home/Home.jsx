import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Home = ({user}) => {

  let navigate = useNavigate() 

  const changeRouteSignIn = () => { 
    let path = `signin`; 
    navigate(path);
  }

  return (
    <MainContainer>

      {
      !user && 
      (
      <>
        <div className="image-holder">
          <img src="https://hotpot.ai/images/site/ai/headshot_maker/teaser.jpg" alt =""/>
        </div>

        <GetStartedContainer>
          Get Started by creating your account

          <SpecialButton onClick = {changeRouteSignIn}>GET STARTED</SpecialButton>
        </GetStartedContainer>
      </>) }

      {
        user && 
        (<>
        <ImageContainer>
            <img src="https://www.techspot.com/images2/news/bigimage/2022/09/2022-09-13-image-21.jpg" alt =""/>

            <GetStartedImageContainer>
              Describe your image
              <AIImageInput placeholder='Enter an image description'>
                
              </AIImageInput>
              <SpecialButton onClick = {() => {}}>Generate Image</SpecialButton>
            </GetStartedImageContainer>
        </ImageContainer>

        <AIImageContainer>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f52f0f136277001.61f6e5dda28a5.jpg" alt=""/>
        </AIImageContainer>
        </>)
      }

    </MainContainer>
  )
}

const MainContainer = styled.div`
    display: flex;
    position:relative;
    width: 100%;
    height: calc(100vh - 80px);
    background-size: cover;
    justify-content: center;
    align-items: center;
    caret-color: transparent;

    .image-holder{
      width:100%;
      height:100%;
      
      overflow:hidden;

      img{
        width:100%;
        height:115%;
      }
    }
`
const GetStartedContainer = styled.div`
position:absolute;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center; 
color:white;
text-align:center;  
font-size:18px;
padding:2px;
height:15vh;
font-weight:600;
width:45vw;
background:rgba(255,255,255,0.25);
box-shadow:0 8px 32px 0 rgba(31,38,135,0.38);
backdrop-filter:blur(1.5px);
border-radius:10px;
color:white;
text-transform:uppercase;
letter-spacing:0.4rem;

`
const SpecialButton = styled.button`
  margin-top:25px;
  color:white;
  width:150px;
  height:30px;
  font-weight:600;
  outline:none;
  cursor:pointer;
  background:none;
  border-radius:5px;
  overflow:hidden;
  position:relative;

  &:before{
    background:#9e9e9e9f;
    content:'';
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:-1;
    transition:all 0.3s ease;
    width:100%;
    height:0%;
    transform:translate(-50%,-50%) rotate(45deg);
  }

  &:hover:before{
    height:500%;
  }

  &:hover{
    color:black;
  }

`

const GetStartedImageContainer = styled.div`
position:absolute;
display: flex;
left: 0; 
right: 0; 
margin-left: auto; 
margin-right: auto; 
top:1%;
flex-direction:column;
align-items:center;
justify-content:center; 
color:white;
text-align:center;  
font-size:18px;
padding:2px;
height:20vh;
font-weight:600;
width:45vw;
background:rgba(255,255,255,0.15);
box-shadow:0 12px 32px 0 #bcbcbcd8;
backdrop-filter:blur(15px);
border-radius:10px;
color:whitesmoke;
text-transform:uppercase;
letter-spacing:0.3rem;

button{
  text-transform:uppercase;
  margin-top:20px;
}

`

const ImageContainer = styled.div`
  position:absolute;
  display: flex;
  flex-direction:column;
  top:0;
  width:100%;
  height: calc(100vh - 80px);
  background-color:red;
  overflow:hidden;

  img{
        width:100%;
        height:350%;
        object-fit:cover;
      }
`

const AIImageContainer = styled.div`
position:absolute;
display: flex;
left: 0; 
right: 0; 
margin-left: auto; 
margin-right: auto; 
bottom:1%;
flex-direction:column;
align-items:center;
justify-content:center; 
font-size:18px;
padding:2px;
height:65vh;
font-weight:600;
width:60vw;
background:rgba(255,255,255,0.25);
box-shadow:5px 6px 55px 0 #6b75ff94;
backdrop-filter:blur(1px);
border:1px solid slateblue;
border-radius:10px;
color:white;
text-transform:uppercase;
letter-spacing:0.4rem;
img{
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:8px;
      }

`
const AIImageInput = styled.input`
display: flex;
outline:none;
border:2px solid black;
margin-top:10px;
padding:5px;
background:none;
color:whitesmoke;
border-radius:5px;
width:85%;
height:30px;
font-weight:600;
::placeholder{
  color:#c7c7c788
}
`
export default Home