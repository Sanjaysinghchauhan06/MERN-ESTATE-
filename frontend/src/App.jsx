import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Singin from './pages/singin'
import Profile from './pages/Profile'

import About from './pages/About'
import SignUp from './pages/SignUp'
import Header from './components/header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing' 
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Home from './pages/Home'
import Search from './pages/Search'



export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='/Singin' element={<Singin/>} />
      <Route path='/SingUp' element={<SignUp/>} /> 
      <Route path='/About' element={<About/>} />
      <Route path='/search' element={<Search />} />
      <Route path='/listing/:listingId' element={<Listing />} />
      <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing/>} />
          <Route path='/update-listing/:listingId' element={<UpdateListing/>} />
         </Route>
         

      

     
    </Routes>
    </BrowserRouter>
  )
}
