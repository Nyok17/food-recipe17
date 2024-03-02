import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './Navbar'
import Favorites from './Favorites'
import Home from './Home'
import Details from './Details'

function App() {
  return (
    <div>
        <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
          <Navbar />
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route 
              path='/favorites'
              element={<Favorites />}
            />
            <Route 
              path='/recipe-item/:id'
              element={<Details />}
            />
          </Routes>
        </div>
    </div>
  )
}

export default App