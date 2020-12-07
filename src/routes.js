import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage'
import {ActivatePage} from './pages/ActivatePage'
import {MainPage} from './pages/MainPage'
import {RegistrationPage} from './pages/RegistrationPage'

export const useRoutes = ({isAuthenticated, language}) => {

  console.log(language)
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <MainPage l={language}/>
        </Route>
        <Route path="/activate/:code">
          <ActivatePage/>
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <MainPage l={language}/>
      </Route>
      <Route path="/reg" exact>
        <RegistrationPage />
      </Route>
      <Route path="/activate/:code">
        <ActivatePage/>
      </Route>
      <Route path="/login" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
