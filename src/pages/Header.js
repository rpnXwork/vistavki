import React, { useContext } from 'react';
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import Logo from './Logo';
import './style/Header.css';

function Header({l}) {

    const {token, userId, nickname} = useContext(AuthContext)

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
                {token?<NavLink to={`/user/${userId}`} className="menu-item">{nickname}</NavLink>:<div></div>}
                {token?
                <div className="menu-item login" href="/" onClick={logoutHandler}>{l.mainPage.exitButton}</div>:
                <NavLink className="menu-item login" to='/login'>{l.mainPage.login}</NavLink>
                }
            </div>
         </header>
        );
    }
    
    export default Header;
    