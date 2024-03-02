import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from './Context';


function Details() {
  const {id}= useParams();
  const{recipeDetailsData, setRecipeDetailsData, handleAddToFavorite}= useContext(GlobalContext)
  const[added, setAdded]= useState(false);
  console.log(id)

  useEffect(()=>{
    async function getRecipeDetails(){
      const res= await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data= await res.json();

      console.log(data)
      if(data?.data){
        setRecipeDetailsData(data?.data)
      }
    }
    getRecipeDetails()
   
  }, [id])
  
  return (
    <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
    <div className='row-start lg:row-start-auto'>
      <div className='h-96 overflow-hidden rounded-xl group'>
        <img src={recipeDetailsData?.recipe?.image_url} 
          className='w-full h-full object-cover block group-hover:scale-105 duration-300'
        />
      </div>
    </div>
    <div className='flex flex-col gap-3'>
      <span className='text-sm text text-cyan-700 font-medium'>{recipeDetailsData?.recipe?.publisher}
      </span>
      <h3 className='font-bold text-2xl truncate text-black'>
        {recipeDetailsData?.recipe?.title}
      </h3>
      <div>
      <button
      onClick={()=>handleAddToFavorite(recipeDetailsData?.recipe)
      } 
      className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wide bg-black text-white'>
      Save as favorite
      </button>
      </div>
      <span className='text-2xl font-semibold text-black'>
        Ingredients:
      </span>
      <ul className='flex flex-col gap-3'>
        {
          recipeDetailsData?.recipe?.ingredients.map(ingredient=>(
            <li>
              <span  className='text-2xl font-semibold text-black'>
                {ingredient.quantity} {ingredient.unit}
              </span>
              <span  className='text-2xl font-semibold text-black'>
                {ingredient.description}
              </span>
            </li>
          ))
        }
      </ul>
    </div>       
    </div>
  )
}

export default Details