import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Signup from './Compoments/Signup'
import Signin from './Compoments/Signin'
import About from './Compoments/About'
import Dashboard from './Compoments/Dashboard'
import Top from './Compoments/Top'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/'  element={<Top/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path = '/about/:id' element={<About/>}/> 
      <Route path = '/dashboard' element={<Dashboard/>}/> 

    </Routes>
    </>
  )
}

export default App