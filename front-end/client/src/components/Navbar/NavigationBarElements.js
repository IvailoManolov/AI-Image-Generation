import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
background : #000;
height:80px;
display:flex;
justify-content:space-between;
caret-color: transparent;
padding:0.5rem calc((100vw - 1000px)/2);
z-index:10;
`

export const NavLink = styled(Link)`
color:#fff;
display: flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;

&.active{
    color:#15cdfc;
}
`

export const Bars = styled(FaBars)`
display: flex;
color:#fff;
display: none;

@media screen and (max-width : 760px){
    display: block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,75%);
    font-size:1.8rem;
    cursor:pointer;
}
`

export const NavMenu = styled.div`
display: flex;
align-items:center;
margin-right:-24px;

@media screen and (max-width:760px) {
    display:none;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items:center;
margin-right:24px;

@media screen and (max-width:760px) {
    display: none;
}
`

export const NavBtnLink = styled(Link)`
border-radius:4px;
background:#256ce1;
padding:10px 22px;
color:#fff;
border:none;
outline:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition:all 0.2s ease-in-out;
    background: #fff;
    color:#010606;
}

`

export const NavBtnLinkLogout = styled(Link)`
border-radius:4px;
background:tomato;
padding:10px 22px;
color:#fff;
border:none;
outline:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition:all 0.2s ease-in-out;
    background: #fff;
    color:#010606;
}

`

export const UserButton = styled.button`
display: flex;
margin-right:5px;
color:white;
background-color:gray;
position:absolute;
right:0;
border-radius:50%;
width:40px;
height:40px;
padding:5px;
text-align:center;
align-items:center;
justify-content:center;
cursor:pointer;
`

export const UserMenu = styled.div`
display: flex;
position:absolute;
width:300px;
height:500px;
background:rgba(255,255,255,0.25);
box-shadow:0 8px 32px 0 rgba(31,38,135,0.38);
backdrop-filter:blur(15px);
right:0;
top:0;
margin-top:20px;
margin-right:50px;
border-radius:15px;
z-index:100;
`

export const UserData = styled.div`
display: flex;
flex-direction:column;
width:300px;
height:500px;
text-align:center; 
label{
    font-size:22px;
    padding:15px;
    font-weight:800;
    border-bottom:2px solid black;
}
`

export const UserDataInfo = styled.div`
display: flex;
flex-direction:column;
justify-content:space-between;
background-color:rgba(0,0,0,0.2);
height:100%;
p{
    font-size:18px;
    font-weight:800;
    color:black;
    margin-top:15px;
    margin-bottom:15px;
    background-color:rgba(0,0,0,0.02);
    caret-color:transparent;
    cursor:pointer;
    padding:15px;

    &:hover{    
        background-color:rgba(0,0,0,0.1);
    }
}
`