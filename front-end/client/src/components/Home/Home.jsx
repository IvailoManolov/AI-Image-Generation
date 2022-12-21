import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <MainContainer>
      <div className="image-holder">
        <img src="https://hotpot.ai/images/site/ai/headshot_maker/teaser.jpg" alt =""/>
      </div>

      <GetStartedContainer>
        Get Started by creating your account

        <SpecialButton>GET STARTED</SpecialButton>
      </GetStartedContainer>

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
      background-color:red;
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
export default Home