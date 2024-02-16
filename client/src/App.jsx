import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//routes
import { ActivationPage, LoginPage, SignUpPage } from './Routes'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={ <LoginPage/>} />
        <Route path='/signup' element={ <SignUpPage/>} />
        <Route path='/activation/:activation_token' element={ <ActivationPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App