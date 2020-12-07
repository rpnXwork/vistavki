import React, {useContext, useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {Loaderr} from './components/Loaderr'
import {EN, BY, RU, UA} from './languages/locale'
import 'materialize-css'
import { Language } from './components/Language'

function App() {
  const {token, login, logout, userId, ready, nickname, role} = useAuth()
  const isAuthenticated = !!token

  let langonsite = localStorage.getItem('lang')
  if (!langonsite) {
      localStorage.setItem('lang', JSON.stringify(EN))
      langonsite = localStorage.getItem('lang')
  }

  const [language, setLanguage] = useState(JSON.parse(langonsite))

  const langchanger=(e)=>{
      if (e === 'en') {
          localStorage.setItem('lang', JSON.stringify(EN))
          setLanguage(EN)
      } else if (e === 'ru') {
          localStorage.setItem('lang', JSON.stringify(RU))
          setLanguage(RU)
      } else if (e === 'ua') {
          localStorage.setItem('lang', JSON.stringify(UA))
          setLanguage(UA)
      } else {
          localStorage.setItem('lang', JSON.stringify(BY))
          setLanguage(BY)
      }
  }

  useEffect(()=>{

  },[language])

  const handleSelectChange = (e) => {
      langchanger(e.target.value) }

      console.log(language)
  const routes = useRoutes({isAuthenticated, language})

  if (!ready) {
    return <Loaderr />
  }

  return (
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated, nickname, role
      }}>
        <div className="langselect">
                <div className="menu-item lang">
                    <select className="select-lang" value = {language.lang} onChange={(e)=> handleSelectChange(e)}>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        {/* <option value="ua">Ukrainian</option> */}
                        <option value="by">BY</option>
                    </select>
                </div>   
            </div> 
        <Router>
          {/* { isAuthenticated } */}
          <div className="app">
            {routes}
          </div>
        </Router>
      </AuthContext.Provider>
  )
}

export default App
