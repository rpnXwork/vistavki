import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
import jwt from 'jsonwebtoken'
import './style/AuthPage.css'
import { NavLink } from 'react-router-dom'
import {API, PORT} from '../api'
import Logo from './Logo'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {request, error, clearError} = useHttp()
  const [mes, setMes] = useState(null)

  const [form, setForm] = useState({
    email: "", password: ""
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

  function validate(email) {
    // eslint-disable-next-line no-useless-escape
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // const passvalidate = (password) => {
  //   let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,99}$/
  //   return passw.test(password)
  // }

  const check = (email, password) => {
    if (!validate(email)){
      setMes("Wrong Email")
      return false
    }
    if (password.length < 8){
      setMes("Password low than 8 symbol")
      return false
    } 
    // if (!passvalidate(password)){
    //   setMes("Password must contain at least one numericdigit,</br>one uppercase and one lowercase letter")
    //   return false
    // }
    setMes(null)
    return true
    }

  const keyHandler = (event) => {
      let key = event.key;
      if (key === "Enter"){
        loginHandler();
    }
  }

  const loginHandler = async () => {
    if (check(form.email, form.password)){
      try {
      const data = await request(`${API}${PORT}/auth`, 'POST', finaltoken)
      console.log(data)
      auth.login(data.token,data.id,data.nickName,data.role)
      } catch (e) {
        setMes(e.message)
      }
    }
  }

  return (
    <div className="registratin">
      <Logo/>
        <div className="cont">
            <div className="wrap-login">
                <div className="login-form" >
                    <div className="login-form-title">
                    <NavLink  to='/'><i className='login-form-tittle-btn large material-icons'>arrow_back</i></NavLink>Login Page
                    </div>
                <div className="wrap-input" data-validate="Email is required">
                    <input
                        className="input-area"
                        type="text"
                        name="email"
                        placeholder="email"
                        value={form.emale}
                        onChange={changeHandler}
                        onKeyPress={keyHandler}
                        required
                    />
                    <span className="focus-input"></span>
                </div>
                <div className="wrap-input" data-validate="Password is required">
                    <input
                        className="input-area"
                        type="password"
                        name="password"
                        placeholder="password"
                        value={form.password}
                        onChange={changeHandler}
                        onKeyPress={keyHandler}
                        required
                    />
                    <span className="focus-input"></span>
                </div>
                <div className="btns">
                    <button
                    type="submit"
                    placeholder="Login"
                    className="button-login pulse"
                    onClick={loginHandler}
                    // disabled={loading}
                    onKeyPress={keyHandler}
                    >Log In
                    </button>
                  </div>
                <div className="login-text-butn">
                  Have mo account? Go to 
                  <NavLink className="registration-text" to='/reg'> registration </NavLink> page
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
