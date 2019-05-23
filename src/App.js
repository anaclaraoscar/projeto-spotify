import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Artistas from './pages/Artistas'
import Detalhes from './pages/Detalhes'
import Callback from './pages/Callback'
import AppBar from '@material-ui/core/AppBar'

export const authEndpoint = 'https://accounts.spotify.com/authorize'

// PUBLIC_URL deveria estar setado????
console.log(process.env)

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <AppBar className="App-header">
       Artistas
        </AppBar>
        <div className="Artist-list">
          <h1>Informações</h1>
        </div>

      </div>
      <Route path="/" exact component={Artistas}/>
      <Route path="/detalhes/:id" component={Detalhes}/>
      <Route path="/callback" component={Callback}/>
    </BrowserRouter>

  )
}

export default App
