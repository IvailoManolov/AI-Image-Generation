import React, { useState } from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,NavBtnLinkLogout, UserButton,UserMenu, UserData, UserDataInfo} from './NavigationBarElements'


import { toast } from 'react-toastify'
import {FiMail} from "react-icons/fi"
import {HiBars4} from "react-icons/hi2"
import {MdTrendingUp} from "react-icons/md"
import {IoCallSharp,IoAlbumsSharp} from "react-icons/io5"

const LogoutSuccess = () => {
    toast.warning("Logout from account")
}

const NavigationBar = ({user,setUser}) => {

    const [showMenu,setShowMenu] = useState(false)

    const style = { color: "black", fontSize: ".9em",marginRight: "20px" }

    const handleClickMenu = () => {
        setShowMenu(!showMenu)
    }

  const handleLogout = () => {
    setUser(null)
    LogoutSuccess()
  }

  return (
    <>
    <Nav>

        <NavLink to="/">
            <h1>Home</h1>
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
                <UserButton onClick = {handleClickMenu}><p>{user.data.email[0].toUpperCase()}</p></UserButton>
            </>)}
            
        </NavBtn>
    </Nav>
            {
            showMenu &&
            (
                <UserMenu>
                    <UserData>
                        <label>{user.data.email}</label>
                        <UserDataInfo>
                            <p>
                                <IoAlbumsSharp style={style}/>
                                Manage Created Photos
                            </p>

                            <p>
                                <FiMail style={style}/>
                                Messages Received
                            </p>

                            <p><MdTrendingUp style={style}/>License Purchases</p>
                            <p><HiBars4 style={style}/>Settings</p>
                            <p><IoCallSharp style={style}/>Help</p>
                        </UserDataInfo>
                    </UserData>
                </UserMenu>
            )}
    </>
  )
}

export default NavigationBar