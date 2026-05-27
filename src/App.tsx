import React from 'react'
import "./App.scss"
import { BrowserRouter } from 'react-router-dom'
import PublicRoutes from './routes/public/PublicRoutes'

const App = () => {
  return <>

  <BrowserRouter>
    <PublicRoutes/>
  </BrowserRouter>
  
  </>
}

export default App