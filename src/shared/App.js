// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import { APP_NAME } from './config'
import theme from './theme'

import Header from './components/Header'

import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Lobby from './components/pages/Lobby'
import Jam from './containers/Jam'
import NotFound from './components/pages/NotFound'

import {
  HOME_PAGE_ROUTE,
  LOBBY_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
  jamPageRoute,
} from './routes'

const JAM_PAGE_ROUTE = jamPageRoute()

const AppContainer = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
      <Header />
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} render={() => <Home />} />
        <Route path={LOBBY_PAGE_ROUTE} render={() => <Lobby />} />
        <Route path={LOGIN_PAGE_ROUTE} render={() => <Login />} />
        <Route path={REGISTER_PAGE_ROUTE} render={() => <Register />} />
        <Route path={JAM_PAGE_ROUTE} render={props => <Jam {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </AppContainer>
  </ThemeProvider>
)

export default App
