import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,NavBtnLinkLogout} from './NavigationBarElements'


import { toast } from 'react-toastify'


const LogoutSuccess = () => {
    toast.warning("Logout from account")
}

const NavigationBar = ({user,setUser}) => {

  const handleLogout = () => {
    setUser(null)
    LogoutSuccess()
  }

  return (
    <>
    <Nav>

        <NavLink to="/">
            <h1>Logo</h1>
        </NavLink>

        <Bars/>

        <NavMenu>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>
            <NavLink to="/contact-us" activeStyle>
                Contact Us
            </NavLink>
            {
            !user &&
            (
                <NavLink to="/sign-up" activeStyle>
                    Sign up
                </NavLink>
            )}
        </NavMenu>

        <NavBtn>
            {
            !user ?  
            (
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            ) : (
            <>
                <NavBtnLinkLogout onClick = {handleLogout}>Logout</NavBtnLinkLogout>
            </>)}
            
        </NavBtn>
    </Nav>
    </>
  )
}

export default NavigationBar