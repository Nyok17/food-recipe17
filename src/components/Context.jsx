import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null)

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([])
    const navigate= useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data = await response.json()

            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchParam("")
                navigate("/")
            }

            console.log(data)
        } catch (e) {
            console.log(e)
            setLoading(false)
            setSearchParam("")
        }
    }

    function handleAddToFavorite(getCurrentItem) {
        console.log(getCurrentItem);
        let copyFavoritesList= [...favoritesList];
        const index= copyFavoritesList.findIndex(item=> item.id === getCurrentItem.id)

        if(index === -1){
            copyFavoritesList.push(getCurrentItem)
        }else {
            copyFavoritesList.splice(index)
        }
        setFavoritesList(copyFavoritesList)
    }

    return <GlobalContext.Provider value={{ 
        searchParam, 
        loading, 
        recipeList,
         setSearchParam,
          handleSubmit, 
          recipeDetailsData, 
          setRecipeDetailsData,
          handleAddToFavorite,
          favoritesList
           }}>{children}</GlobalContext.Provider>
}