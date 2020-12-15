import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {LanguageContext} from './context/LanguageContext'
import {Loaderr} from './components/Loaderr'
import {EN, BY, RU} from './languages/locale'
import 'materialize-css'
import Video from './pages/Video'

const App = () => {
  const {token, login, logout, userId, ready, nickname, role} = useAuth()
  const isAuthenticated = !!token
  const [l, sL] = useState()

  let langonsite = localStorage.getItem('lang')
  if (!langonsite) {
      localStorage.setItem('lang', "en")
      sL(EN)
      langonsite = localStorage.getItem('lang')
  }

  const langchanger=(e)=>{
      if (e === 'en') {
          localStorage.setItem('lang','en')
          sL(EN)
      } else if (e === 'ru') {
          localStorage.setItem('lang', 'ru')
          sL(RU)
      } else {
          localStorage.setItem('lang', 'by')
          sL(BY)
      }
  }

  useEffect(()=>{
    langchanger(langonsite)
  },[langonsite])

  const handleSelectChange = (e) => {
      langchanger(e.target.value) }

  const routes = useRoutes({isAuthenticated})

  if (!ready) {
    return <Loaderr />
  }

  return (
    <LanguageContext.Provider value = {[l, sL]}>
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated, nickname, role
      }}>
        <div className="langselect">
                <div className="menu-item lang">
                    <select className="select-lang" value = {l.lang} onChange={(e)=> handleSelectChange(e)}>
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
          <Video/>
            {routes}
          </div>
        </Router>
      </AuthContext.Provider>
    </LanguageContext.Provider>
  )
}

export default App
