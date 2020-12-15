import React, {useState, useEffect, useContext} from 'react';
import {NavLink} from 'react-router-dom'
import {useMessage} from '../hooks/message.hook'
import {useHttp} from '../hooks/http.hook'
import jwt from 'jsonwebtoken'
import {Logo} from './Logo'
import {Timer} from '../components/Timer'
import './style/RegistrationPage.css'
import {Loaderr} from '../components/Loaderr'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {API, PORT} from '../api'
import {LanguageContext} from '../context/LanguageContext'

export const RegistrationPage = () => {
    const message = useMessage()
    const [mes, setMes] = useState(null)
    const {loading, request, error, clearError} = useHttp()
    const [status, setStatus] = useState(false)
    const [passwordShow, setPasswordShow] = useState(false)
    const [l] = useContext(LanguageContext)

    const [form, setForm] = useState({
        email: "", password: "", name: "", surname: "", nickname: ""
      })
    const [rpas, setRpas] = useState({
        repeatPassword: ""
    })

    let jtoken = jwt.sign(form, 'secret', {algorithm: 'HS512'})
    let finaltoken = {token: jtoken}

      useEffect(() => {
        message(mes)
        message(error)
        setMes(null)
        clearError()
      }, [error, mes, message, clearError])
    
      useEffect(() => {
        window.M.updateTextFields()
      }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const reppas = event => {
        setRpas({ ...rpas, [event.target.name]: event.target.value })
    }

    function validate(email) {
        // eslint-disable-next-line no-useless-escape
        let ema = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return ema.test(email);
      }
    // const passvalidate = (password) => {
    //     let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,99}$/
    //     return passw.test(password)
    // }
    
    const check = (email, password, repeatPassword, nickname, name, surname) => {
    if (!email){
        setMes("Enter Email!")
        return false
    }
    if (!validate(email)){
        setMes("Wrong Email format")
        return false
    }
    if (!password){
        setMes("Enter Password!")
        return false
    }
    if (password.length < 8){
        setMes("Password low than 8 symbol")
        return false
    }
    // if (!passvalidate(password)){
    //     setMes("Password must contain at least one numericdigit,</br>one uppercase and one lowercase letter")
    //     return false
    // }
    if (!repeatPassword){
        setMes("Repeat you Password")
        return false
    }
    if (password !== repeatPassword){
        setMes("RepeatPassword not match witg Password")
        return false
    }
    if (!nickname){
        setMes("Enter Nickname!")
        return false
    }
    if (nickname.length < 3){
        setMes("NickName must be more 3 than symbols")
        return false
    }
    if (!name){
        setMes("Enter you Name Bitch!")
        return false
    }
    if (name.length <= 3){
        setMes("Name must be more than 3 symbols")
        return false
    }
    if (!surname){
        setMes("Surname need!")
        return false
    }
    setMes(null)
    return true   
    }

    const reset = (event) => {
        event.preventDefault()
        setForm({
            email: "",
            password: "", 
            name: "",
            surname: "",
            nickname: "",
          })
    }

    const registrationHandler = async () => {
        if (check(
            form.email,
            form.password,
            rpas.repeatPassword,
            form.nickname,
            form.name,
            form.surname
            )){
                try {
                    const data = await request(`${API}${PORT}/register`, 'POST', finaltoken)
                        setStatus(true)
                        setMes(data.message)
                } catch (e) {
                    setStatus(true)
                }
          }
    }
    if (status)
    {return(
    <div className="afterregblock">
        <Loaderr/>
        <div>Check Email and confirm it!</div>
        <div>You will redirect to main page after <Timer  timeout={5000} adress={'/'} /> second..</div>
        <NavLink to='/'>Main</NavLink>
        
    </div>)}
    return (
        <>
        <div className="registratin">
            <Logo/>            
            <div className="cont">
                <div className="wrap-login">
                    <div className="login-form" >
                        <div className="login-form-title">
                        <NavLink  to='/login'><i className='login-form-tittle-btn large material-icons'>arrow_back</i></NavLink>
                            {l.registrationPage.tittle}
                        </div>
                    <div className='columns'>
                        <div className='column'>
                            <div className="wrap-input" data-validate="Email is required">
                                <input
                                    className="input-area"
                                    type="text"
                                    name={l.registrationPage.email}
                                    placeholder="email"
                                    value={form.email}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input" data-validate="Password is required">
                            <button className='showpassword-btn-auth' onClick={()=>setPasswordShow(!passwordShow)}>
                                <FontAwesomeIcon icon={passwordShow?faEye:faEyeSlash} size="lg"/>
                            </button>
                                <input
                                    className="input-area"
                                    type={passwordShow?"text":"password"}
                                    name="password"
                                    placeholder={l.registrationPage.password}
                                    value={form.password}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input" data-validate="Nickname is required">
                                <input
                                    className="input-area"
                                    type="text"
                                    name={l.registrationPage.name}
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                        </div>

                        <div className='column'>
                            <div className="wrap-input" data-validate="Email is required">
                                <input
                                    className="input-area"
                                    type="text"
                                    name="nickname"
                                    placeholder={l.registrationPage.nickname}
                                    value={form.nickname}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input" data-validate="Password is required">
                                <input
                                    className="input-area"
                                    type={passwordShow?"text":"password"}
                                    name="repeatPassword"
                                    placeholder={l.registrationPage.repeatPassword}
                                    value={rpas.repeatPassword}
                                    onChange={reppas}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                            <div className="wrap-input" data-validate="Email is required">
                                <input
                                    className="input-area"
                                    type="text"
                                    name={l.registrationPage.surname}
                                    placeholder="Surname"
                                    value={form.surname}
                                    onChange={changeHandler}
                                    required
                                />
                                <span className="focus-input"></span>
                            </div>
                        </div>
                       
                    </div>

                    <div className="btns">
                        <button
                            className="button-reset"
                            onClick={reset}
                            >
                            <i className="buttonimage Small material-icons">refresh</i> 
                        </button>
                        <button
                            className="button-login buttom-reg pulse"
                            onClick={registrationHandler}
                            disabled={loading}
                        >
                          {l.registrationPage.button}
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }
