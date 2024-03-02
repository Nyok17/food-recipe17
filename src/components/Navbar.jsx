import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
import { GlobalContext } from './Context'

function Navbar() {
    const {searchParam, setSearchParam, handleSubmit}= useContext(GlobalContext);
    console.log(searchParam);



  return (
    <nav className='flex justify-between items-center py-2 -my-10 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
    <h2 className='text-2xl sm:mt-10 font-semi-bold'>
        <Link to={"/"} >Food Recipe</Link>
    </h2>
    <form onSubmit={handleSubmit}>
        <input 
            type='text'
            name='search'
            value={searchParam}
            onChange={(e)=>{
                setSearchParam(e.target.value)
            }}
            placeholder='Enter item...'
            className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200'
        />
        <button className='pointer my-12 p-3 px-4 text-xl'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </form>
    <ul className='flex gap-5'>
    <li>
        <Link to={"/"} className='text-black hover:text-gray-700 duration-300'>Home</Link>
    </li>
    <li>
        <Link to={"/favorites"} className='text-black hover:text-gray-700 duration-300'>Favorites</Link>
    </li>
    </ul>
    </nav>
  )
}

export default Navbar