import React from 'react'
import {Link} from "react-router-dom"

function RecipeItem({item}) {
    return (
        <div className='flex flex-col w-72 overflow-hidden gap-1 p-5 bg-white/75 shadow-xl border-2 rounded-2xl border-white'>
        <div className='h-40  flex justify-center items-center overflow-hidden rounded-xl'>
        <img src={item?.image_url} alt='recipe item' className='block w-full' />
        </div>
        <div>
            <span className='text-sm text-cyan-700 font-md'>{item?.publisher}</span>
            <h3 className='font-bold text-2xl truncate text-black'>{item?.title}</h3>
            <Link to={`/recipe-item/${item?.id}`
            }
            className='text-sm p-3 px-8 rounded-lg uppercase font-md tracking-wider mt-5 inline-block shadow-md bg-black text-white'>
            Recipe Details</Link>
        </div>
        </div>
    )
}

export default RecipeItem