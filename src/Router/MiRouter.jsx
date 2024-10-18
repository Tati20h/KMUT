import React from 'react'
import { Home } from '../Components/Home'
import { Pay } from '../Components/Pay'
import { Products } from '../Components/Products'
import { Blog } from '../Components/Blog'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../Components/layaut/NavBar'

export const MiRouter = () => {
  return (
    <>
      <NavBar />


      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/blog' element={<Blog />} />

        <Route path='*' element={
          <div className='page'>
            <h1 className='heading'>Error 404 </h1>
          </div>} />
      </Routes>


    </>

  )
}
