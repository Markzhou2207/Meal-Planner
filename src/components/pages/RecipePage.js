import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import RecipeModal from "../RecipeModal";
import {useState, useEffect} from 'react';
import RecipeList from "../RecipeList";
import PaginationBar from "../PaginationBar";
function RecipePage() {
    const[showModal, setShowModal] = useState(false)
    const[recipesPerPage] = useState(10)
    const[currentPage, setCurrentPage] = useState(1)
    const[recipes, setRecipes]=useState([])
    const[refreshRecipes, setRefreshRecipes]=useState(false)
    const[activeRecipe,setActiveRecipe] = useState('')
    
    //Addes recipes from json into the recipe list
    //refreshes with refreshRecipe value changes
    useEffect(()=>{
        const getRecipes = async()=>{
            const recipesFromServer = await fetchRecipes()
            setRecipes(recipesFromServer)
        }

        getRecipes()
    },[refreshRecipes])

    // Fetches recipes from JSON
    const fetchRecipes= async()=>{
        const res = await fetch('http://localhost:5000/recipes')
        const data = await res.json()
        return data
    }



    //Variables needed for pagination
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe,indexOfLastRecipe)

    //Change recipes displayed
    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    //Adds new recipe to json server
    const addRecipe = async(recipe) =>{
        const res = await fetch('http://localhost:5000/recipes',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(recipe)
        })

        const data = await res.json()


        setRefreshRecipes(prev=>!prev)

    }

    //Deletes recipe from json server
    const deleteRecipe= async(id)=>{
        await fetch(`http://localhost:5000/recipes/${id}`,{
            method:'DELETE',
        })

        setRefreshRecipes(prev=>!prev)
    }

    // PUTS the recipe into the json server
    const editRecipe = async(recipe) =>{
        const res = await fetch(`http://localhost:5000/recipes/${recipe['id']}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(recipe)
        })

        const data = await res.json()

        setRefreshRecipes(prev=>!prev)

    }
    // Opens the modal with the recipe information
    const openRecipeModal = (recipe) =>{
        if(recipe){
            setActiveRecipe(recipe)
        } else {
            setActiveRecipe('')
            console.log('no active recipe')

        }
        setShowModal(prev=> !prev)
    }
    return (
        <>
            <Container>
            <div>
                <h1 style={{display:'inline-block'}}>Recipes</h1>
                <Button onClick={()=>openRecipeModal()} style={{display:'inline-block',float:'right',top:'50%'}} variant='primary'>Create New</Button>{' '}
                <RecipeModal showModal={showModal} setShowModal={setShowModal} addRecipe={addRecipe} 
                editRecipe={editRecipe} deleteRecipe={deleteRecipe} activeRecipe={activeRecipe} setActiveRecipe={setActiveRecipe}/>
                <RecipeList recipes={currentRecipes} openRecipeModal={openRecipeModal}/>
                <PaginationBar recipesPerPage={recipesPerPage} totalRecipes={recipes.length} paginate={paginate}></PaginationBar>
            </div>
            </Container>
        </>
    );
  }

  export default RecipePage;
