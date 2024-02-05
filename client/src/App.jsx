import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//routes
import { LoginPage } from './Routes'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={ <LoginPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App