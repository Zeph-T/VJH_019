import React from 'react'
import './App.css'
import Home from './components/home'
import Navbar from './components/navbar'
import DiseaseDetection from './components/diseaseDetection'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/diseasedetection'>
            <DiseaseDetection />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
