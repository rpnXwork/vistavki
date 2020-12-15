import React from 'react'
import logo from '../logo.png'
import {Link} from 'react-router-dom'

export const Logo = () => {

    return (
        <Link to='/' ><img src={logo} className="Logo" alt="logoimage"/></Link>
        )
    }
