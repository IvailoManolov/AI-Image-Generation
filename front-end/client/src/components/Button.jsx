import React from 'react'
import styled from 'styled-components'

const Button = ({content}) => {
  return (
    <StyledButton>
        {content}
    </StyledButton>
  )
}

const StyledButton = styled.button`
    background:linear-gradient(to right, #14163c 0%, #03217b 79%);
    text-transform:uppercase;
    letter-spacing:0.2rem;
    width:65%;
    height:3rem;
    border:none;
    color:white;
    border-radius:2rem;
    transition:0.1s;
    caret-color: transparent;
    cursor: pointer;

    &:active{
        height:3rem;
        width:66%;
    }
`

export default Button