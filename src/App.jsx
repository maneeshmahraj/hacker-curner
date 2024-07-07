
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Login from './Login'
import Home from './Home'
import Addproduct from './Addproduct'
import List from './List'
import Search from './Search'
const App = () => {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='home' element={<Home/>}>
    <Route index element={<Addproduct/>}/>

    <Route path='addproduct' element={<Addproduct/>}>
    <Route path='list' element={<List/>}/>
    <Route path='search' element={<Search/>}/>
    </Route>
   

    </Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
