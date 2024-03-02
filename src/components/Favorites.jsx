import React, {useContext} from 'react'
import RecipeItem from './RecipeItem';
import {GlobalContext} from './Context';

function Favorites() {
  const{favoritesList}= useContext(GlobalContext);


  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
        {
            favoritesList && favoritesList.length > 0 ? (
            favoritesList.map((item)=> <RecipeItem item={item}/>) 
            ): (
            <div>
                <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing Added in favorites</p>
            </div>
            )}
    </div>
  )
}

export default Favorites