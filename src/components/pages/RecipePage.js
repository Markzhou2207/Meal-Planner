import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import RecipeModal from "../RecipeModal";
import {useState, useEffect} from 'react';
import RecipeList from "../RecipeList";
import PaginationBar from "../PaginationBar";
function RecipePage() {
    const[showModal, setShowModal] = useState(false)
    const openModal = () =>{
        setShowModal(prev=>!prev)
    }
    const[recipesPerPage] = useState(10)
    const[currentPage, setCurrentPage] = useState(1)
    const[recipes, setRecipes]=useState([])
    
    useEffect(()=>{
        const getRecipes = async()=>{
            const recipesFromServer = await fetchRecipes()
            setRecipes(recipesFromServer)
        }

        getRecipes()
    },[recipes])

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

    //
    const[activeRecipe,setActiveRecipe] = useState('')

    //Adds/Edits Recipe
    const addRecipe = async(recipe) =>{
        const res = await fetch('http://localhost:5000/recipes',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(recipe)
        })

        const data = await res.json()

        setRecipes([...recipes,data])

    }

    //Delete Recipe
    const deleteRecipe= async(id)=>{
        await fetch('http://localhost:5000/recipes/${id}',{
            method:'DELETE',
        })
    }

    //
    const openRecipeModal = (recipe) =>{
        setActiveRecipe(recipe)
        setShowModal(prev=> !prev)
    }
    //
    const editRecipe = async(recipe) =>{
        const id=recipe['id']
        console.log(`http://localhost:5000/recipes/${id}`)
        const res = await fetch(`http://localhost:5000/recipes/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(recipe)
        })

        const data = await res.json()

        setRecipes([...recipes,data])

    }
    return (
        <>
            <Container>
            <div>
                <h1 style={{display:'inline-block'}}>Recipes</h1>
                <Button onClick={openModal} style={{display:'inline-block',float:'right',top:'50%'}} variant='primary'>Create New</Button>{' '}
                <RecipeModal showModal={showModal} setShowModal={setShowModal} onAdd={addRecipe} onEdit={editRecipe}activeRecipe={activeRecipe}/>
                <RecipeList recipes={currentRecipes} openRecipeModal={openRecipeModal}/>
                <PaginationBar recipesPerPage={recipesPerPage} totalRecipes={recipes.length} paginate={paginate}></PaginationBar>
            </div>
            </Container>
        </>
    );
  }

  export default RecipePage;
