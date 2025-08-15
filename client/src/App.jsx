import React from 'react'
import Nabvar from './components/Nabvar'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './page/Home';
import Movies from './page/movies';
import Moviedetails from './page/moviedetails';
import Layout from './page/Layout';
import Mybooking from './page/mybooking';
import Favorite from './page/favorite';
import {Toaster} from 'react-hot-toast';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Layoutsp from './page/admin/Layoutsp';
import Dashboard from './page/admin/Dashboard';
import AddShow from './page/admin/AddShow';
import ListShow from './page/admin/ListShow';
import ListBookings from './page/admin/ListBookings';
function App() {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
      <Toaster/>
      {!isAdminRoute && <Nabvar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<Moviedetails/>}/>
        <Route path='/movies/:id/:date' element={<Layout/>}/>
        <Route path='/my-booking' element={<Mybooking/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/admin/*' element={<Layoutsp/>}> 
          <Route index element={<Dashboard/>}/>
          <Route path='add-shows' element={<AddShow/>}/>
          <Route path='list-shows' element={<ListShow/>}/>
          <Route path='list-bookings' element={<ListBookings/>}/>
        </Route>
      </Routes>
        {!isAdminRoute && <Footer/>}
        
    </>
  )
}

export default App
