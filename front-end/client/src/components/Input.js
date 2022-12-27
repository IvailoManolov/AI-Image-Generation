import React from 'react'
import styled from 'styled-components'

export const StyledInput = styled.input`
    background : rgba(255,255,255,0.20);
    box-shadow:0 8px 32px 0 rgba(31,38,135,0.40);
    border-radius:2rem;
    width:80%;
    height:3rem;
    padding:1rem;
    border:none;
    outline:none;
    font-size:1rem;
    margin-bottom:20px;
    font-weight:bold;
    &:focus{
        display:inline-block;
        box-shadow : 0 0 0 0.2rem #7545f9;
        backdrop-filter:blur(12rem);
        border-radius:2rem;
    }

    &::placeholder{
        color:#2d147199;
        font-weight:100;
        font-size:1rem;
    }
`