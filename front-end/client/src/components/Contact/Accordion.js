import React, { useState } from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons/lib'
import {FiPlus,FiMinus} from 'react-icons/fi'

const AccordionSection = styled.div`
display: flex;
position:relative;
width:750px;
height:100%;
margin-left:35px;
`

const Container = styled.div`
position:absolute;
display: flex;
flex-direction:column;
width:100%;
box-shadow:2px 10px 35px 1px rgba(153,153,153,0.4);
p{
    font-size:18px;
    color:aliceblue;
}
`

const DropDown = styled.div`
background:#1c1c1c;
color:#00ffb9;
width:100%;
height:100%;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-bottom:1px solid #00ffb9;
border-top: 1px solid #00ffb9;
p{
    font-size:1rem;
    color:aliceblue;
}
`

const Wrap = styled.div`
background:#272727;
color:#fff;
display: flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
text-align:center;
cursor:pointer;

h1{
    padding:1rem;
    font-size:1rem;
}

span{
    margin-right:1rem;
}
`

const Accordion = ({data}) => {

    const[clicked,setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index)
        {
           return setClicked(null)
        }

        setClicked(index)
    }
  return (
    <IconContext.Provider value={{color : '#00FFB9',size : '25px'}}>
        <AccordionSection>
            <Container>
                {data.map((item,index) => {
                    return (
                        <>
                        <Wrap onClick={()=>toggle(index)} key = {index}>
                            <h1>
                                {item.question}
                            </h1>
                            <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                        </Wrap>
                        {clicked === index ? (
                            <DropDown>
                        <p>{item.answer}</p>
                        </DropDown>
                        ) : <></>}
                        
                       
                        </>
                    )
                })}
            </Container>
        </AccordionSection>
    </IconContext.Provider>
   
  )
}

export default Accordion