import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {Logo} from './Logo'
import './style/Header.css'

export const Header = ({l}) => {

    const {token, nickname} = useContext(AuthContext)

    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')}

    return (
        <header className="App-header">
            <Logo/>
            <div className="Menu">
                <div className="menu-item">{l.mainPage.about}</div>
                <div className="menu-item">{l.mainPage.team}</div>
                {token?<div className="menu-item">{nickname}</div>:<div></div>}
                {token?
                <div className="menu-item login" href="/" onClick={logoutHandler}>{l.mainPage.exitButton}</div>:
                <Link className="menu-item login" to='/login'>{l.mainPage.login}</Link>
                }
            </div>
         </header>
        );
    }
    
    